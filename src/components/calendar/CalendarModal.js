import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../../css/CalendarModal.css'
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal, uiOpenModal } from '../../action/ui'

const customStyles = {
  content : {
  top        : '50%',
  left       : '50%',
  right      : 'auto',
  bottom     : 'auto',
  marginRight: '-50%',
  transform  : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const today = moment().minute(0).second(0)
const lastDate = today.clone().add(1,'hours').toDate()


const CalendarModal = () => {

  const dispatch = useDispatch()
  const { modalOpen } = useSelector(state => state.ui)

  const [dateStart, setDateStart] = React.useState(today.toDate())
  const [dateEnd, setDatEnd] = React.useState(lastDate)
  const [titleValid, setTitleValid] = React.useState(true)
  
  const closeModal=()=>{
    dispatch(uiCloseModal())
  }
  const [formValue,setFormValue] = React.useState({
    title: 'Evento',
    notes: '',
    start: today.toDate(),
    end: lastDate
  })

  const { title, note, start, end } = formValue
  
  const handleInputChange = ({target}) =>{
    setFormValue({
      ...formValue,
      [target.name] : target.value,
    })
  }
  const handleStartDate= e =>{
    
    setDateStart(e)
    setFormValue({
      ...formValue,
      start: e
    })
  }
  const handleEndDate= e =>{
    console.log(start);
    console.log(end);
    setDatEnd(e)
    setFormValue({
      ...formValue,
      end: e
    })
  }
    const handleOnsubmit =(e)=>{
      e.preventDefault()
      
      const momentStart = moment(start)
      const momentEnd = moment(end)
      console.log(momentStart);
      console.log(momentEnd);
      console.log(momentStart.isSameOrAfter(momentEnd));
      
      if(momentStart.isSameOrAfter(momentEnd)){
        console.log('fecha 2 debe ser mayor');
      }

      if(title.trim().length < 2){
          setTitleValid(false)
      }else{
        setTitleValid(true)
      }

      
    }

    return (
        <Modal
          isOpen={ modalOpen }
          style={customStyles}
          className='modal'
          overlayClassName='modal-fondo'
          closeTimeoutMS = { 200 }
          onRequestClose = { closeModal }
        >
          <h1> Nuevo evento </h1>
          <hr />
          <form 
            onSubmit = { handleOnsubmit }
            className="container">

              <div className="form-group">
                  <label>Fecha y hora inicio</label>
                  <DateTimePicker
                    onChange = { handleStartDate }
                    value = { dateStart }
                    className= 'form-control'
                  />
              </div>

              <div className="form-group">
                  <label>Fecha y hora fin</label>
                  <DateTimePicker
                    onChange = { handleEndDate }
                    value = { dateEnd }
                    className= 'form-control'
                  />
              </div>

              <hr />
              <div className="form-group">
                  <label>Titulo y notas</label>
                  <input 
                      type="text" 
                      className= { `form-control ${ !titleValid && 'is-invalid' } ` }
                      placeholder="Título del evento"
                      name="title"
                      value = { title }
                      onChange = { handleInputChange }
                      autoComplete="off"
                  />
                  <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
              </div>

              <div className="form-group">
                  <textarea 
                      type="text" 
                      className="form-control"
                      placeholder="Notas"
                      rows="5"
                      name="notes"
                      value = { note }
                      onChange = { handleInputChange }
                  ></textarea>
                  <small id="emailHelp" className="form-text text-muted">Información adicional</small>
              </div>

              <button
                  type="submit"
                  className="btn btn-outline-primary btn-block"
              >
                  <i className="far fa-save"></i>
                  <span> Guardar</span>
              </button>

          </form>
        </Modal>
    )
}

export default CalendarModal
