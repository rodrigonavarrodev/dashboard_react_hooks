import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventStartLoading } from "../../actions/events";
import { Navbar } from "../navbar/Navbar";
import { DashboardModal } from "./DashboardModal";

export const DashboardScreen = () => {
  const dispactch = useDispatch();
  const { events } = useSelector((state) => state.dashboard);

  const { name, empresa } = useSelector((state) => state.auth);

  useEffect(() => {
    
    dispactch( eventStartLoading() )

  }, [dispactch])

  return (
    <>
      <div>
        <Navbar />
        <h5>BoCliente</h5>
        <span className="navbar-brand">Name: {name}</span>
        <span className="navbar-brand">Empresa: {empresa}</span>
        <hr></hr>

        <DashboardModal />
      </div>

      <hr></hr>

      <h5>Lista de usuarios</h5>

      <hr></hr>

      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {events.map((event, i)=>{
            return (
              <tr key={i}>
              <td>{event.firstname}</td>
              <td>{event.lastname}</td>
              <td>{event.email}</td>
            </tr>
            )
          })}
          <tbody>
           
          </tbody>
        </table>
      </div>
    </>
  );
};

