export interface Message {
  message: string;
  speaker?: string;
}

export const create = (message: string, speaker?: string): Message => ({
  message,
  speaker
});
