import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const Brand = styled.h2`
  margin: 0;
  font-size: 1.4rem;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const AppLayout: React.FC<{
  brand: string;
  onToggleLanguage: () => void;
  toggleLabel: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}> = ({ brand, onToggleLanguage, toggleLabel, actions, children }) => (
  <Wrapper>
    <Header>
      <Brand>{brand}</Brand>
      <div>
        {actions}
        <Button type="button" $variant="ghost" onClick={onToggleLanguage}>
          {toggleLabel}
        </Button>
      </div>
    </Header>
    <Main>{children}</Main>
  </Wrapper>
);
