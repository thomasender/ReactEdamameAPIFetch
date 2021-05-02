import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './components/Recipe';
import Header from './components/Header';

const App = () => {

  const APP_ID = '0c831974';
  const APP_KEY = '1e4cf6249eb640ffbd8bf6d711a03e4b';
 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

    useEffect( ()  => {
      getRecipes();
    }, [query]);
  
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}
        `);
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <Header 
        title="Edamame API Search" 
        description="Find recipes for your favorite meals!"
      />
      <form 
      onSubmit={getSearch}
      className="search-form"
      >
        <input 
          type="text" 
          className="search-bar" 
          value={search} 
          onChange={updateSearch}/>
        <button  
          type="submit" 
          className="search-button">SEARCH 
          </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>( 
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
