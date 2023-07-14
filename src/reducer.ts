const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";

interface State {
  items: { id: number; text: string }[];
}

const initialState: State = {
  items: []
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItems = {
        id: state.items.length + 1,
        text: action.payload
      };
      return {
        ...state,
        items: [...state.items, newItems]
      };
    case DELETE_ITEM:
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: updatedItems
      };
    case UPDATE_ITEM:
      const { id, newItem } = action.payload;
      const updatedItem = { id, text: newItem };
      const updatedItemsList = state.items.map((item) =>
        item.id === id ? updatedItem : item
      );
      return {
        ...state,
        items: updatedItemsList
      };
    default:
      return state;
  }
};

export default reducer;
