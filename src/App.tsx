import React from 'react';
import './App.css';
import { Header } from './components/1header';
import { About} from './components/3about';
import { Xp} from './components/4xp';
import { Estu} from './components/5estudos';



function App() {
  return (
   <>
   <Header />
   <About />
   <Xp />
   <Estu />
   </>
  );
}

export default App;
