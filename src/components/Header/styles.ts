import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    background-color: #F6BD60;
    border-bottom: 1px solid var(--gray-100);

    div.content {
      height: 80px;
      max-width: 1020px;
      margin: 0 auto;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: bold;
        color: #fff;
      }

      a {
        transition: opacity 0.2s;
        text-decoration: none;

        &:hover {
          opacity: 0.7;
        }
      }
  }

  
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #fff;
    }
  }
`;
