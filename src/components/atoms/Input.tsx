import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid #d2e7f4;
  font-size: 1rem;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.base};
    border-color: transparent;
  }
`;
