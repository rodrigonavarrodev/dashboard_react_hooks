import { shallowEqual } from "react-redux";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const response = await fetchSinToken(
      "clientebo/autenticarse",
      { email, password },
      "POST"
    );
    const body = await response.json();
    console.log(body);
    if (body._id) {
      localStorage.setItem("token", body.jwtToken);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          id: body._id,
          name: `${body.firstname} ${body.lastname}`,
          empresa: body.empresaId._id,
        })
      );
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const response = await fetchConToken("clientebo/renovartoken");
    const body = await response.json();

    console.log('checking', body);

    if (body._id) {
      localStorage.setItem("token", body.jwtToken);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          id: body._id,
          name: `${body.firstname} ${body.lastname}`,
          empresa: body.empresaId._id,
        })
      )
    } else {
      dispatch( checkingFinish() )
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish })

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});
