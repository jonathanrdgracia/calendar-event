import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../action/ui'
import '../../css/fab.css'

// Floating Action Button
const AddNewFab = () => {
    const dispatch = useDispatch()

    const onHandleButton =()=>{
        dispatch( uiOpenModal() )    
    }

    return (
        <button onClick = { onHandleButton } className='btn btn-primary fab'>
            <i className="fas fa-plus"></i>
        </button>
    )
}

export default AddNewFab
