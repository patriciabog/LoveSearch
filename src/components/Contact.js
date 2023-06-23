import { Link } from "react-router-dom";


function Contact({ eachContact }) {
  
  console.log(eachContact);

   
    return (       
           <Link to={`/contact/${eachContact.id}`}>
              <li className="card">
                
             <img
              className="card__img"
              src={eachContact.image}
              alt=""
              title=""
            ></img>
             <h4 className="card__title">
                {eachContact.name} {eachContact.lastname}
             </h4>
            <p className="card__desc">
                {eachContact.country} 
            </p>
            <p className="card__desc">
              {eachContact.gender} 
            </p>
           
              </li>
         </Link>
    );

}
export default Contact;