import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from '../navbar/Navbar'

export const DashboardScreen = () => {

    const  { name, empresa }  = useSelector(state => state.auth )

    return (
        <div>
            <Navbar />
            <h5>BoCliente</h5>
            <span className="navbar-brand">
               Name: { name } 
            </span>
            <span className="navbar-brand">
               Empresa: { empresa } 
            </span>
        </div>
    )
}
