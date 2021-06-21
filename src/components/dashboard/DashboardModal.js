import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import Swal from 'sweetalert2';
import { eventStartAddNew } from "../../actions/events";

const initEvent = {
  firstname: 'Rodrigo',
  lastname: 'Navarro',
  email: 'testbilleteraap@gmail.com',
  sector: 'Operaciones',
  phone: '1165048738',
  role: 'Admin'
}

export const DashboardModal = () => {

    const dispatch = useDispatch();


    const [inputValid, setinputValid] = useState(true)

    const [formValues, setformValues] = useState( initEvent )

    const { firstname, lastname, email, sector, phone, role } = formValues;

    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        if ( firstname === 'Rodrigo') {
            return Swal.fire('Error', 'Este es un mensaje de error cuando haces una validacion', 'error')
        }

        if ( lastname.trim().length <= 2 ) {
            return setinputValid(false);
        }
        
        dispatch( eventStartAddNew (formValues))

        //grabar en la base de datos
        setinputValid(true)

        setformValues (initEvent)
    }

  return (
    <div>
      <h4> Registrar un nuevo empleado </h4>
      <hr />
      <form className="container col-4"
            onSubmit= { handleSubmitForm }
      >
        <div className="form-group">
          <label>Nombre</label>
          <input className="form-control" placeholder="Nombre" name='firstname' value={ firstname } onChange={ handleInputChange } />
        </div>

        <div className="form-group">
          <label>Apellido</label>
          <input className={ `form-control ${ !inputValid && 'is-invalid' }`} placeholder="Apellido" name='lastname' value={ lastname } onChange={ handleInputChange } />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Email" name='email' value={ email } onChange={ handleInputChange }/>
        </div>

        <div className="form-group">
          <label>Sector</label>
          <input className="form-control" placeholder="Sector" name='sector' value={ sector } onChange={ handleInputChange }/>
        </div>

        <div className="form-group">
          <label>Telefono</label>
          <input className="form-control" placeholder="Telefono" name='phone' value={ phone } onChange={ handleInputChange }/>
        </div>

        <div className="form-group">
          <label>Rol</label>
          <input className="form-control" placeholder="Rol" name='role' value={ role } onChange={ handleInputChange }/>
        </div>

       
        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </div>
  );
};
