import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header>
        <h1>{props.title}</h1>        
    </header>

  )
}

export default Header

Header.defaultProps = {
  title: 'Default Title',
  age: '23',
};

Header.propTypes = {
  title: PropTypes.number,
  age: PropTypes.string,
};