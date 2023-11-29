import logo from './logo.svg';
import './App.css';
import  Productlist  from './Player.js/Productlist';

function App() {
  const data = [
    {id: Math.random(),
  name: "Marcus Rashford",
  team:"team:Manchester United",
  nationality:"nationality:England",
  age:"age:26",
  jerseyNumber:"jerseyNumber:10", 
  pic:"https://th.bing.com/th/id/OIP.hXGM2kv__wiYdDvP9TVxaAHaFj?rs=1&pid=ImgDetMain",
},
{id: Math.random(),
  name:"Dominik Szoboszlai",
  team:"team:Liverpool",
  nationality:"nationality:Hungary",
  age:"age:23",
  jerseyNumber:"jerseyNumber:8",
  pic:"https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/acquiadam/2023-07/dominik-szoboszlai-interview-promo-cover-02072023.jpg?itok=_vMvJau5",
},
{id: Math.random(),
  name:"Jude Bellingham",
  team:"team:Real Madrid",
  nationality:"nationality:England",
  age:"age:20",
  jerseyNumber:"number: 5" ,
  pic:"https://i2-prod.birminghammail.co.uk/incoming/article25678207.ece/ALTERNATES/s1200/0_JS285340725.jpg",
},
{id: Math.random(),
  name:"Bukayo Saka",
  team:"team:Arsenal",
  nationality:"nationality:England",
  age:"age:22",
  jerseyNumber:"jerseyNumber:7",
  pic:"https://globeanswer.com/wp-content/uploads/2021/07/Bukayo-Saka-Biography-and-Net-Worth.jpg",
}

];
  return (
    <div className="App">
      <Productlist list={data}/> 
      
    </div>
  );
}

export default App;
