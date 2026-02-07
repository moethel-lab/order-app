import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";

const SwitchWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const ModeSwitch: React.FC<{
  activeMode: "user" | "admin";
  onChange: (mode: "user" | "admin") => void;
  userLabel: string;
  adminLabel: string;
}> = ({ activeMode, onChange, userLabel, adminLabel }) => (
  <SwitchWrapper>
    <Button
      type="button"
      $variant={activeMode === "user" ? "primary" : "ghost"}
      onClick={() => onChange("user")}
    >
      {userLabel}
    </Button>
    <Button
      type="button"
      $variant={activeMode === "admin" ? "primary" : "ghost"}
      onClick={() => onChange("admin")}
    >
      {adminLabel}
    </Button>
  </SwitchWrapper>
);
