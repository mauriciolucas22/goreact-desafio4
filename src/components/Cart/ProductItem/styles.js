import styled from 'styled-components';

export const TR = styled.tr`
  margin-top: 20px;
  height: 20px;

  #count {
    width: 50px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid #a6a6a6;
    padding: 10px;
    align-items: center;
  }

  #name {
    display: flex;
    flex-direction: column;
    align-items: left;

    strong {
      font-weight: bold;
      font-size: 18px;
    }

    small {
      font-size: 14px;
      color: #a6a6a6;
    }
  }

  #price {
    color: #37BEA9;
    font-weight: bold;
    font-size: 18px;
  }

  td {
    margin-top: 10px;
    border-bottom: 1px solid #cecdcb;
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;

    &:first-child {
      width: 50%;
    }

    button {
      margin-left: 10px;
      border: 0;
      background: transparent;
    }
  }
`;
