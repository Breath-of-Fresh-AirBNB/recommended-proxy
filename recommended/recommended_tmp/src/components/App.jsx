import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlacesToStay from './PlacesToStay';
import ThingsToDo from './ThingsToDo';
import ExploreOtherOptions from './ExploreOtherOptions';
import sampleHomes from './sampleHomes';
import sampleActivities from './sampleActivities';
import GlobalStyle from './globalStyle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 4,
      homes: sampleHomes,
      activities: sampleActivities,
      destinations: sampleHomes[0].relatedDestinations,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    axios.get(`http://localhost:3004/homes/${id}`)
      .then((homes) => {
        const listings = homes.data.slice(0, 12);
        this.setState({
          homes: listings,
        });
      });
    axios.get('http://localhost:3004/activities/4')
      .then((activities) => {
        const activitiesList = activities.data;
        this.setState({
          activities: activitiesList,
        });
      });
  }

  render() {
    const { homes, activities, destinations } = this.state;
    return (
      <div className="recommended">
        <Container>
          <GlobalStyle />
          <PlacesToStay
            homes={homes}
          />
          <ThingsToDo
            activities={activities}
          />
          <ExploreOtherOptions
            destination={homes[0].destination}
            destinations={destinations}
          />
        </Container>
      </div>
    );
  }
}

export default App;
