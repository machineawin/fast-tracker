import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header>
        <h1 style={myStyle}>{props.title}</h1>        
    </header>

  )
}

const myStyle = {
  color: 'red',
  backgroundColor: 'lightblue'
};

export default Header

Header.defaultProps = {
  title: 'Default Title',
  age: 23,
};

Header.propTypes = {
  title: PropTypes.string,
  age: PropTypes.number,
};