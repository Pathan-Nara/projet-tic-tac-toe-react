import '../style/versus.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Versus() {
    const { vs } = useParams();
    const [username, setUsername] = useState('')
    const [showModal, setShowModal] = useState(vs === 'player' ? false : true)
    const [inputValue, setInputValue] = useState('')
    const [board, setBoard] = useState(Array(9).fill(null))
    

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
                <button className="submit-button" onClick={handleSubmit}>Valider</button>
            </div>
        </div>
    </>





    return (
        <>
            {showModal && usernameModal}
            <div className="versus-container">
                <div className='text'>
                    {username && <p>Bienvenue {username} !</p>}
                    <h1>Mode 1v1</h1>
                    <h1> Contre {vs === 'player' ? 'un Joueur' : 'l\'IA'}</h1>
                </div>
                <div className='morpion'>
                    <div className='line'>
                        <div className='square' id='1'>1</div>
                        <div className='square' id='2'>4</div>
                        <div className='square' id='3'>7</div>
                    </div>
                    <div className='line'>
                        <div className='square' id='4'>2</div>
                        <div className='square' id='5'>5</div>
                        <div className='square' id='6'>8</div>
                    </div>
                    <div className='line'>
                        <div className='square' id='7'>3</div>
                        <div className='square' id='8'>6</div>
                        <div className='square' id='9'>9</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Versus