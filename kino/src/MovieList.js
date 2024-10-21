import './MovieList.css';
import lambo from './lambo.jpg';
import ferrari from './Ferrari.jpg';
import audi from './audi.jpg';
import merc from './merc.jpg';

const menuItems = [
    {
        id: 1,
        title: 'Lamborghini',
        time: '15:45, 18:00',
        description: 'samochodowy',
        image: lambo,
    },
    {
        id: 2,
        title: 'Ferrari',
        time: '15:45, 18:00',
        description: 'samochodowy',
        image: ferrari,
    },
    {
        id: 3,
        title: 'Audi',
        time: '15:45, 18:00',
        description: 'samochodowy',
        image: audi,
    },
    {
        id: 4,
        title: 'Mercedes_benz',
        time: '15:45, 18:00',
        description: 'samochodowy',
        image: merc,
    },
]


const Menu = () => {
    return (
        <div>
            <h1>Repertuar</h1>
            <ul style={{listStyleType: 'none', padding: 0 }}>
                {menuItems.map(item => (
                    <li key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name}/>
                        <div style={{position: 'relative'}}>
                           <h1 style={{margin: 0 }}>{item.name}</h1> 
                           <h2 style={{margin: '5px 0' }}>{item.time}</h2> 
                           <p style={{color: 'grey'}}>{item.description}</p>

                        </div>
                    </li>
                )

                )}

            </ul>
        </div>
    );
}

export default Menu;