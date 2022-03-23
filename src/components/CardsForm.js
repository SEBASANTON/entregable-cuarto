import axios from 'axios';
import React from 'react';
import {useEffect, useState} from 'react';

const CardsForm = ({getCards, cardSelected, setCardSelected}) => {
    
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ birthday, setBirthday ] = useState("");


    useEffect(()=>{
        if(cardSelected){
            setFirstName(cardSelected.first_name);
            setLastName(cardSelected.last_name);
            setEmail(cardSelected.email);
            setPassword(cardSelected.password);
            setBirthday(cardSelected.birthday);
        }
    },[cardSelected])

    console.log(cardSelected)


    const submit = e =>{
        e.preventDefault();
        
        const card = {
            first_name: firstName,
            last_name: lastName,
            email:email,
            password: password,
            birthday: birthday,
        }

        if(cardSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${cardSelected.id}/`, card)
                .then(() => {
                    getCards()
                    setCardSelected(null)
                    reset();  
                });
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/', card)
                .then(() => {
                    getCards();
                    reset();
                });
        }
    }

    const reset = () =>{
        setCardSelected(null);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthday("");
    }

    return (
        <form onSubmit={submit} className="formulario">
            <div className="input-container">
                <h2>New User</h2>
                <label htmlFor="firstName"><i className="fa-solid fa-user"></i> </label>
                <input 
                    type="text"
                    onChange={e => setFirstName(e.target.value)} 
                    value={firstName}
                    placeholder=" First name ..."
                />
            </div>
            <div className="input-container">
                <label htmlFor="lastName"><i className="fa-solid fa-user-plus"></i> </label>
                <input 
                    type="text"
                    onChange={e => setLastName(e.target.value)} 
                    value={lastName}
                    placeholder=" Last name ..."

                />
            </div>
            <div className="input-container">
                <label htmlFor="email"><i className="fa-solid fa-envelope"></i> </label>
                <input 
                    type="email"
                    onChange={e => setEmail(e.target.value)} 
                    value={email}
                    placeholder=" Email ..."
                />
            </div>
            <div className="input-container">
                <label htmlFor="password"><i className="fa-solid fa-lock"></i> </label>
                <input 
                    type="password"
                    onChange={e => setPassword(e.target.value)} 
                    value={password}
                    placeholder=" Password ..."
                />
            </div>
            <div className="input-container">
                <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i> </label>
                <input 
                    type="date"
                    onChange={e => setBirthday(e.target.value)} 
                    value={birthday}
                />
            </div>
            <button className="submit">Submit</button>
        </form>
    );
};

export default CardsForm;