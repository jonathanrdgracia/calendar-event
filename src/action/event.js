import { types } from "../type/types"

export const eventAddNew =event=>({
    type: types.eventAddNew,
    payload: event
})

export const eventSetNew =event=>({
    type: types.eventSetActive,
    payload: event
})