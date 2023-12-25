import { useState } from 'react';
import './App.css';
import TriggerButton from './components/TriggerButton/TriggerButton';
import MouseParticles from 'react-mouse-particles'
import InfoPage from './components/InfoPage/InfoPage';
import SkillsPage from './components/SkillsPage/SkillsPage';
import Navbar from './components/Navbar/Navbar';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import CollaborationPage from './components/CollaborationPage/CollaborationPage';
import Footer from './components/Footer/Footer';

function App() {
  const [isTriggered, setIsTriggered] = useState(false);
  return (
    <div>
        <MouseParticles 
        g={1} 
        color={["#343a40", "#ced4da", "#f8f9fa", "#48cae4", "#023e8a"]} 
        num={2}
        life={1}
        cull="inputs"/>
        <TriggerButton setIsTriggered={setIsTriggered} />
        {
          isTriggered &&
          <>
            <Navbar />
            <InfoPage />
            <SkillsPage />
            <ProjectsPage />
            <CollaborationPage />
            <Footer />
          </>
        }
    </div>
  );
}

export default App;
