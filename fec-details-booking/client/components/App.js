/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React from 'react';
import Details from './details/Details.js';
import Highlights from './highlights/Highlights.js';
import BookingModule from './booking/BookingModule.js';
import Calendar from './calendar/Calendar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propId: 1,
      propData: null,
      checkInDate: null,
      checkOutDate: null,
      lastAvailI: null,
      firstAvail: null,
      hostName: null,
      isLoaded: false,
      roomInfo: {
        numGuest: null,
        numBedRooms: null,
        numBeds: null,
        numBaths: null,
      },
      currentDate: new Date(),
      currentMonth: null,
      displayMonth: null,
      maxRate: null,
      taxRate: null,
      key: 0,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3002/api/props/56')
      .then((res) => res.json())
      .then(
        (results) => {
          const propId = 0;
          const data = results[propId];
          this.setState({
            propData: data,
            roomInfo: {
              numGuest: data.numGuest,
              numBedRooms: data.numBedRooms,
              numBeds: data.numBeds,
              numBaths: data.numBathRooms,
            },
            hostName: data.hostName.firstName,
            currentMonth: this.state.currentDate.getMonth(),
            displayMonth: this.state.currentDate.getMonth(),
            maxRate: this.getMaxRate(data.calendar),
            taxRate: data.StateTaxRate + data.cityTaxRate + data.countyTaxRate,
            isLoaded: true,
          });
        },
      )
      .catch((err) => console.log('error: ... ', err));
  }

  getLastAvailI(i) {
    const firstDateI = new Date(this.state.propData.calendar[0].date);
    // console.log(firstDateI);
    const checkInI = (i - firstDateI) / (1000 * 60 * 60 * 24);
    const getNext = (element, i) =>
      // console.log('getFirstAvail, i & checkInI: ', i, checkInI);
      element.available === false && i > checkInI;

    let indexNext = this.state.propData.calendar.findIndex(getNext, checkInI);
    // console.log('index next: ', indexNext);
    indexNext > checkInI ? indexNext : indexNext = null;
    this.setState({
      lastAvailI: indexNext,
    });
  }

  getFirstAvail(date) {
    this.setState({
      firstAvail: date,
    });
  }

  getMaxRate(cal) {
    let maxRate = 0;
    cal.forEach((val) => {
      if (val.rate > maxRate) {
        maxRate = val.rate;
      }
    });
    return maxRate;
  }

  handleClearDates() {
    console.log('clearDates() clicked', this.state);
    this.setState({
      checkInDate: null,
      checkOutDate: null,
      lastAvailI: null,
      key: this.state.key + 1,
    });
  }

  handleDateClick(i) {
    const dateObj = new Date(i);
    console.log('handleDateClick, i: ', i, dateObj);
    if (this.state.checkInDate) {
      const checkInObj = new Date(this.state.checkInDate);
      if (this.state.checkOutDate) {
        this.setState({
          checkInDate: i,
          checkOutDate: null,
          key: this.state.key + 1,
        });
        this.getLastAvailI(dateObj);
      } else if (dateObj < checkInObj) {
        this.setState({
          checkInDate: i,
          key: this.state.key + 1,
        });
        this.getLastAvailI(dateObj);
      } else {
        this.setState({
          checkOutDate: i,
          lastAvailI: null,
          key: this.state.key - 1,
        });
        this.getLastAvailI(dateObj);
      }
    } else {
      this.setState({
        checkInDate: i,
        key: this.state.key + 1,
      });
      this.getLastAvailI(dateObj);
    }
  }

  handlePriorMonthClick() {
    if (this.state.currentMonth !== this.state.displayMonth) {
      this.setState({
        displayMonth: this.state.displayMonth - 1,
        key: this.state.key - 1,
      });
    }
  }

  handleNextMonthClick() {
    if (this.state.displayMonth < 4) {
      this.setState({
        displayMonth: this.state.displayMonth + 1,
        key: this.state.key + 1,
      });
    }
  }

  renderBooking() {
    if (this.state.isLoaded) {
      return (
        <BookingModule
          cal={this.state.propData.calendar}
          checkIn={this.state.checkInDate}
          checkOut={this.state.checkOutDate}
          maxGuests={this.state.propData.numGuest}
          maxRate={this.state.maxRate}
          reviewNum={this.state.propData.reviewNum}
          reviewRating={this.state.propData.reviewRating}
          tax={this.state.taxRate}
        />
      );
    }
    return <div>Waiting on data to load...</div>;
  }

  renderCalendar() {
    if (this.state.isLoaded) {
      return (
        <Calendar
          calendar={this.state.propData.calendar}
          checkIn={this.state.checkInDate}
          checkOut={this.state.checkOutDate}
          date={this.state.currentDate}
          lastDateI={this.state.lastAvailI}
          month={this.state.displayMonth}
          minStay={this.state.propData.minStay}
          numReviews={this.state.numReviews}
          reviewRating={this.state.reviewRating}
          key={this.state.key}
          onClearDates={this.handleClearDates.bind(this)}
          onDateClick={(i) => this.handleDateClick(i)}
          onNextClick={() => this.handleNextMonthClick()}
          onPriorClick={() => this.handlePriorMonthClick()}
        />
      );
    }
    return <div>Waiting on data to load...</div>;
  }

  renderDetails() {
    if (this.state.isLoaded) {
      return (
        <Details
          propId={this.state.propId}
          roomInfo={this.state.roomInfo}
          hostName={this.state.hostName}
        />
      );
    }
    return <div>Waiting on data to load...</div>;
  }

  renderHighlights() {
    if (this.state.isLoaded) {
      return (
        // <div></div>
        <Highlights
          cancelDays={this.state.propData.freeCancelDays}
          cancelTime={this.state.propData.freeCancelTime}
          checkIn={this.state.checkInDate}
          enhancedClean={this.state.propData.enhancedClean}
          hostName={this.state.hostName}
          lockBox={this.state.propData.lockBox}
          selfCheckIn={this.state.propData.selfCheckIn}
          shared={this.state.propData.shared}
          superHost={this.state.propData.superHost}
          kids={this.state.propData.kids}
          houseType={this.state.propData.houseType}
          parties={this.state.propData.parties}
          pets={this.state.propData.pets}
          smoking={this.state.propData.smoking}
        />
      );
    }
    return <div>Waiting on data to load...</div>;
  }

  render() {
    return (
      <div className="outer">
        <div className="details">
          {this.renderDetails()}
          {this.renderHighlights()}
          {this.renderCalendar()}
        </div>
        {this.renderBooking()}
      </div>
    );
  }
}

export default App;
