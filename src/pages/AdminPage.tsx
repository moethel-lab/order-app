import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppLayout } from "../components/templates/AppLayout";
import { Button } from "../components/atoms/Button";
import { useLanguage } from "../i18n/LanguageContext";
import { useAuth } from "../state/AuthContext";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 32px;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  width: min(640px, 100%);
`;

const Title = styled.h2`
  margin: 0 0 12px;
`;

const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
`;

export const AdminPage: React.FC = () => {
  const { t, toggleLanguage } = useLanguage();
  const { role, name, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "admin") {
      navigate("/");
    }
  }, [role, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppLayout
      brand={t("appName")}
      onToggleLanguage={toggleLanguage}
      toggleLabel={t("switchLanguage")}
      actions={
        <Button type="button" $variant="ghost" onClick={handleLogout}>
          {t("logout")}
        </Button>
      }
    >
      <Card>
        <Title>{t("adminDashboard")}</Title>
        <Subtitle>Signed in as {name}</Subtitle>
      </Card>
    </AppLayout>
  );
};
