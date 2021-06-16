import { fetchSinToken } from "../helpers/fetch";
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
          empresa: body.empresaId._id
        })
      );
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});
