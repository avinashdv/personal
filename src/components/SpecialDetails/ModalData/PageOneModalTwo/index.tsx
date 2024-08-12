"use client";

import {
  Text,
  Box,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

const moveIn = keyframes`
  from {width: 0%;}
  to {width: 70%;}
`;

const PageOneModalTwo = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${moveIn} 0.4s ease-in-out`;

  return (
    <>
      <Box position={"relative"}>
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
            Dev at heart....
          </Text>
        </Box>
      </Box>

      <Box
        width={{ base: "300px", xl: "600px" }}
        height={{ base: "auto", xl: "400px" }}
        bgColor={"white"}
        p="3"
      >
        <Text
          fontSize={{ base: "md", xl: "3xl" }}
          textAlign={"right"}
          fontWeight={400}
          fontFamily={"Oswald"}
          mt="4"
        >
          Beautiful Art on Computer Screen
        </Text>

        <Box
          whiteSpace={"nowrap"}
          position={"absolute"}
          ml={{ base: "12%", xl: "30%" }}
          width={"70%"}
          height={{ base: "2px", xl: "4px" }}
          overflow="hidden"
          display={"inline-block"}
          transition={"width 4s ease-in-out"}
          animation={animation}
          color="white"
          backgroundColor="rgba(225, 132, 37)"
        ></Box>

        <Text
          textAlign={"right"}
          fontSize={{ base: "xs", xl: "xl" }}
          fontWeight={400}
          fontFamily={"Oswald"}
          mt="4"
        >
          The beautiful design of a website, on my neighbors pc in my teens,
          inspired me on a journey to a{" "}
          <Text as="span" bgColor="black" color="white" px="2">
            developer
          </Text>
        </Text>
        <Text
          textAlign={"right"}
          fontSize={{ base: "xs", xl: "xl" }}
          fontWeight={400}
          fontFamily={"Oswald"}
          mt="4"
        >
          <Text as="span" bgColor="black" color="white" px="2">
            Khan Academy
          </Text>{" "}
          is a resource I stumbled upon, played with code online, revealed a
          path to my career.
        </Text>
        <Text
          textAlign="right"
          fontWeight={400}
          fontFamily={"Oswald"}
          mt="4"
          fontSize={{ base: "xs", xl: "xl" }}
        >
          {"Learn't"} the fundamentals, put in the hours, created projects,
          landed myself with a{" "}
          <Text as="span" bgColor="black" color="white" px="2">
            frontend job
          </Text>{" "}
          at a startup
        </Text>
      </Box>
    </>
  );
};

export default PageOneModalTwo;
