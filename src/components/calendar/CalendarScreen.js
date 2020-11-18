import React, { useState } from 'react'
import Navbar from '../ui/Navbar'
import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es-do'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../css/CalendarScreen.css'
import messages from '../../help/calendar-messages-es'
import CalendarEvent from './CalendarEvent'
import CalendarModal from './CalendarModal'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../action/ui'
import { eventClearActiveEvent, eventSetNew } from '../../action/event'
import AddNewFab from '../ui/AddNewFab'
import DeleteEventFab from '../ui/DeleteEventFab'

const localizer = momentLocalizer(moment)
moment.locale('es')


function CalendarScreen() {

    const { events,activeEvent } = useSelector(state => state.calendar)   
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month' )
    const dispatch = useDispatch()    
    
    const onSelectSlot=e=>{
        dispatch(eventClearActiveEvent())   
    }
    const onDoubleClick=e=>{
        dispatch(uiOpenModal())
    }
    const onSelectEvent=e=>{
        dispatch(eventSetNew(e))
    }

    const onViewChange= e => {
        
        localStorage.setItem('lastView',e)
        setLastView(e)
    }
    
    const eventPropGetter=(event,start,end,isSelected)=>{
        const style={
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return{
            style
        }
    }
    return (
        <div
            className='calendar--screen'
        >
           <Navbar/>

           <Calendar
                onSelectEvent = { onSelectEvent }
                onDoubleClickEvent = { onDoubleClick }
                localizer={ localizer }
                events= {events}
                onSelectSlot = { onSelectSlot }
                selectable= {true}
                startAccessor='start'
                endAccessor='end'
                messages= {messages}
                eventPropGetter={eventPropGetter}
                onView = {onViewChange}
                view = {lastView}
                components={{
                event: CalendarEvent
               }}
           />
           <CalendarModal/>
           <AddNewFab/>
           { activeEvent && (<DeleteEventFab/>)}

           
        </div>
    )
}

export default CalendarScreen
