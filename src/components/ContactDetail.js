import { Route, Routes, matchPath, useLocation } from 'react-router-dom';

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
        <p className="card__description">
          {contactFind.city} / {contactFind.gender}
        </p>
    
    </li>
    </>
 );

}
export default ContactDetail;