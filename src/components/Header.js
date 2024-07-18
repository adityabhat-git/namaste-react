const Header = () => {
  const imageSource = require("../images/logo.png");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={imageSource} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
