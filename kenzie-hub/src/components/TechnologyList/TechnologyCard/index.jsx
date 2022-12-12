import React from "react";
import { StyledCard } from "./style";
import Trash from "../../../assets/Vector.svg";

const TechnologyCard = () => {
  const data = JSON.parse(localStorage.getItem("@UserID"));
  console.log(data);
  return (
    <div>
      <StyledCard>
        <h2>ygor</h2>
        <span>teste</span>
      </StyledCard>
      <StyledCard>
        <h2>teste</h2>
        <div>
          <span>Intermediário</span>
          <img src={Trash} alt="" />
        </div>
      </StyledCard>
    </div>
  );
};

export default TechnologyCard;
