import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";

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
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

// get the div with the ID root, create the root using this container, render our App
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
