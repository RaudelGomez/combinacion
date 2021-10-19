export default function todos(state = 1, action) {
    switch (action.type) {
      case 'ESCRIBIR':
        return state +1;
      default:
        return state
    }
  }