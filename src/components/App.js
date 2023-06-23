/*  IMPORT SECTION*/
import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import '../styles/App.scss';
import ListContact from './ListContact';
import Filters from './Filters';
import { Route, Routes } from 'react-router-dom';
import ContactDetail from './ContactDetail';
import Landing from './Landing';
import imgFooter from '../images/imgFooter.png';

/* COMPONENT SECCTION */
function App() {
  /* VARIABLES ESTATE (DATA) */
const [contactList, setContactList] = useState([]);
const [genderFilter, setGenderFilter] = useState('');
const [ageFilter, setAgeFilter] = useState('');
const [contactFilter, setContactFilter] = useState('');


   /* EFECTS (code when load the page) */
useEffect(() => {
  getDataApi().then((cleanData) => {
   // console.log(cleanData);
    setContactList(cleanData);
  });
}, []);
 
  /* HANDLER FUNCTION */
const handleFilterGender = (value) => {
  setGenderFilter(value);
};
const handleFilterAge = (value) => {
  setAgeFilter(value);
}; 

const handleFilterContact = (value) => {
  setContactFilter(value)
};

  /* FUNCTIONS AND VARIABLES  TO PAINT HTML */
  const contactFiltered = contactList
  .filter((eachContact) => eachContact.name.toLocaleLowerCase().includes(contactFilter.toLocaleLowerCase())) 
  
  .filter((eachContact) => {
   /*if (genderFilter === 'all') {
    return true;
   }else {
    return genderFilter === eachContact.gender;
   }
   */
   return genderFilter === "all" ? true : eachContact.gender === genderFilter;
  })

  .filter((eachContact) => {
      if (ageFilter === 'all') {
        return true;
      } else if (ageFilter === '20') {
        return eachContact.age >= 20 && eachContact.age < 30;
      } else if (ageFilter === '30') {
        return eachContact.age >= 30 && eachContact.age < 40;
      } else if (ageFilter === '40') {
        return eachContact.age >= 40 && eachContact.age < 50;
      } else if (ageFilter === '50') {
        return eachContact.age >= 50;
      } else if (ageFilter === '60') {
        return eachContact.age >= 60;
      } else {
        return false;
      }
   });

//Reset
 function handleReset(gender, age, contact) {
    setGenderFilter(gender);
    setAgeFilter(age);
    setContactFilter(contact);
  } 

  /* HTML */
  return (
  <div className="main">
    <h1 className='title'>Find people that can match with you!
   <i className='bx bx-heart heart'></i>
   </h1>
      
       <main>
       <Routes>
          <Route path="/" element={<Landing />} />
      
          <Route 
          path='/app' 
          element={ 
          <>
           <Filters 
           handleFilterGender={handleFilterGender} genderFilter={genderFilter}
           handleFilterAge={handleFilterAge} ageFilter={ageFilter}
           contactFilter={contactFilter}
           handleFilterContact={handleFilterContact}
           handleReset={handleReset}
           />
           <ListContact contactList={contactFiltered} />
          </>
        }></Route>
          <Route 
           path='/contact/:id' 
           element={<ContactDetail 
           contactFiltered={contactFiltered}
          />} />
        </Routes>
       
      </main>
      <footer>
        <div className='box-footer'>
          <h3 className='box-footer__title'>Recommended by singles</h3>
            <img src={imgFooter} alt="img footer" className='box-footer__img' />
        </div>
        <nav className='footer'>
          <ul className="footer__one">
               <li><a href="/" className='footer__one__link'>Activities for singles</a></li>
               <li><a href="/app" className='footer__one__link'>Contact with them</a></li>
               <li><a href="/app" className='footer__one__link'>Find by gender</a></li>
               <li><a href="/app" className='footer__one__link'>Find by age</a></li>
               <li><a href="/" className='footer__one__link'>Help</a></li>
          </ul>
          <ul className="footer__two">
               <li><a href="/" className='footer__two__link2'>Twiter <i className='bx bxl-twitter footer__two__link2__iconT'></i></a></li>
               <li><a href="/" className='footer__two__link2' >Instagram <i className='bx bxl-instagram-alt footer__two__link2__iconI'></i></a></li>
               <li><a href="/" className='footer__two__link2'>Youtube <i className='bx bxl-youtube footer__two__link2__iconY'></i></a></li>
          </ul>
          <ul className="footer__end">
               <li>Love❤️Search </li>
               <li>© Patrica M.V. 2023</li>
          </ul>
        </nav>
      </footer>
  </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
