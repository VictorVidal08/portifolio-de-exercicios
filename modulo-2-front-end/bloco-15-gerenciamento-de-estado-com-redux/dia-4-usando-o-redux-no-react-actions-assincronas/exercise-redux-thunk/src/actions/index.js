export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://aws.random.cat/meow')
      const data = await response.json();
      dispatch(getPicture(data));
    } catch (error) {
      console.log('erro na requisição')
    }
  }
};
// outra API de imagens de gato.
// "https:\/\/purr.objects-us-east-1.dream.io\/i\/L2nFe.jpg"