import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import StarComponents from './starComponents.jsx';
import ReviewsById from './reviews/reviewsById.jsx';
import Accuracy from './ratingBars/accuracy.jsx';
import CheckIn from './ratingBars/checkin.jsx';
import Cleanliness from './ratingBars/cleanliness.jsx';
import Communication from './ratingBars/communication.jsx';
import Location from './ratingBars/location.jsx';
import Value from './ratingBars/value.jsx';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    borderRadius: '15px',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxHeight: 800,
    overflow: 'auto',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid rgb(117, 117, 117)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '15px',
    outline: 'none',
  },
}));

export default function ReviewsModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <StarComponents reviewRatings={props.reviewsById} />
      </div>
      <div>
        <Cleanliness reviewCleanliness={props.reviewsById} />
        <Accuracy reviewAccuracy={props.reviewsById} />
        <Communication reviewCommunication={props.reviewsById} />
        <Location reviewLocation={props.reviewsById} />
        <CheckIn reviewCheckIn={props.reviewsById} />
        <Value reviewValue={props.reviewsById} />
      </div>
      <div className="flex-container-reviews">
        <ReviewsById reviewsById={props.reviewsById} />
      </div>
      <button className="button" type="button" onClick={handleClose}>
        Close All Reviews
      </button>
    </div>
  );

  return (
    <div>
      <button className="button" type="button" onClick={handleOpen}>
        Show All
        {' '}
        {props.reviewsById.length}
        {' '}
        Reviews
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
