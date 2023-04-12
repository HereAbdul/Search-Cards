 import './search-field.component.css'
const SearchBar =({onChangeHandler })=> { 

    return( 
    <input className="search-box" type="search" placeholder="Search Monsters" onChange={onChangeHandler}/> 
    )
  }

export default SearchBar; 