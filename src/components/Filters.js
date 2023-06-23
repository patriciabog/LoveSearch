import FilterGender from "./FilterGender";
import FilterContact from "./FilterContact";
import FilterAge from "./FilterAge";
import { Link } from "react-router-dom";


function Filters({handleFilterGender, handleFilterContact, handleFilterAge, contactFilter, handleReset, ageFilter, genderFilter}) {

    const handleButton = (ev) => {
    ev.preventDefault();
     handleReset("", "", "");
   
  };
    
    return (
        <section className="filter">
         
            <form className="filter__form">
                <div className="filter__form__box">
                    <div className="filter__form__box__select">
                        <FilterGender handleFilterGender={handleFilterGender} handleReset={handleReset} genderFilter={genderFilter} />
                        <FilterAge handleFilterAge={handleFilterAge} handleReset={handleReset} ageFilter={ageFilter}/>
                    </div>
                    <div   className="filter__form__box__contact">
                        <FilterContact handleFilterContact={handleFilterContact}
                        contactFilter={contactFilter} handleReset={handleReset}/>
                    </div>
                        
                </div>
                
                
            </form>
            <div className="btn">
                 <button 
               className="btn__reset"
               type="reset"
               onClick={handleButton} >Reset
            </button>
             <Link   to="/">
                <button 
                className="btn__return">Back</button>
             </Link>
            </div>
           
        </section>
    )
}
export default Filters;