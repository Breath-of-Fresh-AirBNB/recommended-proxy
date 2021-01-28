/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import _ from 'lodash';

function Highlights(props) {
  let selfCheck = 'Check yourself in with the lockbox.';
  if (props.lockBox) {
    selfCheck = 'Check yourself in with the lockbox.';
  } else {
    selfCheck = 'Check in with the front desk upon arrival.';
  }
  const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let cancelMonth; let halfCancelMonth; let cancelDay; let halfCancelDay; let
    halfCancelDate;
  const today = new Date();
  if (props.checkIn) {
    const cancelBy = new Date(props.checkIn);
    halfCancelDate = new Date(Number(cancelBy));
    halfCancelDate.setDate(cancelBy.getDate() - props.cancelDays);
    const cancelDate = new Date(Number(halfCancelDate));
    cancelDate.setDate(halfCancelDate.getDate() - 2);
    cancelMonth = monthArr[cancelDate.getMonth()];
    cancelDay = cancelDate.getDate();
    halfCancelMonth = monthArr[halfCancelDate.getMonth()];
    halfCancelDay = halfCancelDate.getDate();
  }
  const sharedFalse = {
    name: 'shared',
    value: false,
    header: `Entire ${props.houseType}`,
    desc: `You'll have the entire ${props.houseType} to yourself.`,
    icon: '../img/highlights/home.png',
  };
  const shared = {
    name: 'shared',
    value: true,
    header: `Private room in ${props.houseType}`,
    desc: `You'll have a private bedroom in the ${props.houseType}.`,
    icon: '../img/highlights/home.png',
  };
  const enhancedClean = {
    name: 'enhancedClean',
    header: 'Enhanced Clean',
    desc: 'The host committed to Airbnb\'s 5-step enhanced cleaning proces.',
    icon: '../img/highlights/enhancedClean.png',
  };
  const superHost = {
    name: 'superHost',
    header: `${props.hostName} is a Superhost`,
    desc: 'Superhosts are experienced, higly rated hosts who are committed to prividng great stays for guests.',
    icon: '../img/highlights/superHost.png',
  };
  const selfCheckIn = {
    name: 'selfCheckIn',
    header: 'Self check-in',
    desc: selfCheck,
    icon: '../img/highlights/selfCheckIn.png',
  };
  const cancellation = {
    name: 'cancellation',
    header: today >= halfCancelDate ? 'Too late to cancel' : `Free cancellation until ${props.cancelTime}:00 PM on ${cancelMonth} ${cancelDay}`,
    desc: today >= halfCancelDate ? 'It is too close to your desired check-in date to cancel. After booking, this reservation would be non-refundable' : `After that, cancel before ${props.cancelTime}:00 PM on ${halfCancelMonth} ${halfCancelDay} and get a 50% refund, minus the first night and service fee.`,
    icon: '../img/highlights/cancellation.png',
  };
  const cancellationFalse = {
    name: 'cancellation',
    header: 'Cancellation Policy',
    desc: 'Add your trip dates to get the cancellation details for this stay.',
    icon: '../img/highlights/cancellation.png',
  };
  const houseRulesArr = {
    kids: props.kids,
    pets: props.pets,
    smoking: props.smoking,
    parties: props.parties,
  };
  const houseRulesStr = `${_.reduce(houseRulesArr, (memo, val, key, list) => {
    if (!val) {
      return `${memo + key}, `;
    }
    return memo;
  }, '')}`;
  const houseRulesStr2 = houseRulesStr.length > 0 ? `${houseRulesStr}or dinosaurs.` : 'dinosaurs.';
  const houseRules = {
    name: 'house rules',
    header: 'House rules',
    desc: `This place ${props.kids ? 'is' : 'isn\'t'} suitable for children under 12 and the host doesn't allow ${houseRulesStr2}`,
    icon: '../img/highlights/houseRules.png',
  };
  const highlightProps = {
    shared: props.shared,
    enhancedClean: props.enhancedClean,
    selfCheckIn: props.selfCheckIn,
    superHost: props.superHost,
    cancellation: !!props.checkIn,
    houseRules: true,
  };
  // const houseRulesStr = houseRulesFunc();
  const highlights = {
    shared,
    sharedFalse,
    enhancedClean,
    superHost,
    selfCheckIn,
    cancellation,
    cancellationFalse,
    houseRules,
  };
  const highlightObjs = _.map(highlightProps, (val, key) => (val ? highlights[key] : highlights[`${key}False`] || null));

  const RenderHighlights = () => {
    const list = highlightObjs.map((val, i) => {
      if (val) {
        return RenderLine(val, i);
      }
    });
    return (
      <div>
        {list}
      </div>
    );
  };
  const RenderLine = (item, i) => (
    <div className="highlight-line height-35 margin-18-b flex-parent" key={i}>
      <div className="highlight-line-icon width-35px flex-basis-35px flex-child flex-space-between">
        <img src={item.icon} height="20" className="margin-neg-5-l" />
      </div>
      <div className="highlight-line-right margin-10-l flex-child width-auto">
        <div className="highlight-line-right-header highlight-heading ">
          {item.header}
        </div>
        <div className="highlight-line-right-description sub-heading ">
          {item.desc}
        </div>
      </div>
    </div>
  );
  return (
    <div className="details-module margin-20-t-b ">
      {RenderHighlights()}
    </div>
  );
}

export default Highlights;
