export default function Navbar() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav>
      <a href="#intro" onClick={e => handleNavClick(e, 'intro')}>Home</a>
      <a href="#about" onClick={e => handleNavClick(e, 'about')}>About</a>
      <a href="#register" onClick={e => handleNavClick(e, 'register')}>Register</a>
      <a href="#footer" onClick={e => handleNavClick(e, 'footer')}>Sponsors</a>
    </nav>
  );
}

