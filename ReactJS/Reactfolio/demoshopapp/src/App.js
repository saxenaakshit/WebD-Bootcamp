import logo from './logo.svg';
import './App.css';
import Item from './components/item'
import ItemDate from './components/itemDate';

function App() {
  const specif=1900;
  const response=[
    {
      day:"24",
      month:"dec",
      year:"1982"
    },
    {
      day:"25",
      month:"nov",
      year:"1999"
    }
  ];
  return (
    
    <div>
    
         <Item namo="surf-excel"></Item>
         <ItemDate day="23" month="june" year={specif}> hello am i visible</ItemDate>

         <Item namo="nirma"></Item>
         <ItemDate day={response[0].day} month={response[1].month} year={specif}></ItemDate>

         <Item namo="555"></Item>
         <ItemDate day="23" month="august" year={specif}></ItemDate>

       <div className="App">
       Hello guys
       </div>

    </div>

  );
}

export default App;
