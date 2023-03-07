import { Flex, Heading, Button, Spacer, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Flex as="nav" p="10px" mb="60px" alignItems="center">
            <Heading as="h1" fontSize="1.5em">
                <Link to="/">CodeSpace</Link>
            </Heading>
            <Spacer />

            <HStack spacing="20px">
                <Link to="/login">
                    <Button colorScheme="purple">Abrir sesión</Button>
                </Link>
                <Link to="/signup">
                    <Button colorScheme="purple">Registrarse</Button>
                </Link>
            </HStack>
        </Flex>
    );
}
