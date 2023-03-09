import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fontsource/roboto/300.css";
import Home from "./Home";
import Details from "./Details";
import ResDrawer from "./ResDrawer";
import SetPage from "./SetPage";
import CardPage from "./CardPage";
import Favorites from "./Favorites";
import { Container } from "@mui/system";
import HitPoints from "./HitPoints";

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
              <Route path="/cardpage/cards/:id" element={<Details />}></Route>
              <Route path="/setpage/" element={<SetPage />}></Route>
              <Route path="/setpage/sets/:code" element={<CardPage />}></Route>
              <Route path="/favorites/" element={<Favorites />}></Route>
              <Route path="/favorites/cards/:id" element={<Details />}></Route>
              <Route
                path="/setpage/sets/:code/cards/:id"
                element={<Details />}
              ></Route>
              <Route path="/hitpoints/" element={<HitPoints />}></Route>
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </Container>
    </div>
  );
};

// get the div with the ID root, create the root using this container, render our App
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);
export default App;
