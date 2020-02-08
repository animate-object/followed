

export enum ActionTypes {
    INITIALIZE = "INITIALIZE"
}

export interface Initialize {
    type: ActionTypes.INITIALIZE
}

export type AppAction = Initialize

export const initialize = (): Initialize => ({type: ActionTypes.INITIALIZE})