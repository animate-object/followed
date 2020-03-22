import { ID, Dimension, Point, Maybe } from "..";
import { Entity, Player } from "../entities";
import { Arrays } from "../../util";
import { EntityData } from ".";

export interface EntityData {
  entityMap: Record<ID.ID, Entity.Entity>;
  positionMap: Record<number, ID.ID[]>;
  playerEntityId: Maybe.Maybe<ID.ID>;
  typeMap: Record<string, ID.ID[]>;
}

export const addEntity = (
  { entityMap, positionMap, playerEntityId, typeMap }: EntityData,
  d: Dimension.Dimension,
  e: Entity.Entity
): EntityData.EntityData => {
  const index = Point.toIndex(e.position, d);

  return {
    playerEntityId,
    positionMap: {
      ...positionMap,
      [index]: positionMap[index] ? [...positionMap[index], e.id] : [e.id]
    },
    entityMap: { ...entityMap, [e.id]: e },
    typeMap: {
      ...typeMap,
      [e.type]: typeMap[e.type] ? [...typeMap[e.type], e.id] : [e.id]
    }
  };
};

export const fromEntities = (
  entities: Entity.Entity[],
  dimension: Dimension.Dimension
): EntityData => ({
  entityMap: entities.reduce((m: Record<ID.ID, Entity.Entity>, e) => {
    m[e.id] = e;
    return m;
  }, {}),
  positionMap: entities.reduce((m: Record<number, ID.ID[]>, e) => {
    const idx = Point.toIndex(e.position, dimension);
    m[idx] = m[idx] ? [...m[idx], e.id] : [e.id];
    return m;
  }, {}),
  playerEntityId: Maybe.map(
    p => p.id,
    entities.find(e => e.type === "player")
  ),
  typeMap: entities.reduce(
    (m: Record<string, ID.ID[]>, e) => ({
      ...m,
      [e.type]: m[e.type] ? [...m[e.type], e.id] : [e.id]
    }),
    {}
  )
});

export const entitiesAtPoint = (
  data: EntityData,
  p: Point.Point,
  d: Dimension.Dimension
): Entity.Entity[] => {
  const idx = Point.toIndex(p, d);
  const ids = data.positionMap[idx] || [];
  return ids.map(id => data.entityMap[id]);
};

export const getPlayer = (data: EntityData): Player.Player =>
  Maybe.map(id => data.entityMap[id] as Player.Player, data.playerEntityId)!;

export const byId = (data: EntityData, id: ID.ID) => data.entityMap[id];

export const byType = (data: EntityData, type: string): Entity.Entity[] =>
  Arrays.nonNull(data.typeMap[type] || []).map(id => data.entityMap[id]);

export const moveEntity = (
  id: ID.ID,
  data: EntityData,
  p: Point.Point,
  d: Dimension.Dimension
): EntityData => {
  const entity = data.entityMap[id];
  if (entity != null) {
    const oldIdx = Point.toIndex(entity.position, d);
    const newIdx = Point.toIndex(p, d);
    const newEntity = { ...entity, position: p };
    return {
      ...data,
      entityMap: { ...data.entityMap, [id]: newEntity },
      positionMap: {
        ...data.positionMap,
        [oldIdx]: [
          ...(data.positionMap[oldIdx] || []).filter(eId => eId !== id)
        ],
        [newIdx]: [...(data.positionMap[newIdx] || []), id]
      }
    };
  } else {
    return data;
  }
};

export const removeEntity = (
  id: ID.ID,
  data: EntityData,
  d: Dimension.Dimension
): EntityData => {
  const entity = data.entityMap[id];
  const idx = Point.toIndex(entity.position, d);
  return {
    ...data,
    entityMap: Object.keys(data.entityMap).reduce(
      (m: Record<ID.ID, Entity.Entity>, k) => {
        if (k !== id) {
          m[k] = data.entityMap[k];
        }
        return m;
      },
      {}
    ),
    typeMap: Object.keys(data.typeMap).reduce(
      (m: Record<string, ID.ID[]>, k) => {
        if (k === entity.type) {
          m[k] = data.typeMap[k].filter(eId => eId !== id);
        } else {
          m[k] = data.typeMap[k];
        }
        return m;
      },
      {}
    ),
    positionMap: Object.keys(data.positionMap)
      .map(k => parseInt(k) as number)
      .reduce((m: Record<number, ID.ID[]>, k: number) => {
        if (k === idx) {
          m[k] = data.positionMap[k].filter(eId => eId !== id);
        } else {
          m[k] = data.positionMap[k];
        }
        return m;
      }, {})
  };
};

// might need to augment to handle type change
export const updateEntity = (
  updated: Entity.Entity,
  data: EntityData
): EntityData => ({
  ...data,
  entityMap: { ...data.entityMap, [updated.id]: updated }
});

export const entitiesCrossed = (
  last: EntityData,
  next: EntityData,
  a: ID.ID,
  b: ID.ID
): boolean => {
  const lastA = last.entityMap[a];
  const lastB = last.entityMap[b];
  const nextA = next.entityMap[a];
  const nextB = next.entityMap[b];

  return (
    Point.equals(nextA.position, lastB.position) &&
    Point.equals(nextB.position, lastA.position)
  );
};

export const neighborsCrossedByEntity = (
  last: EntityData,
  next: EntityData,
  e: ID.ID,
  d: Dimension.Dimension
): Entity.Entity[] => {
  const neighborIndices = Point.neighbors(
    next.entityMap[e].position,
    d
  ).map(p => Point.toIndex(p, d));

  const neighborEntities = neighborIndices.reduce(
    (entities: ID.ID[], idx) => entities.concat(next.positionMap[idx] || []),
    []
  );

  return neighborEntities
    .filter(id => entitiesCrossed(last, next, e, id))
    .map(id => next.entityMap[id]);
};
