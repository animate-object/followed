import { ID, Dimension, Point, Maybe } from "..";
import { Entity } from "../entities";

export interface EntityData {
  entityMap: Record<ID.ID, Entity.Entity>;
  positionMap: Record<number, ID.ID[]>;
  playerEntityId: Maybe.Maybe<ID.ID>;
}

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
