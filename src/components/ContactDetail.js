import { matchPath, useLocation } from 'react-router-dom';
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
        <section className='contact2'>
        <h4 className="contact2__title">
            {contactFind.name} {contactFind.lastname}
         </h4>
         <p className="contact2__description">{`Gender: ${contactFind.gender}`}</p>
         <p className="contact2__description">{`Country: ${contactFind.country}`}</p>
         <p className="contact2__description">{`City: ${contactFind.city}`}</p>
         <p className="contact2__description">{`Age: ${contactFind.age}`}</p>
         <p className="contact2__description">{`Email: ${contactFind.email}`}</p>
         <p className="contact2__description">{`Phone: ${contactFind.phone}`}</p>
         </section>
       </li>
   
    </>
 );

}
export default ContactDetail;