import  { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { SoilDetails as SoilDetailsType } from '../types';

export default function SoilDetails() {
  const [soilTypes, setSoilTypes] = useState<SoilDetailsType[]>([]);

  useEffect(() => {
    const fetchSoilTypes = async () => {
      const snapshot = await getDocs(collection(db, 'soilTypes'));
      setSoilTypes(
        snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as SoilDetailsType[]
      );
    };

    fetchSoilTypes();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Soil Types</h1>
      <div className="grid gap-6">
        {soilTypes.map(soil => (
          <div key={soil.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{soil.type}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Characteristics</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {soil.characteristics.map((char, index) => (
                    <li key={index}>{char}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Suitable Crops</h3>
                <div className="flex flex-wrap gap-2">
                  {soil.suitableCrops.map((crop, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 