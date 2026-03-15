import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Members from './pages/Members'; // Added
import Invites from './pages/Invites'; // Added

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="members" element={<Members />} /> {/* Added */}
          <Route path="invites" element={<Invites />} /> {/* Added */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;