import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './Estilo.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="tdsPlanetas">
          {planets.map((i) => (
            <PlanetCard
              key={ i.name }
              PlanetName={ i.name }
              PlanetImage={ i.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
