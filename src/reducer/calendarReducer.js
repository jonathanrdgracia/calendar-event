import moment from 'moment'
import { types } from '../type/types'


const initialState = {
    events:[{
        id: new Date().getTime(),
        title: 'Comprar el pastel',
        notes: 'jejeje',
        start: moment().toDate(),
        end: moment().add(1,'hour').toDate(),
        bgColor: 'yellow',
        user:{
            id:'skdAf2hR2Ab0sGpAQ',
            name:'Jonathan'
        }
    }],
    activeEvent: null
}
export const calendarReducer =(state = initialState, action)=>{
    
    switch(action.type){

        case types.eventAddNew:
            return{
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        case types.eventClearActiveEvent:
            return{
                ...state,
                activeEvent: null

            }
        case types.eventSetActive:
            return{
                ...state,
                activeEvent: action.payload,
            }
        
        case types.eventUpdate:
            return{
                ...state,
                events:state.events.map(
                    e => (action.payload.id === e.id) ? action.payload: e
                )
            }
        case types.eventDelete:
            return{
                ...state,
                events:state.events.filter(
                    e => (state.activeEvent.id !== e.id)
                ),
                activeEvent: null
            }
        default: return state
    }
}