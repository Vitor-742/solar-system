import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { PlanetName, PlanetImage } = this.props;
    const alt1 = `Planeta ${PlanetName}`;
    return (
      <div data-testid="planet-card">
        <h4 data-testid="planet-name">{PlanetName}</h4>
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
