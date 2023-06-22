

function FilterAge({hadleFilterAge, ageFilter}) {
      const handleChange = (ev) => {
        hadleFilterAge(ev.target.value);
     };

    return (
    <>
         <select
        className="age__select"
        name="age"
        id="age"
        onChange={handleChange}
        value={ageFilter}
      >
        <option className="default">Select by Age</option>
        <option value="all">All</option>
        <option value="20">20+ </option>
        <option value="30">30+ </option>
        <option value="40">40+ </option>
        <option value="50">50+ </option>
        <option value="50">60+ </option>
      </select>
    
    </>
    )
};
export default FilterAge;