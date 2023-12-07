
import './App.css';
// import Pagination from './components/Pagination/Pagination';
import Board from './components/Tic-Tac-Toe/Board';



function App() {
  return (
    <div className='flex w-full justify-center items-center my-[10rem] flex-col'>
      <p className='text-4xl font-bold mb-8 ' >  TIC TAC TOE</p>
      <Board />
    </div>
    // <div className='w-full flex justify-center items-center flex-col '>
    //   <p className='text-3xl font-bold mb-6' >Pagination</p>
    //   <Pagination />
    // </div>
  );
}

export default App;
