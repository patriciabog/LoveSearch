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
     <h2 className='subtitle'>Profile Information</h2>
      <Link className="back"  to="/">Back</Link>
     <li className="contact">
        <img
          className="contact__img"
          //dentro de llaves ponemos la propiedad imagen del objeto
          src={contactFind.image}
          alt="Foto de Francisco Korth"
          title="Foto de Francisco Korth"
        ></img>
        <h4 className="contact__title">
            {contactFind.name} {contactFind.lastname}
         </h4>
         <p className="contact__description">{`Gender: ${contactFind.gender}`}</p>
         <p className="contact__description">{`Country: ${contactFind.country}`}</p>
         <p className="contact__description">{`City: ${contactFind.city}`}</p>
         <p className="contact__description">{`Age: ${contactFind.age}`}</p>
         <p className="contact__description">{`Email: ${contactFind.email}`}</p>
         <p className="contact__description">{`Phone: ${contactFind.phone}`}</p>
       </li>
   
    </>
 );

}
export default ContactDetail;