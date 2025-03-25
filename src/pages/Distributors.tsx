import  { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { MapPin, Star } from 'lucide-react';
import { db } from '../lib/firebase';
import type { Distributor } from '../types';

export default function Distributors() {
  const [distributors, setDistributors] = useState<Distributor[]>([]);

  useEffect(() => {
    const fetchDistributors = async () => {
      const snapshot = await getDocs(collection(db, 'distributors'));
      setDistributors(
        snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Distributor[]
      );
    };

    fetchDistributors();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Soil Distributors</h1>
      <div className="grid gap-6">
        {distributors.map(distributor => (
          <div key={distributor.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{distributor.name}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {distributor.location}
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="font-medium">{distributor.rating}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {distributor.soilTypes.map((type, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {type}
                </span>
              ))}
            </div>
            <a
              href={`tel:${distributor.contact}`}
              className="btn btn-primary inline-block"
            >
              Contact Distributor
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
 