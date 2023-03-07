import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
    Box,
    SimpleGrid,
    Text,
    Flex,
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    HStack,
    Divider,
    Button,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
    const cursos = useLoaderData();

    return (
        <SimpleGrid spacing={10} minChildWidth={300}>
            {cursos &&
                cursos.map((curso) => (
                    <Card
                        key={curso.id}
                        borderTop="8px"
                        borderColor="purple.400"
                        bg="white">
                        <CardHeader color="gray.700">
                            <Flex gap={5}>
                                <Box w="50px" h="50px">
                                    {/* <Avatar name={curso.user_id} src={curso.img} /> */}
                                </Box>
                                <Box>
                                    <Heading as="h3" size="sm">
                                        {curso.nombre}
                                    </Heading>
                                    <Text>by {curso.user_id}</Text>
                                </Box>
                            </Flex>
                        </CardHeader>

                        <CardBody color="gray.500">
                            <Text>{curso.descripcion}</Text>
                        </CardBody>

                        <Divider borderColor="gray.200" />

                        <CardFooter>
                            <HStack>
                                <Button variant="ghost" leftIcon={<ViewIcon />}>
                                    Ver
                                </Button>
                                <Button variant="ghost" leftIcon={<EditIcon />}>
                                    Comment
                                </Button>
                            </HStack>
                        </CardFooter>
                    </Card>
                ))}
        </SimpleGrid>
    );
}

export const cursosLoader = async () => {
    const res = await fetch("/cursos");

    return res.json();
};
