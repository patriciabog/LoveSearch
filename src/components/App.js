/* SECCIÓN DE IMPORT */
import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import '../styles/App.scss';
import ListContact from './ListContact';
import Filters from './Filters';
import { Route, Routes } from 'react-router-dom';
import ContactDetail from './ContactDetail';
import Landing from './Landing';




/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
const [contactList, setContactList] = useState([]);
const [genderFilter, setGenderFilter] = useState('all');
const [contactFilter, setContactFilter] = useState('');
const [ageFilter, setAgeFilter] = useState('all');


   /* EFECTOS (código cuando carga la página) */
useEffect(() => {
  getDataApi().then((cleanData) => {
    console.log(cleanData);
    setContactList(cleanData);
  });
}, []);
 

  /* FUNCIONES HANDLER */
const hadleFilterGender = (value) => {
  setGenderFilter(value);
};


const handleFilterContact = (value) => {
  setContactFilter(value)
};

const hadleFilterAge = (value) => {
  setAgeFilter(value);
};
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
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

//reset
 function handleReset(gender, contact, age) {
    setContactFilter(contact);
    setGenderFilter(gender);
    setGenderFilter(age);
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
           hadleFilterGender={hadleFilterGender} 
           handleFilterAge={hadleFilterAge}
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
        <nav className='footer'>
          <ul className="footer__one">
               <li><a href="/">Activities for singles</a></li>
               <li><a href="/app">Contact with them</a></li>
               <li><a href="/app">Find by gender</a></li>
               <li><a href="/app">Find by age</a></li>
               <li><a href="/">Help</a></li>
          </ul>
          <ul className="footer__two">
               <li><a href="/" >Twiter</a></li>
               <li><a href="/" >Instagram</a></li>
               <li><a href="/">Youtube</a></li>
          </ul>
          <ul className="footer-end">
               <li>© Patrica M.V. 2023</li>
               <li>Love❤️Search </li>
          </ul>
        </nav>
      </footer>
  </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
