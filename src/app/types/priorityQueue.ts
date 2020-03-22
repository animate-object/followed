import { Maybe } from ".";

export type Queue<T> = Record<number, T[]>;

export const create = <T>(): Queue<T> => ({});

export const queue = <T>(
  queue: Queue<T>,
  item: T,
  priority: number
): Queue<T> => ({
  ...queue,
  [priority]: queue[priority] ? [...queue[priority], item] : [item]
});

interface DequeueResult<T> {
  queue: Queue<T>;
  item: Maybe.Maybe<T>;
}

type Prioritizer = (...priorities: number[]) => number;
type Equals<T> = (a: T, b: T) => boolean;

export const highestPrioritity = (
  queue: Queue<any>,
  prioritizer: Prioritizer
): Maybe.Maybe<number> => {
  const priorities = Object.keys(queue)
    .map(k => (k as any) as number)
    .filter(k => queue[k] != null && queue[k].length > 0);
  const highest = prioritizer(...priorities);
  if (highest === Infinity) {
    console.log({
      msg: "wtf",
      priorities,
      highest,
      keys: Object.keys(queue),
      queue
    });
  } else {
    return highest;
  }
};

export const dequeue = <T>(
  queue: Queue<T>,
  prioritize: Prioritizer = Math.max,
  equals: Equals<T> = (a, b) => a === b
): DequeueResult<T> => {
  const removeFrom = highestPrioritity(queue, prioritize);
  if (removeFrom) {
    const removed = queue[removeFrom][0];
    const updated = queue[removeFrom].filter(i => !equals(removed, i));
    return {
      queue: {
        ...queue,
        [removeFrom]: updated
      },
      item: Maybe.of(removed)
    };
  } else {
    return { queue, item: Maybe.none() };
  }
};
