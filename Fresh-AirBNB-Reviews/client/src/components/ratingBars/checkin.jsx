/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '25%',
  },
});

const CheckIn = (props) => {
  const vals = props.reviewCheckIn.map((o) => o.checkIn);
  const rating = (vals.reduce((m, i) => (m += i), 0) / vals.length);
  const classes = useStyles();

  return (
    <div className="flex-item, rating">
      Check-In
      {' '}
      {rating.toFixed(1)}
      {' '}
      <div className={classes.root}>
        <LinearProgress color="primary" variant="determinate" value={rating.toFixed(1) * 20} />
      </div>
    </div>
  );
};
export default CheckIn;
