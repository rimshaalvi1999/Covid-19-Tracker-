
import React from 'react'
const initialState = {
  data: [],
  cu: {},
  active: [],
  recover: [],
  death: [],
}
export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.payload
      }
    case "SHOW_DATA":
      return {
        ...state,
        cu: action.payload
      }
    case "SHOW_DATA_ACTIVE":
      return {
        ...state,
        active: action.payload
      }
      case "SHOW_DATA_RECOVER":
        return {
          ...state,
          recover: action.payload
        }
        case "SHOW_DATA_DEATH":
      return {
        ...state,
        death: action.payload
      }


    default:
      return state;
  }
}
