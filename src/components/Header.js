import PropTypes from 'prop-types';


const Header = (props) => {
  return <div>
    <nav className="navbar navbar-expand-sm navabar-dark bg-danger mb-3 py-0">
  <div className="container">
    <a className="navbar-brand" href="/">{props.branding}</a>

    <div className="navbar-nav mr-auto">
        <li className="nav-item">
            <a href="/">Home</a>
        </li>
    </div>
  </div>

</nav>


      {/* <h2 style={headingStyle}></h2> */}
  </div>;
};

// default Props 
Header.defaultProps = {
    branding : 'Contact Manager'
}

// TypeChecking With Props
Header.propTypes = {
    branding : PropTypes.string.isRequired
}

// Applying styles by passing the variable name to the style component
// const headingStyle = {
//     color: 'green',
//     fontSize : '50px'
// }

export default Header;
