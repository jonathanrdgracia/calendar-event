import moment from 'moment'
import { types } from '../type/types'


const initialState = {
    events:[{
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
        case types.eventSetActive:
            return{
                ...state,
                activeEvent: action.payload,
            }
        
        default: return state
    }
}