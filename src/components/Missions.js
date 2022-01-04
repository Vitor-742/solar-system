import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div>
          {missions.map((item) => (
            <MissionCard
              name={ item.name }
              year={ item.year }
              country={ item.country }
              destination={ item.destination }
              key={ item.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
