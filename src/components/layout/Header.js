import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navabar-dark bg-danger mb-3 py-0">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {props.branding}
          </Link>

          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
              <i className="fas fa-home"></i> Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts/add" className="nav-link">
              <i className="fas fa-plus"></i> Add</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
              <i className="fas fa-question"></i> About</Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

// default Props
Header.defaultProps = {
  branding: "Contact Manager",
};

// TypeChecking With Props
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
