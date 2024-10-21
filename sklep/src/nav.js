import './nav.css';
import logo from './logo.png';

const Nav = () =>(
    <div className='nav'>
        <div className='navdiv'>
        <img className='img1' src={logo}/>
        </div>
        <div className='navtext'>
            <p>Komputery</p>
            <p>Laptopy</p>
            <p>Tablety</p>
        </div>
    </div>
);
export default Nav;