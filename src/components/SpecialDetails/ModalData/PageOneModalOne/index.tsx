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

const PageOneModalOne = () => {
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
            Curiosity drives me....
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
          fontWeight={400}
          fontFamily={"Oswald"}
          mt="4"
        >
          What is it? How it works? I want to do it!!
        </Text>

        <Box
          whiteSpace={"nowrap"}
          position={"absolute"}
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
          fontSize={{ base: "xs", xl: "xl" }}
          fontWeight={400}
          fontFamily={"Oswald"}
          mt="4"
        >
          The two questions followed by an{" "}
          <Text as="span" bgColor="black" color="white" px="2">
            excitement!
          </Text>{" "}
          is what drives me forward.
        </Text>
        <Text
          fontSize={{ base: "xs", xl: "xl" }}
          fontWeight={400}
          fontFamily={"Oswald"}
          mt="4"
        >
          I want to do it, I want to invent something, are the thoughts that
          <br />
          <Text as="span" bgColor="black" color="white" px="2">
            spark my work
          </Text>
        </Text>
        <Text
          fontSize={{ base: "xs", xl: "xl" }}
          fontWeight={400}
          fontFamily={"Oswald"}
          mt="4"
        >
          I fail, I feel bad, I come back with more determination and fill my{" "}
          <Text as="span" bgColor="black" color="white" px="2">
            apetite
          </Text>{" "}
          with confidence, is my Motto.
        </Text>
      </Box>
    </>
  );
};

export default PageOneModalOne;
