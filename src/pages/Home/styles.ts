import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  max-width: 1020px;
  margin: 35px auto;
  padding: 0 10px;
`

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  list-style: none;

  @media (max-width: 1070px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    li img {
      max-width: 400px;
    }
  }

  

  li {
    display: flex;
    flex-direction: column;
    background: var(--beige);
    border: 1px solid var(--gray-100);
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 200px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
      color: #333;

    }

    button {
      background: #FE5F55;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#FE5F55')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
