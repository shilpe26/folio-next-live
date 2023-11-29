import React from "react";
import Link from "next/link";
import { Title } from "../Core";

const Logo = ({ color = "front", height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        <Title color={color} variant="cardLg" className="mb-0">
          folio.
        </Title>
      </a>
    </Link>
  );
};

export default Logo;
