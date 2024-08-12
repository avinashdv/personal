"use client";
import { Box, useDisclosure, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PageOne from "@/components/Pages/PageOne";
import PageTwo from "@/components/Pages/PageTwo";
import PageThree from "@/components/Pages/PageThree";
import PageFour from "@/components/Pages/PageFour";
import PageFive from "@/components/Pages/PageFive";
import dynamic from "next/dynamic";

const ModalNavigation = dynamic(
  () => import("@/components/Modal/ModalNavigation"),
  {
    ssr: false,
  }
);
import type { NextPage } from "next";

const Page: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getSlideText = (idx: number) => {
    switch (idx) {
      case 1:
        return "ABOUT";

      case 2:
        return "WORK";

      case 3:
        return "EDUCATION";

      case 4:
        return "LOOKING FOR";

      case 5:
        return "CONTACT";

      default:
        return "ABOUT";
    }
  };

  const closeModal = () => {
    onClose();
  };

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => closeModal(),
    appendDots: (dots: any) => (
      <ModalNavigation
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        dots={dots}
      />
    ),
    customPaging: (i: number) => (
      <Box
        _hover={{
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        display={"flex"}
        justifyContent={"center"}
        minH={"100%"}
        flex={"1 1"}
        alignItems={"center"}
        gap={"2"}
        flexDir={"column"}
        role="group"
        height={"full"}
        cursor={"pointer"}
      >
        <Text
          color="white"
          fontSize={{ base: "sm", xl: "3xl" }}
          fontWeight={400}
          fontFamily={"Oswald"}
        >
          {getSlideText(i + 1)}
        </Text>
        <Box
          zIndex={10}
          whiteSpace={"nowrap"}
          width={"10%"}
          height={{ base: "2px", xl: "4px" }}
          overflow="hidden"
          display={"inline-block"}
          transition={"width 0.2s ease-in-out"}
          _groupHover={{
            // @ts-ignore
            width: "30%",
          }}
          backgroundColor="rgba(225, 132, 37, .8)"
        ></Box>
      </Box>
    ),
  };

  return (
    <Box width="full" height="100vh" overflow={"hidden"}>
      <Slider {...settings}>
        <Box height={"100vh"}>
          <PageOne isModalOpen={isOpen} onModalOpen={onOpen} />
        </Box>
        <Box height={"100vh"}>
          <PageTwo isModalOpen={isOpen} onModalOpen={onOpen} />
        </Box>
        <Box height={"100vh"}>
          <PageThree isModalOpen={isOpen} onModalOpen={onOpen} />
        </Box>
        <Box height={"100vh"}>
          <PageFour isModalOpen={isOpen} onModalOpen={onOpen} />
        </Box>
        <Box height={"100vh"}>
          <PageFive isModalOpen={isOpen} onModalOpen={onOpen} />
        </Box>
      </Slider>
    </Box>
  );
};

export default Page;
