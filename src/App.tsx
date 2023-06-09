import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookListPage from './pages/BookListPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<BookListPage />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
