export  interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

export interface SoilDetails {
  id: string;
  type: string;
  characteristics: string[];
  suitableCrops: string[];
  maintainanceGuide: string;
  createdAt: Date;
}

export interface Distributor {
  id: string;
  name: string;
  location: string;
  contact: string;
  soilTypes: string[];
  rating: number;
  createdAt: Date;
}
 