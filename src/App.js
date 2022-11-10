
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Detail/>} path="/products/:id" />
        <Route element={<Update/>} path="/products/update/:id"/>
      </Routes>
    </div>
  );
}

export default App;


