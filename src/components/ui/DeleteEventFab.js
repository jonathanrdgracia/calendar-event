import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eventDelete } from '../../action/event'
import { uiOpenModal } from '../../action/ui'
import '../../css/fab.css'

// Floating Action Button
const DeleteEventFab = () => {
    const dispatch = useDispatch()

    const onDeleteEvent =()=>{
        dispatch( eventDelete())
    }

    return (
        <button
            onClick = { onDeleteEvent }
            className='btn btn-danger fab-danger'>
            <i className ='fas fa-trash'></i>
            <span>Borrar</span>
        </button>
    )
}

export default DeleteEventFab
