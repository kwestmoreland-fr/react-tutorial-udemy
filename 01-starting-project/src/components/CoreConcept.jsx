// function CoreConcept(props) { //normal function structure
export default function CoreConcept({title, description, image}) {  //destructured object
    return ( 
    <li>
      {/* <img src={props.image} alt={props.title} /> */}
      <img src={image} alt={title} />
      {/* <h3>{props.title}</h3> */}
      <h3>{title}</h3>
      {/* <p>{props.description}</p> */}
      <p>{description}</p>
    </li>
    );
}