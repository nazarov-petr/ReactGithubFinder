import React , {useReducer} from 'react'
import AlerContext from './alerContext'
import AlertReducer from './alertReducer'

import {
  REMOVE_ALERT,
  SET_ALERT
} from '../types'

const AlertState = (props) => {
  const initialState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  const setAlert = (msg, type) => {
    dispatch ({
      type: SET_ALERT,
      payload: {msg,type}
    })
    setTimeout(() => {
      dispatch ({
        type: REMOVE_ALERT,
      })
    }, 2000);
  };

  return <AlerContext.Provider
    value = {
      {
        alert: state,
        setAlert
      }
    }
  >
    {props.children}
  </AlerContext.Provider>

}

export default AlertState;