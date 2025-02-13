import React from 'react';
import './App.css';
import nagpur-railway-station from "./images.jpg"
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <header className="w-full py-8 bg-nagpurOrange text-white text-center">
        <h1 className="text-4xl font-extrabold">Welcome to Nagpur!</h1>
        <p className="mt-2 text-xl">The Orange City of India</p>
      </header>

      <main className="flex flex-col items-center justify-center px-4 py-10 space-y-8">
        <section className="text-center max-w-4xl">
          <h2 className="text-3xl font-semibold text-nagpurOrange">Why Nagpur?</h2>
          <p className="mt-4 text-lg">
            Nagpur, located in Maharashtra, is known as the "Orange City" due to its famous
            orchards. It is also a vital cultural, commercial, and political hub. The city is
            the center of India's transportation network, with the Zero Mile Stone marking its
            geographical center.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-xl max-w-xl">
          <h3 className="text-2xl font-bold text-nagpurOrange">Key Attractions</h3>
          <ul className="mt-4 space-y-3 text-lg">
            <li>• Deekshabhoomi - A historical Buddhist monument</li>
            <li>• Sitabuldi Fort - A reminder of the British colonial era</li>
            <li>• Orange Orchards - Explore Nagpur's vibrant citrus gardens</li>
            <li>• Raman Science Centre - A science museum for curious minds</li>
          </ul>
        </section>

        <section className="max-w-3xl bg-gray-100 p-6 rounded-xl">
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




