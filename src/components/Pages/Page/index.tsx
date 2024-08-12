"use client";

import { useEffect, useState } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import LineAnimation from "@/components/LineAnimation";
import TextContent from "@/components/TextContent";
import SpecialDetails from "@/components/SpecialDetails";
import Image from "next/image";
import SliderData from "@/components/SliderData";

interface Props {
  isModalOpen: boolean;
  onModalOpen: () => void;
  imgLink: string;
  textContentTitle: string;
  sliderDataTitle: string;
  specialDetailsOneTitle: string;
  specialDetailsOneBtnText: string;
  specialDetailsTwoTitle: string;
  specialDetailsTwoBtnText: string;
  pageValue: number;
}

const Page: React.FC<Props> = ({
  isModalOpen,
  onModalOpen,
  imgLink,
  textContentTitle,
  sliderDataTitle,
  specialDetailsOneTitle,
  specialDetailsOneBtnText,
  specialDetailsTwoTitle,
  specialDetailsTwoBtnText,
  pageValue,
}) => {
  const [imgOpacity, setImgOpacity] = useState<number>(1);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const leftBoxData = {
    position: "absolute",
    left: "20%",
    bottom: "38.5%",
    width: "400px",
    height: "18px",
    backgroundColor: "white",
  };
  const leftBoxAdditionalContent = {
    width: "18%",
    textLeft: "19.5%",
    textBottom: "40.8%",
    left: "20%",
    bottom: "34.6%",
  };

  const rightBoxData = {
    position: "absolute",
    left: "58%",
    bottom: "65.5%",
    width: "400px",
    height: "18px",
    backgroundColor: "white",
  };
  const rightBoxAdditionalContent = {
    width: "12%",
    textLeft: "57.5%",
    textBottom: "67.8%",
    left: "58%",
    bottom: "61.8%",
  };

  useEffect(() => {
    let mousePointersOne = document.querySelectorAll<HTMLElement>(".lineMove");
    let mousePointersTwo = document.querySelectorAll<HTMLElement>(".textMove");

    document.addEventListener("mousemove", function (e) {
      // line-animation
      let x = e.pageX / window.innerHeight;
      x = x * -60;
      for (let mousePointer of Array.from(mousePointersOne)) {
        mousePointer.style.transform = "translateX(" + x + "%)";
      }

      // text-animation
      let y = e.pageX / window.innerHeight;
      y = y * -2;
      for (let mousePointer of Array.from(mousePointersTwo)) {
        mousePointer.style.transform = "translateX(" + y + "%)";
      }
    });
  }, []);

  return (
    <Box width="full" height="full" position={"relative"}>
      {/* Big BG IMG */}
      <Image
        src={`./images/${imgLink}`}
        fill={true}
        id="bgImgOne"
        objectFit="cover"
        style={{
          opacity: imgOpacity,
        }}
        alt={sliderDataTitle}
      />

      <Box display={isModalOpen ? "none" : "block"}>
        {/* Border 1 */}
        <Box
          position={"absolute"}
          bottom="20%"
          width="full"
          height={"1px"}
          backgroundColor={"rgba(249, 248, 248, .15)"}
        ></Box>

        {/* Line Animation */}
        <LineAnimation />

        {/* Text WHO AM I */}
        <TextContent text={textContentTitle} />

        <SliderData onModalOpen={onModalOpen} title={sliderDataTitle} />

        {/* Special Details 1 */}
        <SpecialDetails
          position="absolute"
          left="22%"
          bottom="41%"
          title={specialDetailsOneTitle}
          btnText={specialDetailsOneBtnText}
          boxData={leftBoxData}
          boxAdditionalContent={leftBoxAdditionalContent}
          pageValue={pageValue}
          pageId={2}
        />

        {/* Special Details 2 */}
        <SpecialDetails
          position="absolute"
          left="60%"
          bottom="68%"
          title={specialDetailsTwoTitle}
          btnText={specialDetailsTwoBtnText}
          boxData={rightBoxData}
          boxAdditionalContent={rightBoxAdditionalContent}
          pageValue={pageValue}
          pageId={1}
        />

        {/* Border 2 */}
        <Box
          position={"absolute"}
          top="20%"
          width="full"
          height={"1px"}
          backgroundColor={"rgba(249, 248, 248, .15)"}
        ></Box>
      </Box>
    </Box>
  );
};

export default Page;
