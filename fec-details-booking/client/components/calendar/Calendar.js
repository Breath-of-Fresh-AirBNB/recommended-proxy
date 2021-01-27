import React from 'react';
import CalendarModule from './CalendarModule.js';

const CalendarTitle = (props) => {
  if (props.checkInDate) {
    return (
      <div className="calendar-heading">
        <div className="calendarTitle">
          Select Checkout Date
        </div>
        <div className="calendar-sub-heading">
          Minimum stay: (to_fill_in) nights
        </div>
      </div>
    )
  } else {
    return (
      <div className="calendar-heading">
        <div className="calendar-title">
          Select check-in date
        </div>
        <div className="calendar-sub-heading">
          Add your travel dates for exact pricing
        </div>
    </div>
    )
  }
}

const ScrollBar = (props) => {
  return (
    <div className="cal-scroll-bar">
      <button id="calLeftButton" className="cal-button" onClick={props.onPriorClick()}>&lt;</button>
      <button id="calRightButton" className="cal-button" onClick={props.onNextClick()}>&gt;</button>      
    </div>
  )
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: this.props.month,
      firstMonth: {
        firstDay: null,
        dateIndex: null,
        dayObjs: null,
      },
      secondMonth: {
        firstDay: null,
        dateIndex: null,
        dayObjs: null
      },
      isLoaded: false,
      windowWidth: 900,
    }
  }
  renderMonth(firstDay) {
    var firstWeekday = firstDay.getDay();
    var lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 1);
    var numDays = (lastDay - firstDay) / (1000*60*60*24);
    var numWeeks = Math.ceil((numDays + firstWeekday - .99) / 7);
    var arrayDays = new Array(numWeeks * 7);
    var calDays = arrayDays.map((val, i) => <div className="cal-days">{i}</div>);
    return (
      <div className="cal-days-block">
        {calDays}
      </div>
    )
  }

  componentDidMount() {
    var today = this.props.date;
    var firstDay = new Date(today.getFullYear(), this.props.month, 1);
    var firstDayI = Math.ceil((firstDay - new Date(today.getFullYear(), 0, 1))/(1000 * 3600 * 24));
    var secM1stDay = new Date(today.getFullYear(), this.props.month + 1, 1);
    var secM1stDayI = Math.ceil((secM1stDay - new Date(today.getFullYear(), 0, 1))/(1000 * 3600 * 24));

    this.setState({
      currentMonth: this.props.month,
      firstMonth: {
        firstDay: firstDay,
        dateIndex: firstDayI
      },
      secondMonth: {
        firstDay: secM1stDay,
        dateIndex: secM1stDayI
      },
      isLoaded: true,
    })
  }
  
  renderModules() {
    if (this.state.isLoaded) {
      if (this.state.windowWidth < 850) {
        return (
          <div className="calendar-block"> 
              <ScrollBar 
                onNextClick={() => this.props.onNextClick} 
                onPriorClick={() => this.props.onPriorClick}
              />
              <div className="calendar-module">
                <CalendarModule 
                  date={this.state.firstMonth.firstDay} 
                  checkIn={this.props.checkIn} 
                  checkOut={this.props.checkOut} 
                  dateIndex={this.state.firstMonth.dateIndex} 
                  lastDateI={this.props.lastDateI} 
                  today={this.props.date} 
                  cal={this.props.calendar} 
                  minStay={this.props.minStay} 
                  onDateClick={(i) => this.props.onDateClick(i)}
                />
              </div>   
                      
            </div>         
        )
      } else {
        return (
          <div className="calendar-block"> 
              <ScrollBar onNextClick={() => this.props.onNextClick} 
              onPriorClick={() => this.props.onPriorClick}/>
            <div className="calendar-module">
              <CalendarModule 
                date={this.state.firstMonth.firstDay} 
                checkIn={this.props.checkIn} 
                checkOut={this.props.checkOut} 
                dateIndex={this.state.firstMonth.dateIndex} 
                lastDateI={this.props.lastDateI} 
                today={this.props.date} 
                cal={this.props.calendar} 
                minStay={this.props.minStay} 
                onDateClick={(i) => this.props.onDateClick(i)}
              />
              <CalendarModule 
                date={this.state.secondMonth.firstDay} 
                checkIn={this.props.checkIn} 
                checkOut={this.props.checkOut} 
                dateIndex={this.state.secondMonth.dateIndex} 
                lastDateI={this.props.lastDateI} 
                today={this.props.date} 
                cal={this.props.calendar} 
                minStay={this.props.minStay} 
                onDateClick={(i) => this.props.onDateClick(i)}
              />
            </div>
          </div>
        )
      }
    } else {
      return (
        <div>Waiting for data...</div>
      )
    }
  }

  render() {
    return(
      <div className="calendar">
        <CalendarTitle />
        {this.renderModules()}
        <div className="clear-dates float-right text-underline font-12" onClick={() => this.props.onClearDates()}>
          Clear dates
        </div> 
      </div>      
    )
  }
}

export default Calendar;