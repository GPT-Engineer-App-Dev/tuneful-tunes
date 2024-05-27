import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleCreatePlaylist = () => {
    // Logic to create playlist
    console.log("Playlist Created:", { playlistName, description });
    navigate("/");
  };

  return (
    <Container maxW="container.md" p={4}>
      <Box as="form" bg="gray.700" color="white" p={6} borderRadius="md">
        <Heading size="lg" mb={4}>Create New Playlist</Heading>
        <VStack spacing={4}>
          <FormControl id="playlist-name" isRequired>
            <FormLabel>Playlist Name</FormLabel>
            <Input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Enter playlist name"
            />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter playlist description (optional)"
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleCreatePlaylist}>Create Playlist</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default CreatePlaylist;