import { useState, useRef } from "react";
import { Box, Container, Flex, Heading, HStack, VStack, Text, Link, Image, Button, IconButton, Progress } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaMusic, FaBook, FaUser, FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio());

  const handlePlayPause = (songUrl) => {
    if (currentSong !== songUrl) {
      audioRef.current.src = songUrl;
      setCurrentSong(songUrl);
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    // Logic to play the next song
  };

  const handlePrevious = () => {
    // Logic to play the previous song
  };

  const handleTimeUpdate = () => {
    const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progress);
  };

  audioRef.current.ontimeupdate = handleTimeUpdate;

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
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Heading size="lg">Featured Playlists</Heading>
          <Button colorScheme="blue" onClick={() => navigate("/create-playlist")}>Create Playlist</Button>
        </Flex>
        <Flex wrap="wrap" justifyContent="space-around">
          {/* Example Playlist */}
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="200px">
            <Image src="https://via.placeholder.com/150" alt="Playlist Cover" mb={2} borderRadius="md" />
            <Text fontSize="lg">Top Hits</Text>
            <Text fontSize="sm">Various Artists</Text>
            <IconButton icon={<FaPlay />} onClick={() => handlePlayPause('song-url-here')} mt={2} />
          </Box>
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="200px">
            <Image src="https://via.placeholder.com/150" alt="Playlist Cover" mb={2} borderRadius="md" />
            <Text fontSize="lg">Chill Vibes</Text>
            <Text fontSize="sm">Various Artists</Text>
            <IconButton icon={<FaPlay />} onClick={() => handlePlayPause('song-url-here')} mt={2} />
          </Box>
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="200px">
            <Image src="https://via.placeholder.com/150" alt="Playlist Cover" mb={2} borderRadius="md" />
            <Text fontSize="lg">Workout Mix</Text>
            <Text fontSize="sm">Various Artists</Text>
            <IconButton icon={<FaPlay />} onClick={() => handlePlayPause('song-url-here')} mt={2} />
          </Box>
        </Flex>
      </Box>

      {/* Playback Controls */}
      <Flex justifyContent="center" alignItems="center" mt={4}>
        <IconButton icon={<FaBackward />} onClick={handlePrevious} />
        <IconButton icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={() => handlePlayPause(currentSong)} mx={2} />
        <IconButton icon={<FaForward />} onClick={handleNext} />
      </Flex>
      <Progress value={progress} size="xs" colorScheme="blue" mt={2} />

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