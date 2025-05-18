const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img
          src="/images/nufc-logo.png"
          alt="logo"
          height={50}
          width={50}
          style={{ marginTop: '15px' }}
        />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">Points Table</li>
        <li href="#">Matches</li>
        <li href="#">Contact</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
