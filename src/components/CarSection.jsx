import Car from "./Car"
import Header from "./Header"
import { data } from "./cars"

export default function CarSection(){
    return (
        <>
            <Header></Header>
            <ul>
                {data.map((car) => (
                <Car key={car.title} {...car}/>
                ))}

            </ul>
        </>
    )
}