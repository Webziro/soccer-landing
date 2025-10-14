function NavBar(){
    return(
        <> 
        {['Home', 'Career', 'Achievements', 'Stats', 'Gallery'].map((item) => (
            <a key={item} href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>{item}</a>
          ))} 
        </>
    )
}
export default NavBar; 