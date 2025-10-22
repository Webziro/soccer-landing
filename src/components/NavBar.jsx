import React from 'react';

function NavBar(){
    const handleNavClick = (e, item) => {
        e.preventDefault();
        console.log(`Navigation clicked: ${item}`);
    };

    return(
        <> 
        {['Home', 'Career', 'Achievements', 'Stats', 'Gallery'].map((item) => (
            <a 
                key={item} 
                href="#" 
                onClick={(e) => handleNavClick(e, item)}
                style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}
            >
                {item}
            </a>
          ))} 
        </>
    )
}
export default NavBar;
