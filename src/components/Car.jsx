export default function Car(props){
  return (
  <li>
    <p>
      <strong>{props.title}</strong> {props.description}
    </p>
  </li>
  )
}