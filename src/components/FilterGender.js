function FilterGender({hadleFilterGender}) {

     const handleChange = (ev) => {
        hadleFilterGender(ev.target.value);
     };
     
    return (
         <>
      <label className="form__label " htmlFor="gender">
        Gender:
      </label>
      <select
        className="form__input-text"
        name="gender"
        id="gender"
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="female">Female </option>
        <option value="male">Male </option>
      </select>
    </>
    );
}
export default FilterGender;