import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import Availability from "../../components/Availability";
import { ButtonIcon, Section, Title } from "../../components/Core";
import GlobalContext from "../../context/GlobalContext";

const SectionStyled = styled(Section)`
  /* Add your styled component styles here if needed */
`;

const CTA: React.FC = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <SectionStyled>
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <Availability />
              <div className="text-center my-5">
                <Title>Do you have an illustration project? Let's talk.</Title>
              </div>
              <div className="text-center">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Let's Talk Now
                </ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default CTA;
