import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root{
    --white: #FFF;
    --black: #000;
    --orange: #FE5F55;
    --beige: #D6F6DD;
    /* --beige: #EEF5DB;E1DD8F */
    --gray-600: #4F6367;
    --gray-400: #7A9E9F;
    --gray-200: #9B9B9B;
    --gray-100: #B8D8D8;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, :no-button, * {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
