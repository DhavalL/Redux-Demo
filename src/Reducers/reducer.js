const initialState = { value: "" };

export default function reducer(state = initialState, action){
  switch (action.type) {
    case `CHANGE_VAL`:
      return {
        value:action.payload.value
      };
  }
}