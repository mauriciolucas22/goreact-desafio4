import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: #FF9696;
    font-size: 50px;
    font-weight: bold;
  }

  small {
    font-size: 14px;
    color: #727271;
    margin-top: 20px;

    i {
      margin-right: 10px;
    }
  }
`;

export const MenuList = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  background: #FF9696;
  border-radius: 4px;
  padding-left: 20px;

  display: flex;
  flex-direction: 'row';

  button {
    margin: 5px 15px 5px 15px;
    font-size: 15px;
    font-weight: bold;
    border: 0;
    background: transparent;

    a {
      text-decoration: none;
      color: #fff;

      &:hover {
      color: #ffdae0;
    }
    }
  }
`;
