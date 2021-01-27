/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

const BookingUpper = (props) => {
  const { reviewRating, reviewNum, avgRate } = props;
  let maxClass = 'booking-upper-left-dollar inline-block ';
  let avgClass = 'display-none inline-block';
  let avg;
  if (avgRate) {
    avg = `$${Math.ceil(avgRate)}`;
    avgClass = 'booking-upper-left-dollar inline-block margin-5-l';
    maxClass += 'text-line-through color-light-grey font-weight-400';
  }
  return (
    <div className="booking-upper-main">
      <div className="booking-upper-left">
        <div className={maxClass}>
          $
          {props.maxRate}
        </div>
        <div className={avgClass}>
          {avg}
        </div>
        <div className="booking-upper-left-night inline-block">
          / night
        </div>
      </div>
      <div className="booking-reviews">
        <div className="booking-reviews-star">
          <img src="../img/star.png" height="11" />
        </div>
        <div className="booking-reviews-rating">
          {reviewRating}
        </div>
        <div className="booking-reviews-number">
          (
          {reviewNum}
          )
        </div>
      </div>
    </div>
  );
};

const CheckIn = (props) => {
  const numGuests = props.Adults + props.Children;
  // console.log('check in, props: ', props);
  let guestText; let
    displayForm;
  numGuests > 1 ? guestText = ' guests' : guestText = ' guest';
  const FormMainRow = function (category, desc) {
    return (
      <div className="guest-form-main-row">
        <div className="guest-row-left inline-block float-left">
          <div className="guest-row-left-upper">
            {category}
          </div>
          <div className="guest-row-left-lower">
            {desc}
          </div>
        </div>
        <div className="guest-row-right inline-block float-right">
          <div className="guest-row-right-left-arrow guest-row-button inline-block " onClick={() => props.onNegClick(category)}>
            <div className="guest-button-inner">-</div>
          </div>
          <div className="guest-row-right-mid inline-block ">
            <div className="guest-row-val">
              {props[category]}
            </div>
          </div>
          <div className="guest-row-right-right-arrow guest-row-button inline-block " onClick={() => props.onPlusClick(category)}><div className="guest-button-inner">+</div></div>
        </div>
      </div>
    );
  };
  const GuestForm = () => {
    !props.showGuest ? displayForm = 'booking-guest-form display-false' : displayForm = 'booking-guest-form display-true';
    return (
      <div className={displayForm}>
        <div className="guest-form-inner">
          {FormMainRow('Adults', 'cranky buggers')}
          {FormMainRow('Children', 'Ages 2-12')}
          {FormMainRow('Infants', 'Under 2')}
          <div className="guest-form-main-row light-grey-text-11-5">
            {props.maxGuests}
            {' '}
            guests maximum. Infants don't count towards the number of guests.
          </div>
          <div className="guest-form-last-row">
            <div className="guest-form-close" onClick={() => props.onClose()}>
              Close
            </div>
          </div>
        </div>
      </div>

    );
  };
  return (
    <div className="booking-middle">
      <div className="booking-middle-upper">
        <div className="booking-middle-upper-left">
          <div className="booking-check-in-name booking-header">
            CHECK-IN
          </div>
          <div className="booking-check-in-field booking-field">
            {props.checkIn || 'Add date'}
          </div>
        </div>
        <div className="booking-middle-upper-right">
          <div className="booking-check-out-name booking-header">
            CHECK-OUT
          </div>
          <div className="booking-check-out-fiel
      // sum += this.props.cal[i].rate;
      // disc += this.props.cal[i].discPerc * this.props.cal[i].rate;d booking-field"
          >
            {props.checkOut || 'Add date'}
          </div>
        </div>
      </div>
      <div className="booking-middle-lower booking-header booking-guests" onClick={() => props.onClickGuest()}>
        <div className="booking-guests-flex-parent">
          <div className="booking-guests-left">
            <div className="booking-header booking-guests-header">
              GUESTS
            </div>
            <div className="booking-guests-field booking-field">
              {numGuests}
              {' '}
              {guestText}
            </div>
          </div>
          <div className="booking-guests-right booking-arrow">
            <img src="../img/small-arrow-transp.png" width="20" />
          </div>
        </div>
      </div>
      {GuestForm()}
    </div>
  );
};

const RenderButton = (props) => {
  let text;
  // console.log('render button: ', props);
  props.checkOut ? text = 'Reserve' : text = 'Check Availability';
  return (
    <div className="check-button">
      {text}
    </div>
  );
};

class BookingModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRate: null,
      maxAmount: null,
      rate: this.props.maxRate,
      discount: null,
      discountPerc: null,
      serviceFee: null,
      stayLength: null,
      taxes: null,
      totalPrice: null,
      numGuests: 1,
      Adults: 1,
      Children: 0,
      Infants: 0,
      guests: {
        Adults: 1,
        Children: 0,
        Infants: 0,
      },
      showCal: false,
      showGuest: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.checkOut !== prevProps.checkOut) {
      this.calcRates();
    }
  }

  handleDateFieldClick() {
    // console.log('clicked');
    if (!this.state.showCal) {
      this.setState({
        showCal: true,
      });
    }
  }

  handleCloseForm() {
    this.setState({
      showGuest: false,
    });
  }

  handleGuestClick() {
    let show;
    this.state.showGuest ? show = false : show = true;
    this.setState({
      showGuest: show,
    });
  }

  handleIncreaseGuest(category) {
    let amount = this.state[category];
    amount++;
    this.setState({
      [category]: amount,
    });
    this.setGuestNum();
  }

  handleDecreaseGuest(category) {
    let amount = this.state[category];
    amount--;
    if (amount >= 0) {
      this.setState({
        [category]: amount,
      });
    }
    this.setGuestNum();
  }

  setGuestNum() {
    const guestNum = this.state.Adults + this.state.Children + this.state.Infants;
    this.setState({
      numGuests: guestNum,
    });
  }

  calcRates() {
    const numNights = this.calcStayLength();
    const checkInObj = new Date(this.props.checkIn);
    const firstDayObj = new Date(checkInObj.getFullYear(), 0, 1);
    const checkInI = Math.ceil((checkInObj - firstDayObj) / (1000 * 60 * 60 * 24));
    // console.log('numNights', numNights);
    // console.log('checkInObj', checkInObj);
    // console.log('firstDayObj', firstDayObj);
    // console.log('checkInI', checkInI);

    let avg = 0;
    var tax = 0;
    let total = 0;
    const maxAmt = this.props.maxRate * numNights;
    for (let i = checkInI; i < numNights + checkInI; i++) {
      const subTotal = (this.props.cal[i].rate * (1 - this.props.cal[i].discPerc));
      total += subTotal;
    }
    // console.log('calcRates: this.state.maxRate: ', this.state.maxRate);
    const totalDisc = maxAmt - total;
    const calcDiscPerc = totalDisc / maxAmt;
    var tax = total * this.props.tax;
    const service = total * 0.15;
    avg = total / numNights;
    this.setState({
      avgRate: avg,
      maxAmount: maxAmt,
      stayLength: numNights,
      discount: totalDisc,
      discountPerc: calcDiscPerc,
      serviceFee: service,
      taxes: tax,
      totalPrice: total + service + tax,
    });
  }

  calcStayLength() {
    // console.log('calcStayLength...');
    if (this.props.checkOut) {
      const numNights = Math.ceil((new Date(this.props.checkOut) - new Date(this.props.checkIn)) / (1000 * 60 * 60 * 24));
      return numNights;
    }
    return null;
  }

  renderCharges() {
    const renderLine = (str, amt, isDisc, last) => {
      // console.log('renderLine: ', str, amt, isDisc, last);
      let amtClass = 'guest-form-price-line-right float-right ';
      let lineClass = 'guest-form-price-line padding-10-t margin-15-b ';
      let negDisc;
      if (isDisc) {
        amtClass += 'color-green bold';
        negDisc = '-';
      }
      if (last) {
        lineClass += 'padding-15-b';
      }
      return (
        <div className={lineClass}>
          <div className="guest-form-price-line-left text-underline float-left">
            {str}
          </div>
          <div className={amtClass}>
            {negDisc}
            $
            {Math.ceil(amt).toLocaleString()}
          </div>
        </div>
      );
    };
    if (this.state.avgRate) {
      // console.log('discount perc: ', this.state.discountPerc);
      const numNightsStr = `$${this.props.maxRate} x ${this.state.stayLength} nights`;
      const discStr = `${Math.ceil(this.state.discountPerc * 100)}% weekly price discount`;
      // console.log('renderCharges: ', this.state);
      // calculate discount
      return (
        <div className="guest-form-price-breakdown height-fit-content width-90 center color-grey font-13 padding-5-t margin-5-b">
          <div className="guest-form-price-breakdown-upper-line center margin-10-t-b padding-10-t-b font-12 ">
            You won't be charged yet
          </div>
          {renderLine(numNightsStr, this.state.maxAmount)}
          {renderLine(discStr, this.state.discount, true)}
          {renderLine('Service fee', this.state.serviceFee)}
          {renderLine('Occupancy taxes and fees', this.state.taxes, null, true)}
          <div className="guest-form-price-total padding-20-t padding-5-b margin-15-t-b margin-10-b border-grey-top">
            <div className="guest-form-price-total-left float-left bold ">
              Total
            </div>
            <div className="guest-form-price-total-right float-right bold">
              $
              {Math.ceil(this.state.totalPrice).toLocaleString()}
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div className="booking">
        <div className="booking-module">
          <BookingUpper
            avgRate={this.state.avgRate}
            maxRate={this.props.maxRate}
            reviewNum={this.props.reviewNum}
            reviewRating={this.props.reviewRating.toFixed(1)}
          />
          <CheckIn
            Adults={this.state.Adults}
            Children={this.state.Children}
            Infants={this.state.Infants}
            checkIn={this.props.checkIn}
            checkOut={this.props.checkOut}
            guests={this.state.guests}
            maxGuests={this.props.maxGuests}
            numGuests={this.state.numGuests}
            showGuest={this.state.showGuest}
            onClickGuest={() => this.handleGuestClick()}
            onClose={() => this.handleCloseForm()}
            onNegClick={(i) => this.handleDecreaseGuest(i)}
            onPlusClick={(i) => this.handleIncreaseGuest(i)}
          />
          <div className="check-button-div">
            <RenderButton checkOut={this.props.checkOut} />
          </div>
          {this.renderCharges()}
        </div>
      </div>
    );
  }
}

export default BookingModule;
