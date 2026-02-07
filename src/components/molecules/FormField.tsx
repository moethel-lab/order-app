import React from "react";
import styled from "styled-components";
import { Label } from "../atoms/Label";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormField: React.FC<{ label: string; htmlFor: string; children: React.ReactNode }> = ({
  label,
  htmlFor,
  children,
}) => (
  <FieldWrapper>
    <Label htmlFor={htmlFor}>{label}</Label>
    {children}
  </FieldWrapper>
);
