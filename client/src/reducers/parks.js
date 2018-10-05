import { PARK } from '../consts/default_state';

function parks(state = PARK, action) {
  switch(action.type) {
    case 'ADD_PARK':
      return [...state, {
        name: action.name,
        location: action.location
      }]
    default:
      return state;
  }
}

export default parks;