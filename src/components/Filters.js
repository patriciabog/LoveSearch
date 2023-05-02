import FilterGender from "./FilterGender";
import FilterContact from "./FilterContact";

function Filters({hadleFilterGender, handleFilterContact, contactFilter}) {
    
    return (
        <section className="filter">
            <form action="">
                <FilterGender hadleFilterGender={hadleFilterGender}/>
                <FilterContact handleFilterContact={handleFilterContact}
                contactFilter={contactFilter}/>
            </form>
        </section>
    )
}
export default Filters;