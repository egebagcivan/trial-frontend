import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import BookListPage from './pages/BookListPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashBoardPage';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('access_token');

  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
};

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('access_token');

  return isLoggedIn ? <Navigate to="/dashboard" replace /> : <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        <Route path="/" element={<BookListPage />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        } />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;


