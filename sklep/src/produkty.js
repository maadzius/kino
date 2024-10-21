import './produkty.css';
import powerbank from './powerbank.jpg';
import ladowarka from './ladowarka.jpg';
import monitor from './monitor.jpg';

const Products1 = () =>(
   <div className='cale'>
    <div className='product'>
    <img className='img' src={powerbank}/>
    <p>powerbank</p>
    <p>CENA: 300 zł </p>
    </div>
    <div className='product'>
    <img className='img' src={ladowarka}/>
    <p>ładowarka</p>
    <p>CENA: 90 zł </p>
    </div>
    <div className='product'>
    <img className='img' src={monitor}/>
    <p>monitor</p>
    <p>CENA: 3500 zł </p>
    </div>
   </div>
   
);
export default Products1;