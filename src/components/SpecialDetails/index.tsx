"use client";

import { Show, Box, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ModalData from "./ModalData";

interface BoxData {
  position: String;
  left: String;
  bottom: String;
  width: String;
  height: String;
  backgroundColor: String;
}

interface BoxAdditionalContent {
  width: String;
  left: String;
  bottom: String;
  textLeft: String;
  textBottom: String;
}

interface Props {
  position: string;
  left: String;
  bottom: String;
  title: String;
  btnText: String;
  boxData: BoxData;
  boxAdditionalContent: BoxAdditionalContent;
  pageValue: number;
  pageId: number;
}

const SpecialDetails: React.FC<Props> = ({
  position,
  left,
  bottom,
  title,
  boxData,
  btnText,
  boxAdditionalContent,
  pageValue,
  pageId,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openMail = () => {
    window.location.href =
      "mailto:avinash.dv.264@gmail.com?subject=Have an opening!!&body=I thought you might find this job opening interesting.... ' ";
  };

  return (
    <>
      <Box
        cursor={"pointer"}
        role="group"
        onClick={pageValue === 5 && pageId === 2 ? openMail : onOpen}
      >
        <Box>
          <Text
            // @ts-ignore
            position={position}
            // @ts-ignore
            left={left}
            // @ts-ignore
            bottom={bottom}
            transition={"transform 0.2s ease"}
            _groupHover={{
              transform: {
                base: "none",
                xl: "translate3d(20px, 0, 0)",
              },
            }}
            color={"white"}
            fontSize={{ base: "xs", xl: "md" }}
            letterSpacing={"1px"}
            fontWeight={300}
            fontFamily={"Oswald"}
          >
            {pageId === 2 ? (
              <Show above="xl">
                <Icon
                  as={MdOutlineArrowRightAlt}
                  ml="-6"
                  mt="8"
                  mb="-2"
                  mr="1"
                  boxSize={"6"}
                />
              </Show>
            ) : (
              <Icon
                as={MdOutlineArrowRightAlt}
                ml="-6"
                mt="8"
                mb="-2"
                mr="1"
                boxSize={"6"}
              />
            )}
            {title}
          </Text>
        </Box>

        {/* White Box */}
        <Box
          transition={"transform 0.5s ease"}
          _groupHover={{
            transform: {
              base: "none",
              xl: "translate3d(0, -20px, 0) scaleY(2)",
            },
          }}
          // @ts-ignore
          position={boxData.position}
          // @ts-ignore
          left={boxData.left}
          // @ts-ignore
          bottom={boxData.bottom}
          // @ts-ignore
          width={{ base: "150px", xl: boxData.width }}
          // @ts-ignore
          height={boxData.height}
          // @ts-ignore
          backgroundColor={boxData.backgroundColor}
        ></Box>

        <Show above="xl">
          <Text
            position={"absolute"}
            // @ts-ignore
            bottom={boxAdditionalContent.textBottom}
            // @ts-ignore
            left={boxAdditionalContent.textLeft}
            height={0}
            overflow="hidden"
            mt={"2"}
            ml={"2"}
            transition={"transform 0.4s ease-out"}
            _groupHover={{
              height: "fit-content",
              display: "block",
              transform: {
                base: "none",
                xl: "translate3d(20px, 0px, 0)",
              },
            }}
            // fontSize={"md"}
            fontSize={{ base: "xs", xl: "md" }}
            fontWeight={300}
            fontFamily={"Oswald"}
          >
            {title}
          </Text>
          <Box
            whiteSpace={"nowrap"}
            position={"absolute"}
            // @ts-ignore
            bottom={boxAdditionalContent.bottom}
            // @ts-ignore
            left={boxAdditionalContent.left}
            width={"0%"}
            height="40px"
            overflow="hidden"
            display={"inline-block"}
            transition={"width 0.2s ease-in-out"}
            _groupHover={{
              // @ts-ignore
              width: boxAdditionalContent.width,
            }}
            color="white"
            backgroundColor="#736451"
          >
            <Text
              height={0}
              overflow="hidden"
              transition={"transform 0.4s ease-in-out"}
              mt={"6px"}
              _groupHover={{
                height: "fit-content",
                transform: "translate3d(20px, 0px, 0)",
              }}
              color={"white"}
              fontSize={"md"}
              fontWeight={300}
            >
              {btnText}
            </Text>
          </Box>
        </Show>
      </Box>
      <ModalData
        isOpen={isOpen}
        onClose={onClose}
        pageValue={pageValue}
        pageId={pageId}
      />
    </>
  );
};

export default SpecialDetails;
