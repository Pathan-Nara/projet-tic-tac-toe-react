import { useEffect, useState } from 'react';
import '../style/versus.css';
import circle from '../assets/img/circle.webp';
import cross from '../assets/img/cross.webp';


function TicTacToe({mode, username = ''}: {mode: 'ai' | 'player', username?: string}) {
    let first = Math.floor(Math.random() * 2)
    const [tab , setTab] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(first === 0);
    const [winner, setWinner] = useState<boolean | string | null>(null);
    const [draw, setDraw] = useState(false);
    const [score, setScore] = useState({X: 0, O: 0});
    const [showModalWin, setShowModalWin] = useState(false);
    const [showModalLoose, setShowModalLoose] = useState(false);
    // const [log, setLog] = useState(Array(9).fill(null));
    // const [cpt, setCpt] = useState(0);
    // const [refresh, setRefresh] = useState(false);

    // useEffect(() => {
    //     setCpt(prevCpt => prevCpt + 1);                         Je me suis trompé et je me suis lancée dans la variante du jeu et en plus j'avais mal compris la consigne de la variante....
    //     console.log("Turn count: ", cpt);
    //     console.log("Move log: ", log);
    //     if(cpt >= 8 ){
    //         setRefresh(!refresh);
    //         setCpt(prevCpt => 0);
    //     }

    //     if (refresh) {
    //         const removable = log[cpt];
    //         tab[removable] = null;
    //         log[cpt] = null;
    //         console.log(log, "Removing index: ", removable);
    //         if(log[8] === null){
    //             setRefresh(false);
    //         }
    //     }

    //     console.log(refresh)

    // }, [tab]);


    // console.log(first, "First player is: ", isXNext ? 'X' : 'O');

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


    const reset = () => {
        setTab(Array(9).fill(null));
        setIsXNext(Math.floor(Math.random() * 2) === 0);
        setWinner(null);
        setDraw(false);
        setShowModalWin(false);
        setShowModalLoose(false);
    }

    const handleClick = (index: number) => {
        if(tab[index] === null){
            const newTab = tab.slice();
            newTab[index] = isXNext ? 'X' : 'O';
            setTab(newTab);
            setIsXNext(!isXNext);
            // setLog([...log, index]);
            const winner = isWin(newTab);
            const draw = newTab.every(cell => cell !== null);
            if (draw && !winner) {
                setDraw(true);
                setShowModalLoose(true);
            }
            else if (mode === 'ai' && winner) {
                setWinner(winner);
                if (winner === 'O') {
                    setShowModalLoose(true);
                }
                else {
                    reset();
                }
            }
            else if (winner) {
                setWinner(winner);
                setShowModalWin(true);
            } 
        } else {
            return;
        }
    }

    const isWin = (board : (string | null)[]) => {
        for (let i = 0; i < winConditions.length; i++) {
            const [a, b, c] = winConditions[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                if (board[a] === 'X') {
                    setScore(prevScore => ({...prevScore, X: prevScore.X + 1}));
                } else {
                    setScore(prevScore => ({...prevScore, O: prevScore.O + 1}));
                }
                return board[a];
            }
        }
        return null;
    }


    const botPlay = () => {
        const casesVides = tab.map((value, index) => value === null ? index : null).filter(value => value !== null) as number[];
        if (casesVides.length === 0 || winner) {
            return;
        }
        const randomIndex = Math.floor(Math.random() * casesVides.length);
        const caseChoisie = casesVides[randomIndex];
        handleClick(caseChoisie);
    }



    const morpion =
        <>
            <div className='morpion'>
                <div className='line'>
                    <button className='square' id='1' disabled={!!winner || draw} onClick={() => handleClick(0)}>{tab[0] === 'X' && <img src={cross} alt="X" />}{tab[0] === 'O' && <img src={circle} alt="O" />}</button>
                    <button className='square' id='4' disabled={!!winner || draw} onClick={() => handleClick(3)}>{tab[3] === 'X' && <img src={cross} alt="X" />}{tab[3] === 'O' && <img src={circle} alt="O" />}</button>
                    <button className='square' id='7' disabled={!!winner || draw} onClick={() => handleClick(6)}>{tab[6] === 'X' && <img src={cross} alt="X" />}{tab[6] === 'O' && <img src={circle} alt="O" />}</button>
                </div>
                <div className='line'>
                    <button className='square' id='2' disabled={!!winner || draw} onClick={() => handleClick(1)}>{tab[1] === 'X' && <img src={cross} alt="X" />}{tab[1] === 'O' && <img src={circle} alt="O" />}</button>
                    <button className='square' id='5' disabled={!!winner || draw} onClick={() => handleClick(4)}>{tab[4] === 'X' && <img src={cross} alt="X" />}{tab[4] === 'O' && <img src={circle} alt="O" />}</button>
                    <button className='square' id='8' disabled={!!winner || draw} onClick={() => handleClick(7)}>{tab[7] === 'X' && <img src={cross} alt="X" />}{tab[7] === 'O' && <img src={circle} alt="O" />}</button>
                </div>
                <div className='line'>
                    <button className='square' id='3' disabled={!!winner || draw} onClick={() => handleClick(2)}>{tab[2] === 'X' && <img src={cross} alt="X" />}{tab[2] === 'O' && <img src={circle} alt="O" />}</button>
                    <button className='square' id='6' disabled={!!winner || draw} onClick={() => handleClick(5)}>{tab[5] === 'X' && <img src={cross} alt="X" />}{tab[5] === 'O' && <img src={circle} alt="O" />}</button>
                    <button className='square' id='9' disabled={!!winner || draw} onClick={() => handleClick(8)}>{tab[8] === 'X' && <img src={cross} alt="X" />}{tab[8] === 'O' && <img src={circle} alt="O" />}</button>
                </div>
            </div>
        </>


    const modalWin = 
        <>
            <div className="modal">
                <div className="modal-content">
                    <p>{winner === 'X' ? username || 'Joueur 1' : 'Joueur 2'} a gagné !</p>
                    <div className='buttons' style={{display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px'}}>
                        <button className="submit-button button-primary" onClick={reset}>Rejouer</button>
                        <button className="submit-button button-secondary" onClick={() => setShowModalWin(false)}>Fermer</button>
                    </div>
                </div>
            </div>
        </>

    const modalLoose = 
        <>
            <div className="modal">
                <div className="modal-content">
                    <p>{draw ? 'Match nul !' : 'L\'IA a gagné !'}</p>
                    <div className='buttons' style={{display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px'}}>
                        <button className="submit-button button-primary" onClick={reset}>Recommencer</button>
                        <button className="submit-button button-secondary" onClick={() => setShowModalLoose(false)}>Sauvegarder</button>
                        <button className="submit-button button-secondary" onClick={() => setShowModalLoose(false)}>Fermer</button>
                    </div>
                </div>
            </div>
        </>




    if (mode === 'ai') {
        return (
            <>
            <div className='score'>
                <p>Vous avez {score.X} victoires consecutives</p>
            </div>
            {morpion}
            {(isXNext === false && !winner && !draw) && botPlay()}
            
            {/* Modale défaite */}
            {winner === 'O' && showModalLoose && modalLoose}
            
            {/* Modale match nul */}
            {draw && showModalLoose && modalLoose}
            </>
        );
    }

    if (mode === 'player') {
        return (
            <>
            <div className='score'>
                <p>Score : Le joueur 1 (X) a {score.X} points et le joueur 2 (O) a {score.O} points</p>
            </div>
            {morpion}
            {
            (winner || draw) &&
            <div className='winner'>
                {(showModalWin && modalWin)}
                <div className='info'>
                    {draw && <p>Match nul !</p>}
                    <button className="submit-button button-secondary" onClick={reset}>Rejouer</button>
                </div>
            </div>
            }
            </>
        );
    }

}


export default TicTacToe;