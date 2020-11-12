import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../../css/CalendarModal.css'
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'

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


const CalendarModal = () => {

  const [dateStart, setDateStart] = React.useState(today.toDate())
  const [dateEnd, setDatEnd] = React.useState(today.clone().add(1,'hours').toDate())

  const handleStartDate= e =>{
    setDateStart(e)
  }
  const handleEndDate= e =>{
    setDateStart(e)
  }

    return (
        <Modal
          isOpen={true}
        //   onAfterOpen={afterOpenModal}
        //   onRequestClose={closeModal}
          style={customStyles}
          className='modal'
          overlayClassName='modal-fondo'
          closeTimeoutMS = { 200 }
        >
          <h1> Nuevo evento </h1>
          <hr />
          <form className="container">

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
                      className="form-control"
                      placeholder="Título del evento"
                      name="title"
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
