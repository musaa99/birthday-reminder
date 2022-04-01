import './App.css';
import data from './data';
import React, { useState } from 'react'
import List from './list';


function App() {

  const [people, setPeople] = useState(data)
  return (
   <main className='App'>
     <section>
       <h3> {people.length} Birthday today</h3>
       <List people={people}/>
       <button onClick={()=> setPeople([])}>
        clear all
       </button>
     </section>
   </main>
  );
}

export default App;
