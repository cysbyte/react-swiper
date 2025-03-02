
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';

function App() {
  return (
    <Router basename="/">
      
      <Suspense fallback={<div className='w-screen h-screen bg-white text-white flex items-center justify-center'></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
