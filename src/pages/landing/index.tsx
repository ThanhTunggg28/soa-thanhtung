import React from 'react';
import Footer from '../layout/footer';
import Header from '../layout/header';
import ActivityForm from './components/activity';
import CardSection from './components/card-section';
import Chat from './components/chat';
import ExperienceSection from './components/experience-section';
import ExploreSection from './components/explore-section';
import HeroSection from './components/hero-section';
import HorizontalCardSection from './components/horizontal-sard-section';
import MapSection from './components/map-section';



const App: React.FunctionComponent = () => {
  return <div className='overflow-x-hidden'>
    <Header />
    <HeroSection />
    <CardSection />
    <MapSection />
    <ActivityForm />
    <HorizontalCardSection />
    <ExperienceSection />
    <ExploreSection />
    <Footer />
    <Chat />
  </div>;
};

export default App;
