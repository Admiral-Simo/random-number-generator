import styles from "../styles/Home.module.css";
import { Flex, Box, Input, Button, Text, Badge } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [randomNum, setRandomNum] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setRandomNum(randomInteger(min, max));
  };
  return (
    <Flex bg="purple.600" h="100vh" justifyContent="center" alignItems="center">
      <Box p={8} bg="blue.900" w="400px" as="form" onSubmit={handleSubmit}>
        <Box p={4} bg="blue.700" mb="10px">
          <Text color="white">
            Random number: <Badge colorScheme="green">{randomNum}</Badge>
          </Text>
        </Box>
        <Flex mb="20px">
          <Box mr="10px">
            <Text color="white">Min:</Text>
            <Input
              value={min}
              onChange={(e) => setMin(e.target.value)}
              type="number"
              color="white"
              border="none"
              _focus={{ boxShadow: "none" }}
              bg="blue.700"
            />
          </Box>
          <Box>
            <Text color="white">Max:</Text>
            <Input
              value={max}
              onChange={(e) => setMax(e.target.value)}
              type="number"
              color="white"
              border="none"
              _focus={{ boxShadow: "none" }}
              bg="blue.700"
            />
          </Box>{" "}
        </Flex>
        <Button type="submit" colorScheme="purple" w="full" letterSpacing="1px">
          Generate
        </Button>
      </Box>
    </Flex>
  );
}
