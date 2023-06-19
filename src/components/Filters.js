import FilterGender from "./FilterGender";
import FilterContact from "./FilterContact";
import FilterAge from "./FilterAge";
import { Link } from "react-router-dom";



function Filters({hadleFilterGender, handleFilterContact, handleFilterAge, contactFilter, handleReset}) {
    const handleButton = () => {
   handleReset("all", "");
  };
    
    return (
        <section className="filter">
         
            <form className="filter__form">
                <FilterGender hadleFilterGender={hadleFilterGender}/>
                 <FilterAge hadleFilterAge={handleFilterAge}/>
                <FilterContact handleFilterContact={handleFilterContact}
                contactFilter={contactFilter}/>
            </form>
            <div className="btn">
                 <button 
               className="btn__reset"
               type="reset"
               onClick={handleButton} >Reset
            </button>
             <Link   to="/">
                <button className="btn__return">Go out</button>
             </Link>
            </div>
           
        </section>
    )
}
export default Filters;