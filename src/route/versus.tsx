import '../style/versus.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import TicTacToe from '../components/tictactoe';

function Versus() {
    const { vs } = useParams();
    const [username, setUsername] = useState('')
    const [showModal, setShowModal] = useState(vs === 'ai' ? true : false)
    const [inputValue, setInputValue] = useState('')
    

    const handleSubmit = () => {
        if (inputValue.trim()) {
            setUsername(inputValue)
            setShowModal(false)
        }
    }

    const usernameModal = 
    <>
        <div className="modal">
            <div className="modal-content">
                <h2>Entrez votre pseudo</h2>
                <input 
                    type="text" 
                    placeholder="Username" 
                    maxLength={15}
                    value={inputValue}
                    onChange={(e) => { setInputValue(e.target.value); console.log(e.target.value); }}
                />
                <button className="submit-button button-secondary" onClick={handleSubmit}>Valider</button>
            </div>
        </div>
    </>





    return (
        <>
            {showModal && usernameModal}
            <div className="versus-container">
                <div className='text'>
                    {username && <p>Bienvenue {username} !</p>}
                    <h1> {vs === '3coups' ? 'Mode 3 Coups' : 'Mode 1v1'} </h1>
                    <h1> Contre {vs === 'ai' ? 'l\'IA' : 'un Joueur'}</h1>
                </div>


                {(vs === 'player') && (
                    <TicTacToe mode={vs}/>
                )}

                {(vs === '3coups') && (
                    <TicTacToe mode={vs} />
                )}
                
                {(vs === 'ai' && !showModal) && (
                    <TicTacToe mode={vs} username={username} />
                )}

            </div>
        </>
    )
}

export default Versus