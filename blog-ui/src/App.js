import React, { useState } from "react";
import "./App.css";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";

function App() {
  const [blogs] = useState([
    {
      id: 1,
      title: "React Basics",
      author: "Sanjay Patel",
      date: "Feb 2026",
      summary: "Learn fundamentals of React and components.",
      content:
        "React is a powerful JavaScript library used for building interactive UIs. It uses components, props, and state to manage data efficiently."
    },
    {
      id: 2,
      title: "Understanding useState",
      author: "Rahul Mehta",
      date: "Jan 2026",
      summary: "Deep dive into React useState hook.",
      content:
        "useState allows functional components to manage state. It returns a state value and a function to update it."
    },
    {
      id: 3,
      title: "SPA Concept Explained",
      author: "Priya Sharma",
      date: "Dec 2025",
      summary: "What is Single Page Application?",
      content:
        "SPA loads a single HTML page and dynamically updates content without refreshing the page."
    }
  ]);

  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="container">
      <h1>🚀 Simple Blog UI</h1>

      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} goBack={() => setSelectedBlog(null)} />
      ) : (
        <BlogList blogs={blogs} onSelect={setSelectedBlog} />
      )}
    </div>
  );
}

export default App;
