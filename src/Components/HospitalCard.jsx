import React from 'react';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HospitalCard = ({ hospital }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/api/map/${hospital.id}`); // Navigates to the map page with hospital ID
  };

  return (
    <div className="flex flex-wrap justify-center items-start gap-4 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full sm:w-72 md:w-80 lg:w-96 transition-transform hover:scale-105 flex flex-col justify-between">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{hospital.name}</h2>
        <p className="text-gray-600 text-sm md:text-base mb-4">{hospital.address}</p>
        <button
          onClick={handleNavigate}
          className="flex items-center justify-center mt-auto px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-800 transition duration-200 w-full"
        >
          <MapPin className="mr-2" size={18} />
          View on Map
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
