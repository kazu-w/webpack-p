import * as React from "react";
import styled from "styled-components";

const AlertContainer = styled.div`
  background-color: darkred;
  color: #fff;
`;
const AlertDesc = styled.p`
  color: #fff;
  text-align: center;
`;

const Alert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <AlertContainer>
      <AlertDesc>{message}</AlertDesc>
    </AlertContainer>
  );
};

export default Alert;
