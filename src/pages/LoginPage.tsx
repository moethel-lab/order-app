import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppLayout } from "../components/templates/AppLayout";
import { LoginCard } from "../components/organisms/LoginCard";
import { useLanguage } from "../i18n/LanguageContext";
import { useAuth } from "../state/AuthContext";

const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LoginPage: React.FC = () => {
  const { t, toggleLanguage } = useLanguage();
  const { loginUser, loginAdmin } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"user" | "admin">("user");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isSubmitDisabled = useMemo(() => {
    if (mode === "user") {
      return name.trim().length === 0;
    }
    return username.trim().length === 0 || password.trim().length === 0;
  }, [mode, name, username, password]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mode === "user") {
      loginUser(name.trim());
      navigate("/user");
      return;
    }
    loginAdmin(username.trim());
    navigate("/admin");
  };

  return (
    <AppLayout brand={t("appName")} onToggleLanguage={toggleLanguage} toggleLabel={t("switchLanguage")}>
      <Center>
        <LoginCard
          title={t("loginTitle")}
          subtitle={t("loginSubtitle")}
          mode={mode}
          onModeChange={setMode}
          userLabel={t("modeUser")}
          adminLabel={t("modeAdmin")}
          nameLabel={t("nameLabel")}
          usernameLabel={t("usernameLabel")}
          passwordLabel={t("passwordLabel")}
          submitLabel={t("loginButton")}
          onSubmit={handleSubmit}
          name={name}
          setName={setName}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          isSubmitDisabled={isSubmitDisabled}
        />
      </Center>
    </AppLayout>
  );
};
