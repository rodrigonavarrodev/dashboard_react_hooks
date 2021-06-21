import { eventAddNew } from "../actions/events";
import { types } from '../types/types';


const initialState = {
    events: [],
    activeEvent: null
}

export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        
        case types.eventLoaded:
            return {
                ...state,
                events: [...action.payload]
            }

        default:
            return state;
    }
}

/* {
    firstname: 'Rodrigo',
    lastname: 'Navarro',
    email: 'testbilleteraap@gmail.com',
    sector: 'Operaciones',
    phone: '1165048738',
    role: 'Admin'
} */