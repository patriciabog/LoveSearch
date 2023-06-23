function FilterContact({contactFilter, handleFilterContact}) {

     const handleInput = (ev) => {
    handleFilterContact(ev.target.value);
   }

    return (
         <section className="input">
           <label className="input__text" htmlFor="name"> Search by name:</label>
           <div>
             <label className="input__preIcon" htmlFor="name"><i className='bx bx-search-alt-2 input__icon__icon'></i></label>
          <input 
            className="input__search"
            type="text"
            name="name"
            id="name" 
            placeholder=" Isabelle"
            onInput={handleInput}
            value={contactFilter}
          />
           </div>
          
        </section>
    )
};
export default FilterContact;