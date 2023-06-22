import FilterGender from "./FilterGender";
import FilterContact from "./FilterContact";
import FilterAge from "./FilterAge";
import { Link } from "react-router-dom";



function Filters({hadleFilterGender, handleFilterContact, genderFilter, ageFilter, handleFilterAge, contactFilter, handleReset}) {
    const handleButton = () => {
   handleReset("all", "all", "");

    
  };
    
    return (
        <section className="filter">
         
            <form className="filter__form">
                <div className="filter__form__box">
                    <div className="filter__form__box__select">
                        <FilterGender hadleFilterGender={hadleFilterGender} genderFilter={genderFilter}/>
                        <FilterAge hadleFilterAge={handleFilterAge} ageFilter={ageFilter}/>
                    </div>
                    <FilterContact handleFilterContact={handleFilterContact}
                    contactFilter={contactFilter}/>
                </div>
                
                
            </form>
            <div className="btn">
                 <button 
               className="btn__reset"
               type="reset"
               onClick={handleButton} >Reset
            </button>
             <Link   to="/">
                <button className="btn__return">Back</button>
             </Link>
            </div>
           
        </section>
    )
}
export default Filters;