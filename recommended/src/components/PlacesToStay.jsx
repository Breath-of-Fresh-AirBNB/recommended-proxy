/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import HomeListing from './HomeListing';

const Container = styled.div`
  width: 75%;
  padding: 0 100px 0 100px;
  font-family: Montserrat, sans-serif;
  margin: 60px auto 30px auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  color: #222222;
  font-family: Montserrat, sans-serif;
  margin-left: 10px;
`;

const Buttons = styled.div`
  margin-right: 10px;

  & button {
    background: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: inline-block;
    margin: 5px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;
    outline: none;
  }

  & button:hover {
    height: 32px;
    width: 32px;
    margin: 3px;
    margin-left: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

const prev = '<';
const next = '>';

class PlacesToStay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      {
        width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false,
      },
      { width: 850, itemsToShow: 3, itemsToScroll: 3 },
      { width: 1150, itemsToShow: 4 },
    ];
  }

  render() {
    const { homes } = this.props;
    return (
      <div className="morePlacesToStay">
        <Container>
          <Header>
            <div className="top-bar">
              <Title>More places to stay</Title>
            </div>
            <Buttons>
              <button type="button" id="prevBtn" onClick={() => this.carousel.slidePrev()}>{prev}</button>
              <button type="button" id="nextBtn" onClick={() => this.carousel.slideNext()}>{next}</button>
            </Buttons>
          </Header>
          <Carousel
            ref={(ref) => { this.carousel = ref; }}
            itemsToShow={4}
            itemsToScroll={4}
            pagination={false}
            disableArrowsOnEnd={false}
            showArrows={false}
            breakPoints={this.breakPoints}
          >
            {homes.map((home) => (
              <HomeListing
                home={home}
                key={home.homeId}
              />
            ))}
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default PlacesToStay;
