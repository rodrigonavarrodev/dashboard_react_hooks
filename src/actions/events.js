import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

export const eventStartAddNew = (event) => {
  return async (dispatch) => {
    try {
      const response = await fetchConToken(
        "clientebo/registrarempleado",
        event,
        "POST"
      );
      const body = await response.json();
      if ( body.msg === "Empleado registrado correctamente " ){
        dispatch(eventAddNew(event));

      }

      
    } catch (error) {
      console.log(error);
    }
  };
};

const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});

export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const response = await fetchConToken("clientebo/empleados");
      const body = await response.json();
      const events = prepareEvents ( body )
        
      dispatch(eventLoaded( events ))

    } catch (error) {
      console.log(error);
    }
  };
};

const eventLoaded = (events) => ({
  type: types.eventLoaded,
  payload: events,
});
