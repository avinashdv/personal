"use client";

import {
  Text,
  Button,
  Box,
  UnorderedList,
  ListItem,
  keyframes,
  usePrefersReducedMotion,
  Collapse,
} from "@chakra-ui/react";
import { useState } from "react";

const moveIn = keyframes`
  from {width: 0%;}
  to {width: 70%;}
`;

const PageTwoModal = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);

  const animation = prefersReducedMotion
    ? undefined
    : `${moveIn} 0.4s ease-in-out`;
  return (
    <>
      <Box position={"relative"} zIndex={1}>
        <Box
          mb="-12px"
          w={{ base: "60%", xl: "80%" }}
          height={{ base: "26px", xl: "35px" }}
          bgColor={"rgba(225, 132, 37)"}
          ml={{ base: "-10px", xl: "-12px" }}
        >
          <Text
            px="2"
            py="1"
            fontSize={{ base: "xs", xl: "md" }}
            fontWeight={500}
          >
            Experience.....
          </Text>
        </Box>
      </Box>

      <Box
        width={{ base: "300px", xl: "600px" }}
        height={{ base: "auto", xl: "400px" }}
        bgColor={"white"}
        p="3"
        overflowY={"scroll"}
      >
        {/* Exp 1 */}
        <Box>
          <Text
            fontSize={{ base: "md", xl: "3xl" }}
            fontWeight={400}
            fontFamily={"Oswald"}
            mt="3"
          >
            SDE @Geekster
          </Text>

          <Box
            whiteSpace={"nowrap"}
            width={"70%"}
            height="2px"
            overflow="hidden"
            transition={"width 4s ease-in-out"}
            animation={animation}
            color="white"
            backgroundColor="rgba(225, 132, 37)"
          ></Box>

          <Text
            fontSize={{ base: "xs", xl: "lg" }}
            fontWeight={400}
            fontFamily={"Oswald"}
            color="grey"
            mt="4"
          >
            Jan 2023 - Feb 2024
          </Text>

          <Collapse startingHeight={30} in={showOne}>
            <UnorderedList>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                Designed, Developed & modified 25+ components in rewriting the
                entire user-facing website
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Developed scripts to scrape 3000+ jobs a day from various job
                portals
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Created AI powered assessment test for students in analyzing
                performance with Chat GPT-3.5
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Provided technical direction and system architecture for 3+
                major projects.
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Planned & Created 5+ mock projects in estimating the efforts &
                viability of the features.
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Lead the front-end developing team in following best practises
                and guided them in completing the projects
              </ListItem>
            </UnorderedList>
          </Collapse>
          <Button
            size={{ base: "xs", xl: "sm" }}
            onClick={() => setShowOne(!showOne)}
            borderRadius={0}
            bgColor={"black"}
            color="white"
            _hover={{
              backgroundColor: "grey",
              color: "black",
            }}
            mt="0.5rem"
            height={"26px"}
            fontSize={"xs"}
          >
            Show {showOne ? "Less" : "More"}
          </Button>
        </Box>

        {/* Exp 2 */}
        <Box>
          <Text
            fontSize={{ base: "md", xl: "3xl" }}
            fontWeight={400}
            fontFamily={"Oswald"}
            mt="3"
          >
            UI Developer III @Adobe AEM
          </Text>

          <Box
            whiteSpace={"nowrap"}
            width={"70%"}
            height="2px"
            overflow="hidden"
            transition={"width 4s ease-in-out"}
            animation={animation}
            color="white"
            backgroundColor="rgba(225, 132, 37)"
          ></Box>

          <Text
            fontSize={{ base: "xs", xl: "lg" }}
            fontWeight={400}
            fontFamily={"Oswald"}
            color="grey"
            mt="4"
          >
            Feb 2022 - Jul 2022
          </Text>
          <Collapse startingHeight={30} in={showTwo}>
            <UnorderedList>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Led a re-design of NFL flagship website Interface, enhancing
                user experience, resulting in 30% increase in user engagement.
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Implemented responsive design for {"Kohler's"} e-commerce
                platform, making it compatible across a variety of devices,
                leading to 40% increase in mobile traffic
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Prioritized and managed multiple projects to meet strict
                deadlines, decreasing project overruns by 30%
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Participated in Agile/Scrum meetings, contributing to sprint
                planning, retrospectives and daily stand-ups, ensuring that UI
                development efforts were aligned with team objectives and
                timelines
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Developed code following common security practices and
                development design patterns
              </ListItem>
            </UnorderedList>
          </Collapse>
          <Button
            size="sm"
            onClick={() => setShowTwo(!showTwo)}
            borderRadius={0}
            bgColor={"black"}
            color="white"
            _hover={{
              backgroundColor: "grey",
              color: "black",
            }}
            mt="0.5rem"
            height={"26px"}
            fontSize={"xs"}
          >
            Show {showTwo ? "Less" : "More"}
          </Button>
        </Box>

        {/* Exp 3 */}
        <Box>
          <Text
            fontSize={{ base: "md", xl: "3xl" }}
            fontWeight={400}
            fontFamily={"Oswald"}
            mt="3"
          >
            Full-Stack Dev @Freelancing
          </Text>

          <Box
            whiteSpace={"nowrap"}
            width={"70%"}
            height="2px"
            overflow="hidden"
            transition={"width 4s ease-in-out"}
            animation={animation}
            color="white"
            backgroundColor="rgba(225, 132, 37)"
          ></Box>

          <Text
            fontSize={{ base: "xs", xl: "lg" }}
            fontWeight={400}
            fontFamily={"Oswald"}
            color="grey"
            mt="4"
          >
            Apr 2021 - Jan 2022
          </Text>
          <Collapse startingHeight={30} in={showThree}>
            <UnorderedList>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Analyzed 30+ user requirements to derive technical software
                design and performance requirements
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Solved production related bugs overnight that effected 50k+
                users, improving user-experience.
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Improving legacy front-end by replacing it with ReactJS resulted
                in 50% faster loading times.
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Improved SEO for many websites by following industry standard
                methods increasing site visits to 75%
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Built CI/CD pipelines in Bitbucket - helping teams deploy more
                than 30 times a day
              </ListItem>
            </UnorderedList>
          </Collapse>
          <Button
            size="sm"
            onClick={() => setShowThree(!showThree)}
            borderRadius={0}
            bgColor={"black"}
            color="white"
            _hover={{
              backgroundColor: "grey",
              color: "black",
            }}
            mt="0.5rem"
            height={"26px"}
            fontSize={"xs"}
          >
            Show {showThree ? "Less" : "More"}
          </Button>
        </Box>

        {/* Exp 4 */}
        <Box>
          <Text
            fontSize={{ base: "md", xl: "3xl" }}
            fontWeight={400}
            fontFamily={"Oswald"}
            mt="3"
          >
            SD @Bak Bak Technologies
          </Text>

          <Box
            whiteSpace={"nowrap"}
            width={"70%"}
            height="2px"
            overflow="hidden"
            transition={"width 4s ease-in-out"}
            animation={animation}
            color="white"
            backgroundColor="rgba(225, 132, 37)"
          ></Box>

          <Text
            fontSize={{ base: "xs", xl: "lg" }}
            fontWeight={400}
            fontFamily={"Oswald"}
            color="grey"
            mt="4"
          >
            Jul 2018 - Oct 2020
          </Text>

          <Collapse startingHeight={30} in={showFour}>
            <UnorderedList>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Designed and wrote the front-end mini-apps with vanilla JS for
                1lakh+ DAUs
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Designed, built and automated manual changes to save 10+ hours
                of tedious work per week.
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Built 2+ revenue generating apps and integrated to 3rd party
                services like PHONEPE, PAYTM
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Written bash scripts to delete data of in-active users that led
                to reduction of 60% of the cloud bill.
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Designed, developed and built a meditation app from scratch with
                SSO and Payment Integrations
              </ListItem>
              <ListItem fontSize={{ base: "xs", xl: "md" }}>
                {" "}
                Created MVP of new product and successfully designed, developed
                and maintained it, which reached 1000+ users in a month
              </ListItem>
            </UnorderedList>
          </Collapse>
          <Button
            size="sm"
            onClick={() => setShowFour(!showFour)}
            borderRadius={0}
            bgColor={"black"}
            color="white"
            _hover={{
              backgroundColor: "grey",
              color: "black",
            }}
            mt="0.5rem"
            height={"26px"}
            fontSize={"xs"}
          >
            Show {showFour ? "Less" : "More"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PageTwoModal;
