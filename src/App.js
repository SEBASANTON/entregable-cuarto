import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import CardsList from './components/CardsList';
import CardsForm from './components/CardsForm';
import './style.css'

function App() {

  const [cards, setCards] = useState([]);
  const [cardSelected, setCardSelected ] = useState(null)

  useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setCards(res.data))
  },[])

  const getCards = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setCards(res.data))
  }

  const removeCard = id =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(res => getCards());
  }


  return (
    <div className="App">
      <div className="cards-form">
      <CardsList cards={cards} setCardSelected={setCardSelected} removeCard={removeCard}/>
      </div>
      <div className="cards-list">
      <CardsForm getCards={getCards} cardSelected={cardSelected} setCardSelected={setCardSelected}/>
      </div>

    </div>
  );
}

export default App;
