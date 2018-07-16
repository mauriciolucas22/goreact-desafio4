import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 15px 0 15px;
  height: 390px;
  width: 250px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid;
  border-color: #eee;

  img {
    height: 250px;
    width: 200px;

    &:hover {
      box-shadow: 1px 1px 5px 2px #888888;
    }
  }

  strong {
    margin-top: 20px;
    font-size: 17px;
    font-weight: bold;
    color: #000000;
  }

  small {
    margin-top: 4px;
    font-size: 12px;
    color: #666666
  }

  p {
    margin-top: 15px;
    color: #37BEA9;
    font-size: 20px;
    font-weight: bold;
  }
`;
