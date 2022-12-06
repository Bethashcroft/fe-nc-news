import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/news">
      <div className="header">
        <h1>Welcome to NC News</h1>
      </div>
    </Link>
  );
};

export default Header;
