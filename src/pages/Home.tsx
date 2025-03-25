import  { ArrowRight, Sprout, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Expert Guide to Soil Management
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the perfect soil for your crops and connect with trusted distributors
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Sprout className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Soil Analysis</h3>
          <p className="text-gray-600 mb-4">
            Get detailed insights about different soil types and their characteristics
          </p>
          <Link to="/soil-details" className="text-green-600 hover:text-green-700 inline-flex items-center">
            Learn more <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
          <p className="text-gray-600 mb-4">
            Connect with soil experts and get personalized recommendations
          </p>
          <Link to="/register" className="text-green-600 hover:text-green-700 inline-flex items-center">
            Join now <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <MapPin className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Find Distributors</h3>
          <p className="text-gray-600 mb-4">
            Locate trusted soil and seed distributors in your area
          </p>
          <Link to="/distributors" className="text-green-600 hover:text-green-700 inline-flex items-center">
            Find dealers <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to optimize your farming?</h2>
        <p className="text-gray-600 mb-6">
          Join our platform to get expert soil management advice and connect with quality distributors.
        </p>
        <Link to="/register" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  );
}
 