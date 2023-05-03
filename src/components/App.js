/* SECCIÓN DE IMPORT */
import { useEffect, useState, useLocation } from 'react';
import getDataApi from '../services/api';
import '../styles/App.scss';
import ListContact from './ListContact';
import Filters from './Filters';
import { Route, Routes, matchPath } from 'react-router-dom';
import ContactDetail from './ContactDetail';




/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
const [contactList, setContactList] = useState([]);
const [genderFilter, setGenderFilter] = useState('all');
const [contactFilter, setContactFilter] = useState('');


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

//reset
 const handleReset = (gender, contact) => {
    setContactFilter (contact);
    setGenderFilter (gender);
   }; 



  /* HTML */
  return (
  <div className="main">
    <h1 className='title'>Find people that can match with you!</h1>

       <main>
       <Routes>
         
          <Route 
          path='/' 
          element={ 
          <>
           <Filters 
           hadleFilterGender={hadleFilterGender} 
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
       <footer>
           <span className='copyright'>ⒸPatricia Montes de oca</span>
      </footer>
      </main>
  </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
