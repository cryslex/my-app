export default function Card(props){
    return (
        <span className="card">
                    <h1>{props.title}</h1>
                    <p>{props.advantage}</p>
                    <div className='imageContainer'>
                        <img alt='kartinka ne zagruzilas'
                            src={props.img}
                        ></img>
            </div>
        </span>
    )
}