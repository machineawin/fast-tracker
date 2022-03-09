import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header>
        <h1>{props.title}{props.age}</h1>        
    </header>

  )
}

export default Header

Header.defaultProps = {
  title: 'Default Title',
  age: '23',
};

