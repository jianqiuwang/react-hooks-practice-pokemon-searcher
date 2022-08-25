import React,{useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch]=useState("")
  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then(resp=>resp.json())
    .then(pokemons=>setPokemons(pokemons))
  },[])

  function handleOnChange(e){
     setSearch(e.target.value)
  }
  const displaySearch=pokemons.filter((pokemon)=>pokemon.name.toLowerCase().includes(search.toLowerCase()))

  function submitNewCard(newCard){
     setPokemons([...pokemons, newCard])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm submitNewCard={submitNewCard}/>
      <br />
      <Search pokemons={pokemons} handleOnChange={handleOnChange}/>
      <br />
      <PokemonCollection pokemons={displaySearch}/>
    </Container>
  );
}

export default PokemonPage;
