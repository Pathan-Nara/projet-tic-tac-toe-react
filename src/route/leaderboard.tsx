import { dataStorage } from "../storage/datastorage";
import '../style/leaderboard.css';
import { HiArrowCircleRight , HiArrowCircleLeft  } from 'react-icons/hi'
import { useState } from "react";


function Leaderboard() {
    const scores = dataStorage.sort();
    const [currentPage, setCurrentPage] = useState(1);
    const scoresPerPage = 10;

    const currentPageScores = scores.slice((currentPage - 1) * scoresPerPage, currentPage * scoresPerPage);

    const next = () => {
        if (currentPage < Math.ceil(scores.length / scoresPerPage)) {
            setCurrentPage(currentPage + 1);
            console.log(currentPage);
            console.log(currentPageScores);
        }
    }

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            console.log(currentPage);
        }
    }



    return (
        <>
        <div className="leaderboard-page">
            <div className="container">
            <div className="leaderboard-header">
                <h1>Leaderboard</h1>
                <div className="button-layout">
                    <a className="prev" onClick={prev}> <HiArrowCircleLeft  color="var(--primary)" size={55} /></a>
                    <a className="next" onClick={next}><HiArrowCircleRight  color="var(--primary)" size={55} /></a>
                </div>
            </div>
            <div className="leaderboard-container">
                <table className="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Rang</th>
                            <th>Pseudo</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageScores.map((score: {username: string, score: number}, index: number) => (
                            <tr key={index}>
                                <td>{(currentPage - 1) * scoresPerPage + index + 1}</td>
                                <td>{score.username}</td>
                                <td>{score.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </>
    )
}



export default Leaderboard;