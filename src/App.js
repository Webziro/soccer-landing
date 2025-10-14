import React from 'react';
import './App.css';
import cr7Image from './img/cr7.jpg';
import GetstartedButton from './components/Getstarted.Button';
import ExploreButton from './components/Explore.Button';
import WatchButton from './components/Watch.Button';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.css';

//Add fontawesome icons on the stats section

const stats = [
  {icons: "fa-solid fa-trophy", label: "Ballon d'Or Awards", value: 5 },
  {icons: "fa-solid fa-futbol", label: "Career Goals", value: "900+"},
  {icons: "fa-solid fa-trophy", label: "Major Trophies", value: "36+" },
  {icons: "fa-solid fa-users", label: "Clubs played for", value: 5 },
];


export default function RonaldoProfile() {
  return (
    <div style={{ background: '#111', color: 'white', fontFamily: "'Arial Black', sans-serif", minHeight: '100vh', padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
        <div style={{ color: '#b18d70', fontWeight: 'bold', fontSize: 24 }}>CR 7</div>
        <nav>
          <NavBar/>
        </nav>
          <GetstartedButton/>
      </header>

      <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: 500 }}>
          <h1 style={{ fontSize: 80, fontWeight: '900', marginBottom: 0 }}>
            CRISTIANO <span style={{ color: '#b18d70' }}>RONALDO</span>
          </h1>
          <p style={{ maxWidth: 800, marginTop: 10, fontWeight: '500' }}>
            From the streets of Madeira to the grandest stages of football, Ronaldo's journey inspires millions to chase greatness with passion and determination.
          </p>
          <div style={{ marginTop: 20 }}>
          <ExploreButton />
          <WatchButton/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, maxWidth: 1000 }}>
            {stats.map(({ icons, label, value }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <i className={icons} style={{ fontSize: 24, marginBottom: 5 }}></i>
                <div style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 5 }}>{value}</div>
                <div style={{ fontSize: 11, color: '#b18d70' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img
            src={cr7Image} alt="Cristiano Ronaldo"
            style={{ width: 800,  borderRadius: 8, boxShadow: '0 0 30px 10px rgba(98, 92, 92, 0.37)' }}
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}
