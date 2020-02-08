export interface Dimension {
  width: number;
  height: number;
}

export const create = (width: number = 0, height: number = 0): Dimension => ({
  width,
  height
});
