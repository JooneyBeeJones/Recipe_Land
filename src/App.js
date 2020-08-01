import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const api = process.env.REACT_APP_API_KEY;
  const url = `https://api.spoonacular.com/recipes/search?apiKey=${api}&query=${query}`;
  const imageUri = "https://spoonacular.com/recipeImages/";


  const getRecipe = async () => {
    const response = await fetch(url, {
      method: "GET",
      Headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    setRecipe(data.results);
    console.log(data.results);
  }

  useEffect(() => {
    getRecipe();
  }, [query])

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }


  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipe">
        {recipe.map(recipe =>(
          <Recipe 
            title={recipe.title} 
            image={imageUri + recipe.image}
            link={recipe.sourceUrl}
            key={recipe.id}
          />
        ))}   
      </div>   
    </div>
  );
}

export default App;
