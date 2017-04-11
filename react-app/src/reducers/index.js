const initialState = [
  { id: 0, name: 'Apple', isSoldOut: false },
  { id: 1, name: 'Coffee', isSoldOut: false }
];

let lastId = 1;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const { product } = action.payload
      return [ ...state, { ...product, id: ++lastId } ];
    case 'BUY_PRODUCT':
      const { id } = action.payload;
      return state.map(
        p => p.id === id
          ? { ...p, isSoldOut: true }
          : p
      );
    default:
      return state;
  }
};
