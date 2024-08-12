"use client";

import { Text, Box, Link } from "@chakra-ui/react";

const PageFiveModal = () => {
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
            Social Media....
          </Text>
        </Box>
      </Box>

      <Box
        width={{ base: "300px", xl: "600px" }}
        height={{ base: "200px  ", xl: "400px" }}
        bgColor={"white"}
        p="3"
        display={"flex"}
        gap={2}
        flexDir={{ base: "column", xl: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {/* Facebook */}
        <Box role="group" width={"fit-content"}>
          <Link
            textDecor={"none"}
            _hover={{
              textDecor: "none",
            }}
            href="https://www.facebook.com/aviavinash07/"
            isExternal
            color="rgba(225, 132, 37)"
            fontSize={{ base: "sm", xl: "md" }}
          >
            #FACEBOOK
          </Link>
          <Box
            width={"0%"}
            height="2px"
            overflow="hidden"
            transition={"width 0.4s ease-in-out"}
            _groupHover={{
              width: "100%",
            }}
            color="white"
            backgroundColor="rgba(225, 132, 37)"
          ></Box>
        </Box>
        {/* Twitter */}
        <Box role="group" width={"fit-content"}>
          <Link
            textDecor={"none"}
            _hover={{
              textDecor: "none",
            }}
            href="https://x.com/Avinashd10"
            isExternal
            color="rgba(225, 132, 37)"
            fontSize={{ base: "sm", xl: "md" }}
          >
            #TWITTER
          </Link>
          <Box
            width={"0%"}
            height="2px"
            overflow="hidden"
            transition={"width 0.4s ease-in-out"}
            _groupHover={{
              width: "100%",
            }}
            color="white"
            backgroundColor="rgba(225, 132, 37)"
          ></Box>
        </Box>
        {/* Linkedin */}
        <Box role="group" width={"fit-content"}>
          <Link
            textDecor={"none"}
            _hover={{
              textDecor: "none",
            }}
            href="https://www.linkedin.com/in/avinash-dv-6b9604180/"
            isExternal
            color="rgba(225, 132, 37)"
            fontSize={{ base: "sm", xl: "md" }}
          >
            #LINKEDIN
          </Link>
          <Box
            width={"0%"}
            height="2px"
            overflow="hidden"
            transition={"width 0.4s ease-in-out"}
            _groupHover={{
              width: "100%",
            }}
            color="white"
            backgroundColor="rgba(225, 132, 37)"
          ></Box>
        </Box>
        {/* Instagram */}
        <Box role="group" width={"fit-content"}>
          <Link
            textDecor={"none"}
            _hover={{
              textDecor: "none",
            }}
            href="https://www.instagram.com/avinash_d77/"
            isExternal
            color="rgba(225, 132, 37)"
            fontSize={{ base: "sm", xl: "md" }}
          >
            #INSTAGRAM
          </Link>
          <Box
            width={"0%"}
            height="2px"
            overflow="hidden"
            transition={"width 0.4s ease-in-out"}
            _groupHover={{
              width: "100%",
            }}
            color="white"
            backgroundColor="rgba(225, 132, 37)"
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default PageFiveModal;
