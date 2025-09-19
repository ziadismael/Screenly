import './App.css'
import Search from './components/Search';
import { useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState();

  return <main>
    <div className='pattern' />

    <div className='wrapper text-3xl'>
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    </div>
  </main>
}

export default App;