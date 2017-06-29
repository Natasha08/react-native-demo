import { ActionConst } from 'react-native-router-flux';

const DEFAULT_STATE = { scene: {} }

export default function(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    default:
      return state;
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene
      }
  }
  return state;
}

export const getNav  = (state) => ({
  scene: state.scene
})
