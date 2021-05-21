import PropTypes from 'prop-types';
import Button from './Button';
import {useLocation} from 'react-router-dom';

const Header = ({title, toggler, setToggler}) => {

    const location = useLocation()

  const  onClick = () => {
      setToggler(!toggler)
    }

    

    return ( 
        <header className = 'header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button onClick = {onClick} color = {toggler ? 'red' : 'green'} text = {toggler ? 'Close' : 'Add Task'}></Button>}
        </header>
     );
}

 
Header.defaultProps = {
    title : 'Task Tracker'
}
 
Header.propTypes = {
    title : PropTypes.string.isRequired
}


 
export default Header;


