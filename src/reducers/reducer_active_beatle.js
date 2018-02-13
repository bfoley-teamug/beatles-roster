//state here means the state of this reducer
//also, most reducers have switch statements
export default function(state = null, action) {
  switch(action.type) {
    case 'BEATLE_SELECTED':
      return action.payload;
  }
  return state; 
}
