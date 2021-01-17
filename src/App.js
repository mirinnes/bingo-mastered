import Bingo from './layout/Bingo';
import './App.scss';
import { BingoState } from './context/BingoState';

function App() {
  return (
    <BingoState>
      <div className='App'>
        <Bingo />
      </div>
    </BingoState>
  );
}

export default App;
