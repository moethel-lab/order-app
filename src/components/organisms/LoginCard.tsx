import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { FormField } from "../molecules/FormField";
import { ModeSwitch } from "../molecules/ModeSwitch";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 32px;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: min(420px, 100%);
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.8rem;
`;

const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LoginCard: React.FC<{
  title: string;
  subtitle: string;
  mode: "user" | "admin";
  onModeChange: (mode: "user" | "admin") => void;
  userLabel: string;
  adminLabel: string;
  nameLabel: string;
  usernameLabel: string;
  passwordLabel: string;
  submitLabel: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  setName: (value: string) => void;
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  isSubmitDisabled: boolean;
}> = ({
  title,
  subtitle,
  mode,
  onModeChange,
  userLabel,
  adminLabel,
  nameLabel,
  usernameLabel,
  passwordLabel,
  submitLabel,
  onSubmit,
  name,
  setName,
  username,
  setUsername,
  password,
  setPassword,
  isSubmitDisabled,
}) => (
  <Card>
    <Header>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Header>
    <ModeSwitch
      activeMode={mode}
      onChange={onModeChange}
      userLabel={userLabel}
      adminLabel={adminLabel}
    />
    <Form onSubmit={onSubmit}>
      {mode === "user" ? (
        <FormField label={nameLabel} htmlFor="name">
          <Input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Alice"
          />
        </FormField>
      ) : (
        <>
          <FormField label={usernameLabel} htmlFor="username">
            <Input
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="admin"
            />
          </FormField>
          <FormField label={passwordLabel} htmlFor="password">
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
            />
          </FormField>
        </>
      )}
      <Button type="submit" disabled={isSubmitDisabled}>
        {submitLabel}
      </Button>
    </Form>
  </Card>
);
