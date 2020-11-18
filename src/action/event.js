import { types } from "../type/types"

export const eventAddNew =event=>({
    type: types.eventAddNew,
    payload: event
})

export const eventSetNew =event=>({
    type: types.eventSetActive,
    payload: event
})

export const eventUpdate=event=>({
    type: types.eventUpdate,
    payload: event
})
export const eventDelete = ()=>({ type: types.eventDelete})

export const eventClearActiveEvent = ()=>({ type: types.eventClearActiveEvent})