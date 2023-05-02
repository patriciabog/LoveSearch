import { Link } from "react-router-dom";

function Contact({ eachContact }) {
  console.log(eachContact);
    return (       
           <Link to={`/contact/${eachContact.id}`}>
              <li className="card">
             <img
              className="card__img"
              //dentro de llaves ponemos la propiedad imagen del objeto
              src={eachContact.image}
              alt="Foto de Francisco Korth"
              title="Foto de Francisco Korth"
            ></img>
             <h4 className="card__title">
                {eachContact.name} {eachContact.lastname}
             </h4>
            <p className="card__description">
                {eachContact.city}
                {eachContact.gender}  
            </p>
              </li>
         </Link>
    );

}
export default Contact;