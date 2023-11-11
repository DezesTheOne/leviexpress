import { JourneyPicker } from '../../components/JourneyPicker';
import { useState } from'react';


export const HomePage = () => {
  const [journey, setJourney] = useState(null);
 
  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      {journey !== null ? <p>Nalezeno spojení s ID {journey.journeyId} </p> : ''}
    </main>
  );
};
