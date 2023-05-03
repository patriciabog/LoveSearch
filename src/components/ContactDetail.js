import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ContactDetail({ contactFiltered }) {
 const { pathname } = useLocation()
   const dataUrl = matchPath('/contact/:id', pathname);
   const contactId = dataUrl !== null ? dataUrl.params.id : null;

   const contactFind = contactFiltered.find((eachContact) => eachContact.id === contactId
   );

 return (
    <>
    <h2>Profile Information</h2>
   <li className="card">
        <img
          className="card__img"
          //dentro de llaves ponemos la propiedad imagen del objeto
          src={contactFind.image}
          alt="Foto de Francisco Korth"
          title="Foto de Francisco Korth"
        ></img>
        <h4 class="card__title">
          {contactFind.name} {contactFind.lastname}
        </h4>
        <p className="card__description">{`Gender: ${contactFind.gender}`}</p>
        <p className="card__description">{`Country: ${contactFind.country}`}</p>
        <p className="card__description">{`City: ${contactFind.city}`}</p>
        <p className="card__description">{`Age: ${contactFind.age}`}</p>
        <p className="card__description">{`Email: ${contactFind.email}`}</p>
        <p className="card__description">{`Phone: ${contactFind.phone}`}</p>
    </li>
    <Link className="link"  to="/">Back</Link>
    </>
 );

}
export default ContactDetail;