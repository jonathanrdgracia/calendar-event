import React from 'react'

function CalendarEvent({event}) {
    const {user, title} = event

    return (
        <div>
            <p>
            🌟 {user.name} - {title} </p>
           
        </div>
    )
}

export default CalendarEvent
