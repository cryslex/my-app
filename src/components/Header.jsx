import {useState} from 'react'

export default function Header(){
    const [nowTime, setTime] = useState(new Date())
    setInterval(() => {setTime(new Date())}, 1000)

    return (
        <div>
            <header>
                <h3>hello react</h3>
            </header>

            <span>Time: {nowTime.toLocaleTimeString()}</span>
        </div>
    )
  }