const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";

export const addItem = (item: string) => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const deleteItem = (id: number) => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const updateItem = (id: number, newItem: string) => {
  return {
    type: UPDATE_ITEM,
    payload: { id, newItem }
  };
};
