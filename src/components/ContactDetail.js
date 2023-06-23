import { matchPath, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function ContactDetail({ contactFiltered }) {
   const [isClicked, setIsClicked] = useState(false);
 const { pathname } = useLocation()
   const dataUrl = matchPath('/contact/:id', pathname);
   const contactId = dataUrl !== null ? dataUrl.params.id : null;

   const contactFind = contactFiltered.find((eachContact) => eachContact.id === contactId
   );
      const handleClick = () => {
    setIsClicked(!isClicked);
  };

 return (
    <>
     <h2 className='subtitle'>Profile Information</h2>
      <Link className="back"  to="/app"><i className='bx bx-left-arrow-alt back__icon'></i> </Link>
     <li className="contact">
         <i className={`bx ${isClicked ? 'bxs-heart' : 'bx-heart'}`}  onClick={handleClick}></i>
        <img
          className="contact__img"
          //inside braces we put the image property of the object
          src={contactFind.image}
          alt=""
          title=""
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