import  { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold">Soil Farming Agent</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-green-600">Dashboard</Link>
                <Link to="/soil-details" className="text-gray-600 hover:text-green-600">Soil Details</Link>
                <Link to="/distributors" className="text-gray-600 hover:text-green-600">Distributors</Link>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-green-600">Login</Link>
                <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
 