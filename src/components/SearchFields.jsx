const SearchFields = ({searchValue, setSearchValue}) => {
    return (
      <div className="inputContainer">
        <input
          id="blason"
          type="text"
          value={searchValue}
          placeholder=" "
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <label htmlFor="blason">
          <p>Chercher le blason d'un pays dans la liste</p>
        </label>
      </div>
    );
  };
  
  export default SearchFields;