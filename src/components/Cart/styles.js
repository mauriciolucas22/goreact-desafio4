import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const List = styled.table`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  border: 1px solid #cecdcb;
  border-radius: 4px;
  padding: 20px;

  thead th {
    font-size: 15px;
    color: #666666;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;

    &:last-child {
      text-align: right;
    }
  }
`;

export const ProductItem = styled.tr`
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

export const Empty = styled.div`
  margin-top: 20px;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    color: #eee;
    font-size: 200px;
  }
`;
