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
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../action/ui'
import { eventSetNew } from '../../action/event'
import AddNewFab from '../ui/AddNewFab'

const localizer = momentLocalizer(moment)
moment.locale('es')

const events = [{
    title: 'Comprar el pastel',
    notes: 'jejeje',
    start: moment().toDate(),
    end: moment().add(1,'hour').toDate(),
    bgColor: 'yellow',
    user:{
        id:'skdAf2hR2Ab0sGpAQ',
        name:'Jonathan'
    },
},{
    title: 'Comprar el pastel',
    notes: 'jejeje',
    start: moment().add(3,'days').toDate(),
    end: moment().add(3,'days').add(1,'hours').toDate(),
    bgColor: 'yellow',
    user:{
        id:'skdAf2hR2Ab0sGpAQ',
        name:'Jonathan'
    },
}]

function CalendarScreen() {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month' )
    const dispatch = useDispatch()    
    
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
        </div>
    )
}

export default CalendarScreen
