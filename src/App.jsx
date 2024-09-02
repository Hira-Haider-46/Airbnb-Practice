import React from 'react';
import './App.css';
import Navbar from './main-components/Navbar';
import Header from './main-components/Header';
import Card from './common-components/Card';
import data from "../data.js"

export default function App() {
    const cards = data.map(item => {
        return <Card key={item.id} item={item} />;
    });

    return (
        <div>
            <Navbar />
            <Header />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    );
}

// import star from './images/star.png';
// import img1 from './images/img1.png';
// import img2 from './images/img2.png';
// import img3 from './images/img3.png';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Header />
//       <div className='cards-container'>
//         <Card 
//           cardImg={img1}
//           starImg={star}
//           rating='5.0'
//           bracketValue='6'
//           description='Life Lessons with Katie Zaferes'
//           price='136'
//         />
//         <Card 
//           cardImg={img2}
//           starImg={star}
//           rating='5.0'
//           bracketValue='30'
//           description='Learn wedding photography'
//           price='125'
//         />
//         <Card 
//           cardImg={img3}
//           starImg={star}
//           rating='4.8'
//           bracketValue='2'
//           description='Group Mountain Bikin'
//           price='50'
//         />
//       </div>
//     </>
//   );
// }

// export default App;