import AdvantagesSection from './comp/AdvantagesSection'
import './App.css'
import Button from './comp/Button';
import {useState} from 'react'
import CalculatePriceSection from './comp/CalculatePriceSection';


export default function App() {
  const [priceType, setPriceType] = useState('cheap');
  

  function handleClick(type){
    setPriceType(type)
  }

  

  return (
    <div className="App">
    <header className='header'>
      <h1 className='companyName'>DDL</h1>
    </header>
      <div className="container">
        <AdvantagesSection/>
        <h2>Узнать подробнее о сроках и ценах доставки:</h2>
        <Button isActive={priceType === 'cheap'} onClick={() => handleClick('cheap')}>19-25 дней</Button>
        <Button isActive={priceType === 'middle'} onClick={() => handleClick('middle')}>13-19 дней</Button>
        <Button isActive={priceType === 'expensive'} onClick={() => handleClick('expensive')}>4-9 дней</Button>
        <CalculatePriceSection>{priceType}</CalculatePriceSection>
      </div>   
    </div>
  );
}
