import './AdvantagesSection.css'
import { advantages } from './advantages'
import Card from './Card.jsx'

export default function AdvantagesSection(){
    return (
        <>
            <h1>Наши преимущества</h1>
            <div className="advantageSection">
                {advantages.map((adv) => {
                    return(
                        <Card {...adv}/>
                    )
                })} 
            </div>
        </>
    )
}