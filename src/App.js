import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-box/search-field.component";
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  
  const filterMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  })
  return (
    <div className="App">
      <h1 className="heading">Monsters Rolodex</h1>
      <SearchBar onChangeHandler={onSearchChange} />
      <CardList monsters={filterMonsters} />
    </div>
  );
}

export default App;
