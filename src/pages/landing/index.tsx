import React, { Fragment } from 'react';
import Footer from '../layout/footer';
import Header from '../layout/header';
import ActivityForm from './components/activity';
import Chat from './components/chat';
import HeroSection from './components/hero-section';
import CardSection from './components/card-section';
import MapSection from './components/map-section';
import HorizontalCardSection from './components/horizontal-sard-section';
import ExperienceSection from './components/experience-section';
import ExploreSection from './components/explore-section';



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
