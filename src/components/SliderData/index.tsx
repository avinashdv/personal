"use client";

import { Box, Text, Icon } from "@chakra-ui/react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

interface Props {
  onModalOpen: () => void;
  title: string;
}

const SliderData: React.FC<Props> = ({ onModalOpen, title }) => {
  return (
    <Box
      zIndex={10}
      position={"absolute"}
      top={"50%"}
      left={"6%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"start"}
      width={"fit-content"}
      flexDirection={"column"}
      role="group"
      cursor={"pointer"}
    >
      <Text
        fontSize={{ base: "xl", xl: "3xl" }}
        fontWeight={400}
        fontFamily={"Oswald"}
        color="rgba(225, 132, 37, .8)"
        onClick={onModalOpen}
      >
        {title}
      </Text>
      <Box
        width={"0%"}
        height="4px"
        transition={"width 0.4s ease-in-out"}
        overflow={"hidden"}
        _groupHover={{
          width: "100%",
        }}
        bgColor={"rgba(225, 132, 37, .8)"}
      ></Box>
      <Icon
        mt="0.5"
        ml="3"
        transition={"transform 0.4s ease-out, opacity 0.4s ease-out"}
        _groupHover={{
          height: "fit-content",
          transform: "translate3d(30px, 0px, 0)",
          opacity: 0,
        }}
        as={MdOutlineArrowRightAlt}
        boxSize={{ base: "4", xl: "8" }}
        color="white"
      />
    </Box>
  );
};

export default SliderData;
