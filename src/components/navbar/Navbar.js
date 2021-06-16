import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {

    const { name } = useSelector(state => state.auth )

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
               Hola: { name }
            </span>
            
        </div>
    )
}
