import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd}) => {  
  return (
    <header className='header'>
      <h1 style={myStyle}>{title}</h1>
      <Button 
        onClick={onAdd}
        btnName='Add' 
        btnColour = 'green'
      />
    </header>

  )
}

const myStyle = {
  color: 'black',
  // backgroundColor: 'lightblue'
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