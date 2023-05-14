export function addRoom(type, name, color) {
  return {
    type: "addRoom",
    payload: {
      type,
      name,
      color,
    },
  };
}

export function addProduct(name, id) {
  return {
    type: "addProduct",
    payload: {
      name,
      id,
    },
  };
}
