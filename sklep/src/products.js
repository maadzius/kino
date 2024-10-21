import './products.css';
import sluchawki from './sluchawki.jpg';
import laptop from './laptop.jpg';
import telefon from './telefon.jpg';

const Products = () =>(
   <div className='cale'>
    <div className='product'>
    <img className='img' src={sluchawki}/>
    <p>słuchawki</p>
    <p>CENA: 190 zł </p>
    </div>
    <div className='product'>
    <img className='img' src={laptop}/>
    <p>laptop</p>
    <p>CENA: 4500 zł </p>
    </div>
    <div className='product'>
    <img className='img' src={telefon}/>
    <p>telefon</p>
    <p>CENA: 2500 zł </p>
    </div>
   </div>
   
);
export default Products;