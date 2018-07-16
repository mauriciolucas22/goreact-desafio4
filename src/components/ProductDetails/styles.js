import styled from 'styled-components';

export const Container = styled.div`
  height: 100%
  width: 1200px;
`;

export const Content = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    height: 500px;
    width: 500px;
    margin: 10px 10px 10px 10px;
  }
`;


export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 20px;

  strong {
    font-size: 50px;
    font-weight: bold;
    color: #000000;
  }

  small {
    font-size: 14px;
    color: #eee;
    margin-top: 10px;
    color: #666666
  }

  p {
    margin-top: 100px;
    color: #37BEA9;
    font-size: 50px;
    font-weight: bold;
  }

  button {
    border: 0;
    color: #fff;
    background: #37BEA9;
    width: 30%;
    height: 30px;
    margin-top: 20px;
  }
`;
