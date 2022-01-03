import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { PlanetName, PlanetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <h4 data-testid="planet-name">{PlanetName}</h4>
        <img src={ PlanetImage } alt="Planeta" { ...PlanetName } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  PlanetName: PropTypes.string.isRequired,
  PlanetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
