import { removeItemFromItems } from '../lib/removeItemFromItems';
import { toggleItemStatus } from '../lib/toggleItemStatus';

const QGO_ASSESSMENT = 'qgo/assessment';
export const ADD_ITEM = `${QGO_ASSESSMENT}/ADD_ITEM`;
export const REMOVE_ITEM = `${QGO_ASSESSMENT}/REMOVE_ITEM`;
export const TOGGLE_ITEM_COMPLETE_STATUS = `${QGO_ASSESSMENT}/TOGGLE_ITEM_COMPLETE_STATUS`;

export const addItem = content => ({ type: ADD_ITEM, content });
export const removeItem = id => ({ type: REMOVE_ITEM, id });
export const markItemAsComplete = id => ({ type: TOGGLE_ITEM_COMPLETE_STATUS, id });

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', complete: false },
    { id: 2, content: 'Buy cat food', complete: true },
    { id: 3, content: 'Water the plants', complete: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromItems(state.items, action.id)
      }
    case TOGGLE_ITEM_COMPLETE_STATUS:
      return {
        ...state,
        items: toggleItemStatus(state.items, action.id)
      }
    default:
      return state;
  }
};

export default reducer;
