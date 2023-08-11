import React from 'react'
function Navbar() {
    return ( 
        <div className="nav">
            <div className="logo">
                <h2>Crispy Kitchen</h2>
            </div>
            <div className="nav-items">
                
                    <span className='home'>Home</span>
                    <span>Story</span>
                    <span>Menu</span>
                    <span>Our Updates</span>
                    <span>Contact</span>
       

            </div>
            <div className="btn">
                <button>Reservation</button>

            </div>
        </div>
     );
}

export default Navbar;