import { Link } from 'react-router-dom';
import '../style/navbar.css';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className='div1'>
                    <h1>Tic Tac Toe trop styleyyyyy</h1>
                </div>
                <div className='div2'>   
                    <div className="links">
                        <Link to="/">Home</Link>
                    </div>
                    <div className='links'>
                        <Link to="/leaderboard">Le classement</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;