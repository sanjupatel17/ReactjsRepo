import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [notification, setNotification] = useState(null);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });

    setTimeout(() => {
      setNotification(null);
    }, 2500);
  };

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact showNotification={showNotification} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar
        setActivePage={setActivePage}
        toggleTheme={toggleTheme}
      />

      {/* LEFT SIDE POP MESSAGE */}
      {notification && (
        <div className={`left-toast ${notification.type}`}>
          {notification.message}
        </div>
      )}

      {renderPage()}
    </div>
  );
}

export default App;
