import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Box } from "../../components/Core";

const BoxStyled = styled(Box)`
  transition: 0.4s;
  &:hover {
    transform: scale(0.8) rotate(-16deg);
    border-radius: 20px;
    box-shadow: 0 32px 74px rgba(68, 77, 136, 0.2);
    overflow: hidden;
  }
`;

const RotateImg = ({ link = "/", imgSrc, ...rest }) => {
  return (
    <>
      <BoxStyled {...rest}>
        <Link href={link}><a className="d-block"><img src={imgSrc} alt="" className="w-100" /></a></Link>
      </BoxStyled>
    </>
  );
};
export default RotateImg;
