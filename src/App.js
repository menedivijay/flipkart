import './App.css';
import CompA from './components/CompA';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

function App() {
  const details=[{
    name:"Vijay",
    rollno:"640"
  },
  {
    name:"Bunny",
    rollno:"610"
  }
  ,
  {
    name:"Dan",
    rollno:"650"
  }
  ,
  {
    name:"kiran",
    rollno:"603"
  }
]
  return (
    <>
    <BrowserRouter>
    <Link to="/CompA">Click</Link>
    <Routes>
    <Route path='/CompA' element={<CompA data={details}/>}></Route>
    </Routes>
    </BrowserRouter>


    {/*<CompA data={details}/>*/}
    </>
  );
}

export default App;
