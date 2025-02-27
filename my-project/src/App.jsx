import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './screens/Navbar/Navbar';
import Home from './screens/Home/Home';
import Dasboard from './screens/Dashboard/Dashboard';
import Profile from './screens/Profile/Profile';
import Setting from './screens/Settings/Setting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
