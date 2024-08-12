"use client";

import {
  Text,
  Box,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  id: number;
}

const moveIn = keyframes`
  from {width: 0%;}
  to {width: 70%;}
`;

interface CommonDesign {
  title: string;
  img: string;
  text: string;
}

const CommonDesign: React.FC<CommonDesign> = ({ title, img, text }) => {
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
            {title}
          </Text>
        </Box>
      </Box>

      <Box
        width={{ base: "300px", xl: "600px" }}
        height={{ base: "auto", xl: "400px" }}
        bgColor={"white"}
        p="3"
      >
        <Image
          src={img}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={100}
          alt="Picture of the author"
        />

        <Text
          textAlign={"center"}
          fontSize={{ base: "md", xl: "3xl" }}
          fontWeight={400}
          fontFamily={"Oswald"}
          mt="2"
        >
          {text}
        </Text>
      </Box>
    </>
  );
};

const PageFourModal: React.FC<Props> = ({ id }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${moveIn} 0.4s ease-in-out`;

  return (
    <Box>
      {id === 1 && (
        <CommonDesign
          title="Challenging Env...."
          img="./images/quote.png"
          text="Always!"
        />
      )}
      {id === 2 && (
        <CommonDesign
          title="Building for better world...."
          img="./images/blind-help.webp"
          text="Help the disabled with tech!"
        />
      )}
    </Box>
  );
};

export default PageFourModal;
