import React, { useState } from 'react'
import AppRouter from '../../router/AppRouter'
import Navbar from '../ui/Navbar'
import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es-do'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../css/CalendarScreen.css'
import messages from '../../help/calendar-messages-es'
import CalendarEvent from './CalendarEvent'
import CalendarModal from './CalendarModal'

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
    }
}]

function CalendarScreen() {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month' )
    
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
        </div>
    )
}

export default CalendarScreen
