const initialState = { value: "" };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `CHANGE_VAL`:
      return {
        value: action.payload
      };
    default: // if not defined then error where mapStatetoProp defined
      return state;
  }
}