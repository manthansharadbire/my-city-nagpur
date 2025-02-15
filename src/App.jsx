import React from 'react';
import './App.css';
import mainimage from './assets/nagpur-railway-station.jpg';

function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <header className="w-full py-8 text-white text-center">
        <h1 className="text-[51px] font-extrabold text-orange-500 ">Welcome to Nagpur!</h1>
        <p className="mt-2 text-[21px] text-orange-300 " >The Orange City of India</p>
      </header>

      <div className=''>
<img src={mainimage} alt="nagpur" />
      </div>

      <main className="flex flex-col items-center justify-center px-4 py-10 space-y-8">
        <section className="text-center max-w-4xl">
          <p className="mt-4 text-lg">
          <span className='text-orange-600 text-2xl'>Nagpur</span> , located in Maharashtra, is known as the <span className='text-orange-400'>"Orange City"</span> due to its famous
            orchards. It is also a vital cultural, commercial, and political hub. The city is
            the center of India's transportation network, with the Zero Mile Stone marking its
            geographical center.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-xl max-w-xl">
          <h3 className="text-2xl font-bold text-orange-500">Key Attractions</h3>
          <ul className="mt-4 space-y-3 text-lg">
            <li>• Deekshabhoomi - A historical Buddhist monument</li>
            <li>• Sitabuldi Fort - A reminder of the British colonial era</li>
            <li>• Orange Orchards - Explore Nagpur's vibrant citrus gardens</li>
            <li>• Raman Science Centre - A science museum for curious minds</li>
          </ul>
        </section>

        <section className="max-w-3xl p-6 rounded-xl bg-orange-400">
          <h3 className="text-xl font-semibold text-nagpurOrange">Weather and Seasons</h3>
          <p className="mt-4 text-lg">
            Nagpur has a tropical climate with hot summers, a pleasant monsoon, and mild winters. The best time to visit is during the winter season, from November to February, when the city enjoys cool and pleasant weather.
          </p>
        </section>
      </main>

      <footer className="w-full py-6 bg-nagpurOrange text-white text-center">
        <p>&copy; 2025 All Rights Reserved | Nagpur Tourism</p>
      </footer>
    </div>
  );
}

export default App;




