import {prices} from './prices.js'
import {useState} from 'react'

export default function CalculatePriceSection(props){
  const [shipInfo, setShipInfo] = useState({
    price: undefined,
    weight: undefined
  })
  
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

  let priceUSD = Math.ceil((shipInfo.price / 7 + shipInfo.weight * parseInt(prices[props.children]['price']))*procent)
  let fullPrice = `${priceUSD}$ ≈ ${Math.ceil(priceUSD * usdToByn)} BYN`
    
    return (<>
        <p className='prices'><i><b>{prices[props.children]['price']}$/кг</b></i> - {prices[props.children]['description']}</p>
        <h2>Посчитай, сколько будет стоить желаемый товар!</h2>
        <input type="number" min='0' placeholder='Цена в юанях' value={shipInfo.price} onChange={(event) => priceChangeHandle(event)}></input>
        <input type="number" step="0.1" placeholder='Вес товара' value={shipInfo.weight} onChange={(event) => weightChangeHandle(event)}></input>
        <h3>{fullPrice !== "NaN$ ≈ NaN BYN" ? fullPrice : "Введи данные и узнай стоимость выкупа и доставки товара!"}</h3>
    </>)
}