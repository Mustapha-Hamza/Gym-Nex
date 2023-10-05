import './Header.css';

function Header() {
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the current scroll position
      const currentPosition = window.scrollY;

      // Calculate the target scroll position
      const targetPosition = element.getBoundingClientRect().top + currentPosition;

      // Scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      // Listen for scroll events to check when we've reached the target position
      const checkScrollPosition = () => {
        const currentScroll = window.scrollY;

        // Check if we're close to the target position
        if (Math.abs(currentScroll - targetPosition) < 10) {
          // Remove the scroll listener
          window.removeEventListener('scroll', checkScrollPosition);
        }
      };

      // Add a scroll listener to check the position
      window.addEventListener('scroll', checkScrollPosition);
    }
  };

  return (
    <div className="main--header">
      <div className="main--title">
        <h1>
          GYM-<span className="name--NEX">NE</span>
          <span className="name--X">X</span>
        </h1>
        <h4>FITNESS CENTER</h4>
      </div>
      <nav>
        <ul className="main--nav">
          <li onClick={() => scrollToComponent('Hero')}>Home</li>
          <li onClick={() => scrollToComponent('Programs')}>Programs</li>
          <li onClick={() => scrollToComponent('Reasons')}>Why Us</li>
          <li onClick={() => scrollToComponent('Plans')}>Plans</li>
          <li onClick={() => scrollToComponent('Testimonials')}>Testimonials</li>
          <li onClick={() => scrollToComponent('Footer')}>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
