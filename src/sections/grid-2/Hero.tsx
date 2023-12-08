import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";
import { Box, ButtonIcon, Section, Text, Title } from "../../components/Core";
import GlobalContext from "../../context/GlobalContext";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
}

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Hero: React.FC<HeroProps> = ({ title, description, buttonText }) => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Box
            className="d-flex flex-column align-items-center text-center"
            pt={5}
          >
            <Text
              variant="tag"
              mb={4}
              className="text-uppercase"
              color="heading"
              mb="40px"
            >
              {title}
            </Text>

            <Title variant="hero" mb="3rem">
              {description}
            </Title>
            <ButtonIcon
              onClick={(e) => {
                e.preventDefault();
                gContext.toggleContact();
              }}
            >
              {buttonText}
            </ButtonIcon>
          </Box>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
