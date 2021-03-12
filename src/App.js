import React from 'react';
import TopSection from './components/TopSection';
import MyTeam from './components/MyTeam';
import Footer from './components/Footer';

function App() {
  return (
    <div className="m-4 lg:w-4/5 lg:mx-auto">
      <TopSection />
      <MyTeam />
      <Footer />
    </div>
  );
}

export default App;
