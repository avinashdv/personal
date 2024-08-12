"use client";

import { Box, Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

const TextContent: React.FC<Props> = ({ text }) => {
  return (
    <Box>
      {text.split(" ")[0] && (
        <Text
          position={"absolute"}
          top={{ base: "32%", xl: "18%" }}
          left="15%"
          color="#736451"
          fontSize={{ base: "48px", xl: "100px" }}
          className="textMove"
        >
          {text.split(" ")[0]}
        </Text>
      )}
      {text.split(" ")[1] && (
        <Text
          position={"absolute"}
          bottom={{ base: "32%", xl: "18%" }}
          right="35%"
          color="#736451"
          fontSize={{ base: "48px", xl: "100px" }}
          className="textMove"
        >
          {text.split(" ")[1]}
        </Text>
      )}
      {text.split(" ")[2] && (
        <Text
          position={"absolute"}
          top={{ base: "46%", xl: "35%" }}
          right="13%"
          color="#736451"
          fontSize={{ base: "48px", xl: "100px" }}
          className="textMove"
        >
          {text.split(" ")[2]}
        </Text>
      )}
    </Box>
  );
};

export default TextContent;
