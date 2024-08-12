"use client";

import { Text, Box, keyframes } from "@chakra-ui/react";

interface Props {
  id: number;
}

interface CommonDesign {
  title: string;
  year: string;
}

const CommonDesign: React.FC<CommonDesign> = ({ title, year }) => {
  return (
    <Box w="full" textAlign={"center"}>
      <Text
        p={2}
        border={"3px solid rgba(225, 132, 37)"}
        fontSize={{ base: "xs", xl: "xl" }}
        fontWeight={400}
        fontFamily={"Oswald"}
        mt="3"
      >
        {title}
      </Text>

      <Text
        textAlign={"center"}
        fontSize={{ base: "xs", xl: "md" }}
        fontWeight={400}
        fontFamily={"Oswald"}
        color="grey"
        mt="2"
      >
        {year}
      </Text>
    </Box>
  );
};

const PageThreeModal: React.FC<Props> = ({ id }) => {
  return (
    <>
      <Box position={"relative"} zIndex={1}>
        <Box
          mb="-12px"
          w="80%"
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
            Education.....
          </Text>
        </Box>
      </Box>

      <Box
        width={{ base: "300px", xl: "600px" }}
        height={{ base: "auto", xl: "400px" }}
        bgColor={"white"}
        p="3"
        display={"flex"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {/* Edu 1 */}
        {id === 1 && (
          <CommonDesign
            title="MS-IT @IIIT Hyderabad"
            year="Sep 2024 - Sep 2026"
          />
        )}

        {/* Edu 2 */}
        {id === 2 && (
          <CommonDesign
            title="Bachelor's Degree(E.C.E) @ALIET"
            year="Jun 2012 - Jun 2016"
          />
        )}
      </Box>
    </>
  );
};

export default PageThreeModal;
