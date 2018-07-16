import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  height: 100%;
`;

export const List = styled.table`
  width: 100%;
  text-align: center;
  margin-top: 20px;

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
  td {
    border-bottom: 1px solid #282828;
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;
  }
`;
