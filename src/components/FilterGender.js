

function FilterGender({ handleFilterGender, genderFilter }) {

    const handleChange = (ev) => {
        ev.preventDefault();
        handleFilterGender(ev.target.value);
     };

    return (
    <>
      <select
        className="gender__select"
        name="gender"
        id="gender"
        onChange={handleChange}
        value={genderFilter}
       >
        <option selected value="" >Select by Gender 🔻</option>
        <option value="all">All</option>
        <option value="female">Female </option>
        <option value="male">Male </option>
      </select>
    </>
    );
}
export default FilterGender;