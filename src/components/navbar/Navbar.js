import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {

    const { name } = useSelector(state => state.auth )

    return (
        <div id="sidebar" className="active">
        <div className="sidebar-wrapper active">
          <div className="sidebar-header">
            <div className="d-flex justify-content-between">
              <div className="logo">
                <a href="index.html"><img src="/logo-ap-b.svg" alt="Logo" srcSet /></a>
              </div>
              <div className="toggler">
                <a href="#" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle" /></a>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            
          
            <ul className="menu">
              
              <li className="sidebar-title"> Hola { name }</li>
              <li className="sidebar-item active ">
                <a href="index.html" className="sidebar-link">
                  <i className="bi bi-grid-fill" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="/empleados" className="sidebar-link">
                  <i className="bi bi-stack" />
                  <span>Empleados</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-stack" />
                  <span>Perfiles</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-stack" />
                  <span>Oboarding</span>
                </a>
              </li>
              <li className="sidebar-title">Pages</li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-stack" />
                  <span>Criptomonedas</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-stack" />
                  <span>Orden de extracción</span>
                </a>
              </li>
              
              
            </ul>
          </div>
          <button className="sidebar-toggler btn x"><i data-feather="x" /></button>
        </div>
      </div>
    )
}
