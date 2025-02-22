import {React,useState} from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Service/SearchBar'
import HospitalCard from '../Components/HospitalCard'
import Footer from '../Components/Footer'


const Home = () => {

  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
    // Implement your search/filter logic here
  };

  const hospitals = [
    { id: 1, name: 'Demo Hospital', address: '123 Main Street' },
    { id: 2, name: 'Green Valley Medical Center', address: ' Oak Avenue, Nagar' },
    { id: 3, name: 'Sunrise Health Clinic', address: ' Pine Road, Raipur' },
    { id: 4, name: 'Vedenta Health Clinic', address: 'Ring Road, Raipur' }
  ];

  return (

    <div className='flex flex-col h-screen justify-between'>
      <Navbar/>
      <div className="flex flex-col h-10 mb-auto items-center mt-8 px-4">
        <SearchBar 
          placeholder="Search for hospitals, clinics, or doctors..." 
          onSearch={handleSearch} 
        />
        {searchQuery && (
          <div className="mt-4 text-gray-600">
            Showing results for: <strong>{searchQuery}</strong>
          </div>
        )}
      </div>
      <div className="flex flex-col mb-auto items-center mt-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Hospitals Near You</h1>
        {/* Responsive grid layout for different screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home