import axios from 'axios';

export const SEARCH_DATA_DONE = 'SEARCH_DATA_DONE';
export const SEARCH_DATA_LOADING = 'SEARCH_DATA_LOADING';
export const SEARCH_DATA_FAILED = 'SEARCH_DATA_FAILED';

export function search(data) {
  return dispatch =>{
    const { name, sort, field, limit } = data;
    dispatch({ type: SEARCH_DATA_LOADING, payload: {}});
    let result = {};
    if(name != ''){
      let url = 'http://localhost:8765/getData?s='+name+'&l='+limit+'&sort=';
      if(sort){
        url +=field;
      }
      axios.get(url)
      .then((res) =>{
        if(res && res.data){
          result = res.data;
          dispatch({ type: SEARCH_DATA_DONE, payload: {
            data: result.data,
            total: result.total
          }});
        }else{
          dispatch({ type: SEARCH_DATA_FAILED, payload: {}});
        }
      }).catch((err)=>{
        dispatch({ type: SEARCH_DATA_FAILED, payload: {}});
      });
    }else{
      dispatch({ type: SEARCH_DATA_DONE, payload: {
        data: [],
        total: 0
      }});
    }
  }
}
