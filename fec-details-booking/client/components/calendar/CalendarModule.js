/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable react/sort-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const MonthHeader = (props) => (
  <div className="month-header-bar">
    <div className="month-header-div">
      {props.month}
      {' '}
      {props.year}
    </div>
  </div>
);

const DaysOfWeek = () => (
  <div className="days-of-weeks-bar flex-parent-horz">
    <div id="sunday" className="day-of-week flex-child-horz flex-grow center">Su</div>
    <div id="monday" className="day-of-week flex-child-horz flex-grow center">Mo</div>
    <div id="tuesday" className="day-of-week flex-child-horz flex-grow center">Tu</div>
    <div id="wednesday" className="day-of-week flex-child-horz flex-grow center">We</div>
    <div id="thursday" className="day-of-week flex-child-horz flex-grow center">Th</div>
    <div id="friday" className="day-of-week flex-child-horz flex-grow center">Fr</div>
    <div id="saturday" className="day-of-week flex-child-horz flex-grow center">Sa</div>
  </div>
);

class CalendarModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: null,
      month: null,
      year: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    const firstDay = this.props.date;
    const firstWeekday = firstDay.getDay();
    const lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 1);
    const month = firstDay.getMonth();
    let year = `${firstDay.getYear()}`;
    year = `20${year.substring(1)}`;
    const numDays = (lastDay - firstDay) / (1000 * 60 * 60 * 24);
    const numWeeks = Math.ceil((numDays + firstWeekday - 0.99) / 7);

    const arrayDays = [];
    let startingDate = 1;
    for (let i = 0; i < numWeeks * 7; i++) {
      if (i >= firstWeekday && startingDate <= numDays) {
        arrayDays[i] = startingDate;
        startingDate++;
      } else {
        arrayDays[i] = null;
      }
    }

    let dateI = this.props.dateIndex;

    const checkInObj = new Date(this.props.checkIn);
    const checkOutObj = new Date(this.props.checkOut);
    const checkInStr = checkInObj.toString();
    const checkOutStr = checkOutObj.toString();

    const calDays = arrayDays.map((val, i) => {
      let dateValue = null;
      let divClass; let buttonClass; let
        clickFunction;
      if (val !== null) {
        dateValue = `${month + 1}/${val}/${year}`;
        const dateValObj = new Date(dateValue);
        const dateValStr = dateValObj.toString();
        if (dateValObj >= this.props.today && this.props.cal[dateI].available) {
          divClass = 'cal-days-inner cal-day-available-not';
          buttonClass = 'cal-days cal-days-available-not';
          if (!this.props.checkIn && this.checkMinStay(dateI) || this.props.checkOut && this.checkMinStay(dateI)) {
            divClass = 'cal-days-inner cal-day-available';
            buttonClass = 'cal-days cal-days-available';
            clickFunction = () => this.props.onDateClick(dateValue);
          }
        } else {
          divClass = 'cal-days-inner cal-date-unavailable';
          buttonClass = 'cal-days cal-days-unavailable';
        }
        if (this.props.checkOut) {
          if (dateValStr === checkInStr) {
            buttonClass += ' check-in-stay';
          }
          if (dateValObj > checkInObj && dateValObj < checkOutObj) {
            buttonClass += ' stay-day';
          }
          if (dateValStr === checkOutStr) {
            buttonClass += ' check-out-date';
          }
        } else {
          if (dateValStr === checkInStr) {
            buttonClass += ' check-in-date';
          }
          if (this.props.checkIn && (((dateValObj - checkInObj) / (1000 * 60 * 60 * 24)) >= this.props.minStay) && this.props.cal[dateI].available) {
            if (this.props.lastDateI === null || (this.props.lastDateI !== null && (dateI < this.props.lastDateI))) {
              divClass = 'cal-days-inner cal-day-available';
              buttonClass = 'cal-days cal-days-available';
              clickFunction = () => this.props.onDateClick(dateValue);
            }
          }
          /// ////////////////////////////////

          if (this.props.checkIn && dateValObj < checkInObj && dateValObj >= this.props.today && this.checkMinStay(dateI)) {
            divClass = 'cal-days-inner cal-day-available';
            buttonClass = 'cal-days cal-days-available';
            clickFunction = () => this.props.onDateClick(dateValue);
          }
        }
        dateI++;
        return (
          <button className={buttonClass} id={dateValue} key={i} onClick={clickFunction}><div className={divClass} key={i}>{val}</div></button>
        );
      }
      return <div className="cal-days" id={dateValue} key={i}>{val}</div>;
    });

    this.setDMY(calDays, month, year);
  }

  checkMinStay(dateIndex) {
    if (!this.props.checkOut && (this.props.lastDateI && (dateIndex > this.props.lastDateI))) {
      return false;
    }
    if (!this.props.checkIn || (this.props.checkIn && this.props.checkOut)) {
      const getNext = (element, i) => element.available === false && i > dateIndex;
      const indexNext = this.props.cal.findIndex(getNext, dateIndex);
      if (indexNext === -1 || indexNext < dateIndex) {
        // console.log('dateIndex: ', indexNext, dateIndex);
        // console.log('indexNext === -1, TRUE');
        return true;
      }
      if ((indexNext - dateIndex) >= this.props.minStay + 1) {
        // console.log('dateIndex: ', indexNext, dateIndex);
        // console.log('indexNext 2nd test, TRUE');
        return true;
      }
      // console.log('dateIndex: ', indexNext, dateIndex);
      // console.log(indexNext, dateIndex);
      // console.log('FALSE');
      return false;
    }
  }

  setDMY(days, monthNum, yearNum) {
    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
    const month = monthArr[monthNum];
    this.setState({
      days,
      month,
      year: yearNum,
      isLoaded: true,
    });
  }

  renderDays() {
    if (this.state.isLoaded) {
      return (
        <div className="cal-days-block">
          {this.state.days}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="month-module">
        <MonthHeader month={this.state.month} year={this.state.year} />
        <DaysOfWeek />
        {this.renderDays()}
      </div>
    );
  }
}

export default CalendarModule;
