import { Dimension, MazeData } from "../types";

const API_ROOT = "https://fv9o21r19a.execute-api.us-east-1.amazonaws.com/dev";

export const maze = ({
  dimension = Dimension.create(10, 10),
  algorithm = "aldous-broder"
}: MazeData.Options = {}): Promise<MazeData.MazeData> => {
  const request = fetch(`${API_ROOT}`, {
    method: "post",
    mode: "cors",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ dimensions: dimension, algorithm })
  });
  return request
    .then(response => response.text())
    .then(base64 => MazeData.fromApi(dimension, base64));
};