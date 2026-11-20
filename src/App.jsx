
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SantaVillage from "./components/SantaVillage";
import Snowfall from "./components/Snowfall";
import ExplorePage from "./components/ExplorePage";
import ChristmasTree from "./components/ChristmasTree";
import ComicStory from "./components/ComicStory";
import MusicPlayer from "./components/MusicPlayer";
import WishPage from "./components/WishPage";

import "./App.css";

// Scroll to top when navigating between pages
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="winter-world">

      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={<HomePage />}
          />

          {/* Santa Village Page */}
          <Route
            path="/village"
            element={<SantaVillage />}
          />

          {/* Christmas Tree Page */}
          <Route
            path="/christmas-tree"
            element={<ChristmasTree />}
          />

          {/* Santa Story Page */}
          <Route
            path="/story"
            element={<ComicStory />}
          />

          <Route path="/make-a-wish" element={<WishPage />} />

          {/* Page Not Found */}
          <Route
            path="*"
            element={
              <ExplorePage
                title="Page Not Found"
                description="This magical destination does not exist."
              />
            }
          />

        </Routes>
      </main>

      <MusicPlayer />
      {/* Global Snowfall Effect */}
      <Snowfall />

    </div>
  );
}

export default App;
