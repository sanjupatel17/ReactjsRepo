const Navbar = ({ setActivePage, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="logo">Sanjay Patel</div>

      <div className="nav-links">
        <span onClick={() => setActivePage("home")}>Home</span>
        <span onClick={() => setActivePage("about")}>About</span>
        <span onClick={() => setActivePage("skills")}>Skills</span>
        <span onClick={() => setActivePage("projects")}>Projects</span>
        <span onClick={() => setActivePage("contact")}>Contact</span>
        <button onClick={toggleTheme}>Toggle</button>
      </div>
    </nav>
  );
};

export default Navbar;
