import React, { useState } from 'react';  
import './index.css';
import Nav from './nav.js';
import item from './items.json';
import ingredient from './ingredient.json';
import { useHistory } from 'react-router-dom';

function Page() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [viewIngredients, setViewIngredients] = useState(false); // Track if viewing ingredients
    const [selectedRecipe, setSelectedRecipe] = useState(null); // Track the selected recipe for ingredient view
    
    function show(e) {
        const pname = e.target.getAttribute("pname");

        const ing = item.data.find(e => e.name === pname);
        if (ing) {
            const data = ingredient.ing.filter(e1 => e1.name === ing.name).map(e1 => (
                <>
                    <tr><td>{e1.ing1}</td></tr>
                    <tr><td>{e1.ing2}</td></tr>
                    <tr><td>{e1.ing3}</td></tr>
                    <tr><td>{e1.ing4}</td></tr>
                    <tr><td>{e1.ing5}</td></tr>
                    <tr><td>{e1.ing6}</td></tr>
                    <tr><td>{e1.ing7}</td></tr>
                    <tr><td>{e1.ing8}</td></tr>
                    <tr><td>{e1.ing9}</td></tr>
                    <tr><td>{e1.ing10}</td></tr>
                    <tr><td>{e1.ing12}</td></tr>
                    <tr><td>{e1.ing13}</td></tr>
                </>
            ));
            setSelectedRecipe(
                <div className="ingredient-details">
                    <button onClick={() => setViewIngredients(false)} className='back-button'>Back</button>
                    <div className='detail'>
                        <h1>{ing.name}</h1>
                        <img src={require(`${ing.photo}`)} style={{ width: '270px', height: '160px' }} />
                        <h2>{ing.description}</h2>
                        <button className='recipe'>
                            <a href={ing.rurl} >Recipe from</a>
                        </button>
                    </div>
                    <div className='ing'>
                        <table>
                            <tr><td><h2>Ingredients for {ing.name}</h2></td></tr>
                            <tr><td>{data}</td></tr>
                        </table>
                    </div>
                </div>
            );
            setViewIngredients(true); // Switch to ingredient view
        }
    }

    function handleClick() {
        const searchTerm = search.toLowerCase().trim();

        const filteredItems = item.data.filter(e => 
            e.cat.toLowerCase().includes(searchTerm)
        ).map(e => (
            <div className='result' key={e.name}>
                <div className="result-box">
                    <div className='image'>
                        <img src={require(`${e.photo}`)} style={{ width: '270px', height: '160px' }} />
                    </div>
                    <h2>{e.name}</h2>
                    <div className='description'>
                        <p>{e.description}</p>
                    </div>
                    <div className='ingredient-recipe'>
                        <input type='button' value='Show Ingredients' className='show-ingridient' pname={e.name} onClick={show} />
                        <button className='recipe'>
                            <a href={e.rurl}>Recipe from</a>
                        </button>
                    </div>
                </div>
            </div>
        ));

        setResults(filteredItems);
    }

    return (
        <>

        <div   className= 'page-nav'>
        <Nav/>
            </div>
            <br /><br /><br />
            <div className='heading'>
                <h1>Search Recipes</h1>
                <div className='search-bar'>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for a category"
                        className='search-box'
                    />
                    <button onClick={handleClick} className='search-icon'>
                        <img
                            src={require('./search-icon.jpeg')}
                            alt="Search Icon"
                            style={{ width: '30px', height: '30px' }}
                        />
                    </button>
                </div>
            </div>

            <div className="results-container">
                {viewIngredients ? selectedRecipe : (results.length > 0 ? results : <p>No results found</p>)}
            </div>
        </>
    );
}

export default Page;
