import { SEARCH_DATA_LOADING, SEARCH_DATA_DONE, SEARCH_DATA_FAILED } from '../actions';

const initialState = {
  data: [],
  total: 0,
  loading: false,
  error: false
}

export const tableData = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA_LOADING:
      return {
        ...state,
        loading: true
      }
    case SEARCH_DATA_DONE:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        total: action.payload.total,
        error: false
      }
    case SEARCH_DATA_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        total: 0,
        error: true
      }
  }
  return state;
}
