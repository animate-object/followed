import { ID, Dimension, Point } from "..";
import { Entity } from "../entities";

export interface EntityData {
  entityMap: Record<ID.ID, Entity.Entity>;
  positionMap: Record<number, ID.ID[]>;
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
  }, {})
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
