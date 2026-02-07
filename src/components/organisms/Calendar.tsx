import React from "react";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const MonthLabel = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

const Cell = styled.div<{ $isHeader?: boolean; $isEmpty?: boolean }>`
  text-align: center;
  padding: 8px 0;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme, $isHeader, $isEmpty }) => {
    if ($isHeader) return theme.colors.background;
    if ($isEmpty) return "transparent";
    return "#e9f8ff";
  }};
  color: ${({ theme, $isEmpty }) => ($isEmpty ? "transparent" : theme.colors.text)};
  font-weight: ${({ $isHeader }) => ($isHeader ? 600 : 500)};
`;

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getCalendarDays = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = firstDay.getDay();
  const totalDays = lastDay.getDate();

  const days: Array<number | null> = [];
  for (let i = 0; i < startOffset; i += 1) {
    days.push(null);
  }
  for (let day = 1; day <= totalDays; day += 1) {
    days.push(day);
  }
  return days;
};

export const Calendar: React.FC<{ title: string }> = ({ title }) => {
  const today = new Date();
  const days = getCalendarDays(today);
  const monthLabel = today.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  return (
    <CalendarWrapper>
      <Header>
        <Title>{title}</Title>
        <MonthLabel>{monthLabel}</MonthLabel>
      </Header>
      <Grid>
        {weekDays.map((day) => (
          <Cell key={day} $isHeader>
            {day}
          </Cell>
        ))}
        {days.map((day, index) => (
          <Cell key={`${day ?? "empty"}-${index}`} $isEmpty={day === null}>
            {day ?? ""}
          </Cell>
        ))}
      </Grid>
    </CalendarWrapper>
  );
};
