import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";
import { Box, Button, Section, Text, Title } from "../../components/Core";

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

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, buttonText }) => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <Box
                className="d-flex flex-column align-items-center text-center"
                pt={5}
              >
                <Text
                  variant="tag"
                  className="text-uppercase"
                  color="heading"
                  mb="40px"
                >
                  {title}
                </Text>

                <Title variant="hero" mb="3rem">
                  {description}
                </Title>
                <ScrollLink
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                >
                  <Button variant="success" arrowRight>
                    {buttonText}
                  </Button>
                </ScrollLink>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
