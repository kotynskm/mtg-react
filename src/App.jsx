import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fontsource/roboto/300.css";
import Home from "./Home";
import Details from "./Details";
import ResDrawer from "./ResDrawer";
import CardPage from "./CardPage";
import SetPage from "./SetPage";
import { Container } from "@mui/system";

// establish queryClient for our cache and how long items persist in cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div>
      <ResDrawer />
      <Container maxWidth="md">
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cardpage" element={<CardPage />}></Route>
              <Route path="/cardpage/cards/:id" element={<Details />}></Route>
              <Route path="/setpage" element={<SetPage />}></Route>
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </Container>
    </div>
  );
};

// get the div with the ID root, create the root using this container, render our App
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
