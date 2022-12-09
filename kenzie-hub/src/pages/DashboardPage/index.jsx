import React from "react";
import CreateTechnology from "../../components/CreateTechnology";
import Header from "../../components/Header";
import TechnologyList from "../../components/TechnologyList";
import UserInfo from "../../components/UserInfo";
import { StyledDivDash } from "./style";

const DashboardPage = ({ user }) => {
  return (
    <StyledDivDash>
      <Header />
      <UserInfo user={user} />
      <CreateTechnology />
      <TechnologyList />
    </StyledDivDash>
  );
};

export default DashboardPage;
