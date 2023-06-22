

function FilterGender({hadleFilterGender}) {

     const handleChange = (ev) => {
        hadleFilterGender(ev.target.value);
     };
     
    return (
    <>
      <select
        className="gender__select"
        name="gender"
        id="gender"
        onChange={handleChange}
        value="default"
       >
        <option value="default">Select by Gender</option>
        <option value="all">All</option>
        <option value="female">Female </option>
        <option value="male">Male </option>
      </select>
    </>
    );
}
export default FilterGender;