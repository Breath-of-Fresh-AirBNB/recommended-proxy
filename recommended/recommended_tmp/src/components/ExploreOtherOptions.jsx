/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 75%;
  padding: 50px 100px 0 100px;
  margin: 60px auto 20px auto;
  border-top: 1px solid #DDDDDD;

  & .subheader {
    margin-left: 10px;
    font-size: 16px;
  }

  & .homeTypeLinks {
    margin-left: 10px;
    color: grey;
    :hover {
      cursor: pointer;
    }
  }
`;

const Title = styled.h2`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  color: #222222;
  margin-left: 10px;
`;

const Destinations = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 20px 0 0 10px;
  color: grey;

  & .list {
    display: flex;
    flex-direction: column;
    padding-right: 200px;
  }
`;

const DestinationLink = styled.p`
  :hover {
    cursor: pointer;
  }
`;

const ExploreOtherOptions = ({ destination, destinations }) => (
  <div className="exploreOtherOptions">
    <Container>
      <Title>
        Explore other options in and around
        {' '}
        {destination}
      </Title>
      <div className="subheader">
        More places to stay in
        {' '}
        {destination}
        :
      </div>
      <div className="homeTypeLinks">
        Houses • Bed and breakfasts • Lofts • Villas • Condominiums
      </div>
      <Destinations>
        <div className="list">
          <DestinationLink>
            {destinations[0]}
          </DestinationLink>
          <DestinationLink>
            {destinations[1]}
          </DestinationLink>
          <DestinationLink>
            {destinations[2]}
          </DestinationLink>
        </div>
        <div className="list">
          <DestinationLink>
            {destinations[3]}
          </DestinationLink>
          <DestinationLink>
            {destinations[4]}
          </DestinationLink>
          <DestinationLink>
            {destinations[5]}
          </DestinationLink>
        </div>
        <div className="list">
          <DestinationLink>
            {destinations[6]}
          </DestinationLink>
          <DestinationLink>
            {destinations[7]}
          </DestinationLink>
          <DestinationLink>
            {destinations[8]}
          </DestinationLink>
        </div>
        <div className="list">
          <DestinationLink>
            {destinations[9]}
          </DestinationLink>
          <DestinationLink>
            {destinations[10]}
          </DestinationLink>
          <DestinationLink>
            {destinations[11]}
          </DestinationLink>
        </div>
      </Destinations>
    </Container>
  </div>
);

export default ExploreOtherOptions;
