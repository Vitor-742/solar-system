import React from 'react';
import PropTypes from 'prop-types';
import './estilo.css';

class PlanetCard extends React.Component {
  render() {
    const { PlanetName = 'a', PlanetImage = 'a' } = this.props;
    const alt1 = `Planeta ${PlanetName}`;
    return (
      <div data-testid="planet-card" className="planet">
        <h3 data-testid="planet-name">{PlanetName}</h3>
        <img src={ PlanetImage } alt={ alt1 } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  PlanetName: PropTypes.string.isRequired,
  PlanetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
