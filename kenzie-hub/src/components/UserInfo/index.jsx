import React from "react";
import { StyledUserInfo } from "./style";

const UserInfo = ({ user }) => {
  return (
    <StyledUserInfo>
      <h2>Olá, {user.name}</h2>
      <p>{user.course_module}</p>
    </StyledUserInfo>
  );
};

export default UserInfo;
