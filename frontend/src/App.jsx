import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from "./pages/Home.jsx";
import CreatePage from './pages/CreatePage.jsx';
import NoteDetail from './pages/NoteDetail.jsx';

function App() {
  return (
    <>
      <div className="relative h-full w-full">
        <div className='absolute inset-0 -z-10 h-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]' />

        <Router>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<CreatePage />} />
            <Route path='/note/:id' element={<NoteDetail />} />
          </Routes>

        </Router>
      </div>
    </>
  );
}

export default App;
