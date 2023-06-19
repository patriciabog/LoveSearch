

function FilterAge({hadleFilterAge}) {
      const handleChange = (ev) => {
        hadleFilterAge(ev.target.value);
     };

    return (
    <>
    <label className="gender" htmlFor="gender">
        Age:
      </label>
      <select
        className="gender__select"
        name="gender"
        id="age"
        onChange={handleChange}
      >
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