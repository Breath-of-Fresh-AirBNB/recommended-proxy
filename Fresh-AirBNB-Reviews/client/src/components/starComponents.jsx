/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const StarComponents = (props) => {
  // console.log('from Star', props.reviewRatings);
  const vals = props.reviewRatings.map((o) => {
    let m = 0;
    const values = Object.values(o);
    values.forEach((val) => (typeof val === 'number' && val <= 5 ? m += val : null));
    return m / 6;
  });

  const rating = (vals.reduce((m, i) => m += i, 0) / vals.length);

  const useStyles = makeStyles({
    iconFilled: {
      color: '#FD385C',
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <div className="user">
          OverAll Rating
          {' '}
          {Number(rating.toFixed(1))}
        </div>
        <Rating className={classes.iconFilled} name="read-only" size="large" value={Number(rating.toFixed(1))} precision={0.10} readOnly />
      </Box>
    </div>
  );
};

export default StarComponents;
