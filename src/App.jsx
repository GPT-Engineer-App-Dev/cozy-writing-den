import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx"; // Import the AddPost component
import { Box, Button, useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Box p={4}>
        <Button onClick={toggleColorMode} mb={4}>
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/add-post" element={<AddPost />} /> {/* Add route for AddPost */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;