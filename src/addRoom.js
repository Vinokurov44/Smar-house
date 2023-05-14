let id = 0;
export default function addRoom(state = [], action) {
  switch (action.type) {
    case "addRoom":
      return [
        ...state,
        {
          id: ++id,
          type: action.payload.type,
          name: action.payload.name,
          color: action.payload.color,
          products: [],
        },
      ];
    case "addProduct":
      return state.map((val) => {
        if (val.id === action.payload.id) {
          return {
            ...val,
            products: [...val.products, action.payload.name],
          };
        }
        return val;
      });

    default:
      return state;
  }
}
