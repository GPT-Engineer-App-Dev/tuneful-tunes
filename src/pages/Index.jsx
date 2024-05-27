import { Box, Container, Flex, Heading, HStack, VStack, Text, Link, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaHome, FaMusic, FaBook, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.900" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Heading size="md">MusicStream</Heading>
          <HStack spacing={4}>
            <NavLink to="/" exact>
              <HStack spacing={1}>
                <FaHome />
                <Text>Home</Text>
              </HStack>
            </NavLink>
            <NavLink to="/browse">
              <HStack spacing={1}>
                <FaMusic />
                <Text>Browse</Text>
              </HStack>
            </NavLink>
            <NavLink to="/library">
              <HStack spacing={1}>
                <FaBook />
                <Text>Library</Text>
              </HStack>
            </NavLink>
            <NavLink to="/profile">
              <HStack spacing={1}>
                <FaUser />
                <Text>Profile</Text>
              </HStack>
            </NavLink>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Section */}
      <Box as="main" p={4}>
        <Heading size="lg" mb={4}>Featured Playlists</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          {/* Example Playlist */}
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="200px">
            <Image src="https://via.placeholder.com/150" alt="Playlist Cover" mb={2} borderRadius="md" />
            <Text fontSize="lg">Top Hits</Text>
            <Text fontSize="sm">Various Artists</Text>
          </Box>
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="200px">
            <Image src="https://via.placeholder.com/150" alt="Playlist Cover" mb={2} borderRadius="md" />
            <Text fontSize="lg">Chill Vibes</Text>
            <Text fontSize="sm">Various Artists</Text>
          </Box>
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="200px">
            <Image src="https://via.placeholder.com/150" alt="Playlist Cover" mb={2} borderRadius="md" />
            <Text fontSize="lg">Workout Mix</Text>
            <Text fontSize="sm">Various Artists</Text>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between">
          <Text>&copy; 2023 MusicStream</Text>
          <HStack spacing={4}>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;