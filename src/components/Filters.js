import FilterGender from "./FilterGender";
import FilterContact from "./FilterContact";


function Filters({hadleFilterGender, handleFilterContact, contactFilter, handleReset}) {
    const handleButton = () => {
   handleReset("all", "");
  };
    
    return (
        <section className="filter">
            <form className="filter__form">
                <FilterGender hadleFilterGender={hadleFilterGender}/>
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