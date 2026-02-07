import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppLayout } from "../components/templates/AppLayout";
import { Button } from "../components/atoms/Button";
import { Calendar } from "../components/organisms/Calendar";
import { useLanguage } from "../i18n/LanguageContext";
import { useAuth } from "../state/AuthContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: min(720px, 100%);
`;

const Greeting = styled.h2`
  margin: 0;
  font-size: 1.6rem;
`;

export const UserPage: React.FC = () => {
  const { t, toggleLanguage } = useLanguage();
  const { name, role, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "user") {
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
      <Wrapper>
        <Greeting>
          {t("userWelcome")} {name}
        </Greeting>
        <Calendar title={t("calendarTitle")} />
      </Wrapper>
    </AppLayout>
  );
};
