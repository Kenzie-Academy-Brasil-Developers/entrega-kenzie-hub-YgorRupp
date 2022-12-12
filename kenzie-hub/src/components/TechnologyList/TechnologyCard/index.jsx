import React, { useContext, useState } from "react";
import { StyledCard } from "./style";
import Trash from "../../../assets/Vector.svg";
import { UserContext } from "../../../contexts/UserContext";

const TechnologyCard = () => {

  const {user, userTechs} = useContext(UserContext)
  
  return (
    <div>
      {userTechs && userTechs.map((tech, index) => (
        <StyledCard key={index}>
          <h2>{tech.title}</h2>
          <div>
            <span>{tech.status}</span>
            <img src={Trash} alt="" />
          </div>
        </StyledCard>
      ))}
    </div>
  );
};

export default TechnologyCard;
