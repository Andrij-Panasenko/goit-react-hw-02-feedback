import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 100px;
  height: 50px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(5)};
`;