import styled from 'styled-components';

export const TR = styled.tr`
  margin-top: 20px;

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
    }
  }
`;
