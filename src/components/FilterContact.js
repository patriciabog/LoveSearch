function FilterContact({contactFilter, handleFilterContact}) {

     const handleInput = (ev) => {
    handleFilterContact(ev.target.value);
   }

    return (
         <section className="input">
           <label className="input__text" htmlFor="name">Search by name:</label>
          <input 
            className="input__search"
            type="text"
            name="name"
            id="name" 
            placeholder="Francisco"
            onInput={handleInput}
            value={contactFilter}
          />
        </section>
    )
};
export default FilterContact;