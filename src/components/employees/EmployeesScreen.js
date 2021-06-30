import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventStartLoading } from "../../actions/events";
import { Navbar } from "../navbar/Navbar";

export const EmployeesScreen = () => {
  const dispactch = useDispatch();
  const { events } = useSelector((state) => state.dashboard);

  const { name, empresa } = useSelector((state) => state.auth);

  useEffect(() => {
    dispactch(eventStartLoading());
  }, [dispactch]);
  return (
    <>
      <Navbar />
      <div id="app">
        <div id="main">
          <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
              <i className="bi bi-justify fs-3" />
            </a>
          </header>

          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>DataTable</h3>
                  <p className="text-subtitle text-muted">
                    For user to check they list
                  </p>
                </div>
                <div className="col-12 col-md-6 order-md-2 order-first">
                  <nav
                    aria-label="breadcrumb"
                    className="breadcrumb-header float-start float-lg-end"
                  >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        DataTable
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section className="section">
              <div className="card">
                <div className="card-header">Simple Datatable</div>
                <div className="card-body">
                  <table className="table table-striped" id="tabla">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Estado</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event, i) => {
                        return (
                          <tr key={i}>
                            <td>{event.firstname}</td>
                            <td>{event.lastname}</td>
                            <td>{event.email}</td>
                            <td>
                              <span className="badge bg-success">Active</span>
                            </td>
                            <td>
                              <i className="bi bi-pencil-fill" />
                            </td>
                            <td>
                              <i className="bi bi-trash-fill" />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
