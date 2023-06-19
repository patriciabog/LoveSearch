import FilterGender from "./FilterGender";
import FilterContact from "./FilterContact";
import FilterAge from "./FilterAge";



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
            <button 
               className="filter__reset"
               type="reset"
               onClick={handleButton} >Reset
            </button>
        </section>
    )
}
export default Filters;