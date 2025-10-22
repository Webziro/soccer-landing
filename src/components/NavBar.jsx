import React from 'react';

function NavBar(){
    const handleNavClick = (e, item) => {
        // Prevent the default anchor behavior which often scrolls to the top of the page
        e.preventDefault();
        
        // In a real application, you would add logic here to:
        // 1. Scroll the user to the corresponding section (e.g., using a ref or ID).
        // 2. Change the application state/route.
        console.log(`Navigation clicked: ${item}`);
    };

    return(
        <> 
        {['Home', 'Career', 'Achievements', 'Stats', 'Gallery'].map((item) => (
            <a 
                key={item} 
                href="#" // Use '#' as a placeholder, but prevent default jump
                onClick={(e) => handleNavClick(e, item)} // Add click handler
                style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}
            >
                {item}
            </a>
          ))} 
        </>
    )
}
export default NavBar;
