import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Masonry from "react-masonry-component";
import styled from "styled-components";

import {
	Box,
	ButtonOutline,
	ListNav,
	Section,
	Text,
	Title,
} from "../../components/Core";
import RotateImg from "../../components/RotateImg";
import { gridWorks1 } from "../../data";
import { useWindowSize } from "../../hooks";
import { breakpoints } from "../../utils/index";

const WorkCard = styled(Box)``;
const WorkText = styled(Box)``;

const Grid: React.FC<React.HTMLProps<HTMLElement>> = (props) => {
  const size = useWindowSize();

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return size.width < breakpoints.lg ? (
    <Masonry options={masonryOptions} className={"masonry-grid row"} {...props} />
  ) : (
    <Row {...props} />
  );
};

interface WorksProps {
  label1: string;
  label2: string;
  label3: string;
  label4: string;
  buttonText: string;
}

const Works: React.FC<WorksProps> = ({ label1, label2, label3, label4, buttonText }) => {
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("*");

  useEffect(() => {
    setItems(gridWorks1);
  }, []);

  const filterBy = (cat: string) => {
    if (cat === "*") {
      setActiveLink("*");
      setItems(gridWorks1);
    } else {
      const filteredItems = gridWorks1.filter((item) => {
        return item.categories.indexOf(cat) !== -1;
      });
      setActiveLink(cat);
      setItems(filteredItems);
    }
  };

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container>
          <Box
            mb="2.5rem"
            ml="-1.75rem"
            className="d-flex justify-content-center"
          >
            <ListNav className="nav">
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "*" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("*");
                  }}
                >
                  {label1}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "branding" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("branding");
                  }}
                >
                  {label2}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "ux-design" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("ux-design");
                  }}
                >
                  {label3}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "photography" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("photography");
                  }}
                >
                  {label4}
                </a>
              </li>
            </ListNav>
          </Box>
        </Container>
        <Container fluid>
          <Grid>
            {items.map((item, index) => (
              <Col lg="3" md="6" key={index} className="filtr-item">
                <WorkCard className="position-relative" mb="30px">
                  <RotateImg link={item.link} imgSrc={item.thumbnail} />
                  <Box pt="2.125rem">
                    <WorkText className="overflow-hidden text-center">
                      <Text variant="tag" mb="0.5rem">
                        {item.categories[0]}
                      </Text>
                      <Title variant="cardLg">
                        <Link href={item.link}>
                          <a>{item.brand}</a>
                        </Link>
                      </Title>
                    </WorkText>
                  </Box>
                </WorkCard>
              </Col>
            ))}
          </Grid>
          <Box pt="3rem" className="text-center">
            <ButtonOutline>{buttonText}</ButtonOutline>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Works;
