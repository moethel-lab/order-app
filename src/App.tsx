import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { LanguageProvider } from "./i18n/LanguageContext";
import { AuthProvider } from "./state/AuthContext";
import { LoginPage } from "./pages/LoginPage";
import { UserPage } from "./pages/UserPage";
import { AdminPage } from "./pages/AdminPage";

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  </ThemeProvider>
);
