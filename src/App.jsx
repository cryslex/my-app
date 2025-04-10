import AdvantagesSection from './comp/AdvantagesSection'
import './App.css'
import Button from './comp/Button';
import {useState} from 'react'
import {prices} from './comp/prices'

export default function App() {
  const [priceType, setPriceType] = useState('cheap');
  const [shipInfo, setShipInfo] = useState({
    price: undefined,
    weight: undefined
  })

  function handleClick(type){
    setPriceType(type)
  }

  function priceChangeHandle(event){
    setShipInfo((prev) => ({
      ...prev, 
      price: parseInt(event.target.value)}))
  }

  function weightChangeHandle(event){
    setShipInfo((prev) => ({
      ...prev, 
      weight: parseFloat(event.target.value)}))
  }

  const procent = 1.1

  const usdToByn = 3.35

  let priceUSD = Math.ceil((shipInfo.price / 7 + shipInfo.weight * parseInt(prices[priceType]['price']))*procent)
  let fullPrice = `${priceUSD}$ ≈ ${Math.ceil(priceUSD * usdToByn)} BYN`

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
        <p className='prices'><i><b>{prices[priceType]['price']}$/кг</b></i> - {prices[priceType]['description']}</p>
        <h2>Посчитай, сколько будет стоить желаемый товар!</h2>
        <input type="number" min='0' placeholder='Цена в юанях' value={shipInfo.price} onChange={(event) => priceChangeHandle(event)}></input>
        <input type="number" step="0.1" placeholder='Вес товара' value={shipInfo.weight} onChange={(event) => weightChangeHandle(event)}></input>
        <h3>{fullPrice !== "NaN$ ≈ NaN BYN" ? fullPrice : "Введи данные и узнай стоимость выкупа и доставки товара!"}</h3>
      </div>   
    </div>
  );
}
