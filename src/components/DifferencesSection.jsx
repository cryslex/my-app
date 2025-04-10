import Button from './Button.jsx'
import {useState} from 'react'
import { differences } from './cars.js';

let lastClick = null;

export default function DifferencesSection(){
      const [contentType, setContentType] = useState(null)
        
      
        function handleClick(type){
          if(type === lastClick){
            setContentType(null)
            lastClick = null
          }
          else {
            setContentType(type)
            lastClick = type
          }
          
        }
      return (
      <>
        <Button isActive={contentType === 'BMW'} onClick={() => handleClick('BMW')}>{contentType === 'BMW' ? "x" : "BMW"}</Button>
        <Button isActive={contentType === 'Mercedes'} onClick={() => handleClick('Mercedes')}>{contentType === 'Mercedes' ? "x" : "Mercedes"}</Button>
        <Button isActive={contentType === 'Renault'} onClick={() => handleClick('Renault')}>{contentType === 'Renault' ? "x" : "Renault"}</Button>
        <div className="differences">{differences[contentType]}</div>
      </>
      )
}