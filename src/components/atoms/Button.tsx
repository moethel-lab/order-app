import styled from "styled-components";

export const Button = styled.button<{ $variant?: "primary" | "ghost" }>`
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: ${({ theme, $variant }) =>
    $variant === "ghost" ? "transparent" : theme.colors.base};
  color: ${({ theme, $variant }) => ($variant === "ghost" ? theme.colors.base : "#fff")};
  border: ${({ theme, $variant }) =>
    $variant === "ghost" ? `1px solid ${theme.colors.base}` : "none"};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
    transform: none;
  }
`;
