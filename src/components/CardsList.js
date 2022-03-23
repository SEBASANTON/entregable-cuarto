import React from 'react';

const CardsList = ({cards, setCardSelected, removeCard}) => {
    return (
        <ul>
            {
                cards.map(card => (
                    <li key={card.id}>
                        <div>
                        <h3>{card.first_name} {card.last_name}</h3>
                        <p>{card.email}</p>
                        <p>{card.birthday}</p>
                        </div>
                        <div className="botones">
                        <p><button onClick={() => setCardSelected(card)}><i className="fa-solid fa-pencil"></i></button></p>
                        <p><button className="red" onClick={() => removeCard(card.id)}><i className="fa-solid fa-trash" ></i></button></p>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default CardsList;