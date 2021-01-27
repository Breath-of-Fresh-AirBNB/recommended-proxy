/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import Listings from './Listings.jsx';
import Search from './Search.jsx';
import PhoneListings from './PhoneListings.jsx';
import PhoneSearch from './PhoneSearch.jsx';
import AllPhotos from './AllPhotos.jsx';
import Location from './Location.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      searchResults: [],
      screenWidth: window.innerWidth,
      allPhotos: false,
      location: false,
      back: false,
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleAllPhotos = this.handleAllPhotos.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    if (this.state.searchResults) {
      this.getAll(this.state.searchResults);
    }
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ screenWidth: window.innerWidth });
  }

  handleSelect(home) {
    this.setState({ searchResults: [home] });
  }

  handleAllPhotos() {
    this.setState({
      allPhotos: true,
      back: true,
    });
  }

  handleLocation() {
    this.setState({
      location: true,
      back: true,
    });
  }

  handleBack() {
    this.setState({
      back: false,
      location: false,
      allPhotos: false,
    });
  }

  // get data from db
  getAll() {
    axios.get('http://localhost:3001/listings')
      .then(({ data }) => {
        this.setState(
          { listings: data },
        );
      });
  }

  searchHandler(e) {
    e.preventDefault();
    const query = document.querySelector('#searchBar').value;
    document.querySelector('#searchBar').value = '';
    const matches = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const match of this.state.listings) {
      const location = match.location.toLowerCase();
      if (location.includes(query.toLowerCase())) {
        matches.push(match);
      }
      const title = match.title.toLowerCase();
      if (title.includes(query.toLowerCase()) && !matches.includes(match)) {
        matches.push(match);
      }
    }
    this.setState({ searchResults: matches });
  }

  render() {
    if (this.state.screenWidth < 744 && this.state.back) {
      return (
        <div>
          <PhoneListings
            searchResults={this.state.searchResults}
            handleSelect={this.handleSelect}
            handleLocation={this.handleLocation}
          />
          <PhoneSearch searchHandler={this.searchHandler} />
        </div>
      );
    }
    if (this.state.searchResults.length === 0) {
      return (
        <div style={{ backgroundImage: 'url(https://images.contentstack.io/v3/assets/bltfa2cefdbe7482368/blt3e5f0646ea372553/5f73919b419b304ab54c42d6/GoNear_Denver_2580w.jpg)', height: '500px' }}>
          <Search searchHandler={this.searchHandler} />
          <Listings
            handleSelect={this.handleSelect}
            handleAllPhotos={this.handleAllPhotos}
            handleLocation={this.handleLocation}
            searchResults={this.state.searchResults}
          />
        </div>
      );
    }
    if (this.state.allPhotos && this.state.back) {
      return (
        <AllPhotos handleBack={this.handleBack} searchResults={this.state.searchResults[0]} />
      );
    }
    if (this.state.location && this.state.back) {
      return (
        <Location handleBack={this.handleBack} searchResults={this.state.searchResults[0]} />
      );
    }
    return (
      <div>
        <Search searchHandler={this.searchHandler} />
        <Listings
          handleSelect={this.handleSelect}
          handleAllPhotos={this.handleAllPhotos}
          handleLocation={this.handleLocation}
          searchResults={this.state.searchResults}
        />
      </div>
    );
  }
}

export default App;
