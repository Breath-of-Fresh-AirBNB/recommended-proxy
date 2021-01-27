/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
    height: 600,
    maxHeight: 600,
    overflow: 'auto',
    width: 412,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid rgb(117, 117, 117)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '15px',
    outline: 'none',
  },
}));

const someDate = new Date();
someDate.setDate(someDate.getDate());
const date = someDate.toISOString().substr(0, 10);

export default function AddReviewModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setUser] = React.useState('');
  const [dates, setDate] = React.useState(date);
  const [message, setPost] = React.useState('');
  const [clean, setCleanliness] = React.useState(1);
  const [acc, setAccuracy] = React.useState(1);
  const [comms, setCommunication] = React.useState(1);
  const [loc, setLocation] = React.useState(1);
  const [check, setCheckIn] = React.useState(1);
  const [val, setValue] = React.useState(1);

  const handleName = (event) => {
    setUser(event.target.value);
  };

  const handlePost = (event) => {
    setPost(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleCleanliness = (event) => {
    setCleanliness(event.target.value);
  };

  const handleAccuracy = (event) => {
    setAccuracy(event.target.value);
  };

  const handleCommunication = (event) => {
    setCommunication(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleCheckIn = (event) => {
    setCheckIn(event.target.value);
  };

  const handleValue = (event) => {
    setValue(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let id = 0;
  if (props.reviewsById.length === 0) {
    id = 0;
  } else {
    id = props.reviewsById[0].homeId;
  }

  const handleNewPost = (event) => {
    event.preventDefault();
    props.newPost({
      homeId: id,
      user: name,
      cleanliness: clean,
      communication: comms,
      checkIn: check,
      accuracy: acc,
      location: loc,
      value: val,
      post: message,
      createdAt: dates,
    });
    handleClose();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <form className="addReview-form" onSubmit={handleNewPost}>
          <label className="user">
            Name:
            {' '}
            {' '}
            <input className="name-box" type="text" value={name} onChange={handleName} required />
            {' '}
            {' '}
            <input className="date-box" id="dateRequired" type="date" name="dateRequired" defaultValue={date} onChange={handleDate} />
          </label>
          <br />
          <div className="user">
            <span>Ratings</span>
          </div>
          <br />
          <label htmlFor="quantity">
            <input className="rating-box" id="quantity" name="quantity" min="1" max="5" type="Number" value={clean} onChange={handleCleanliness} required />
            {' '}
            {' '}
            <span className="user">Cleanliness</span>
          </label>
          <label htmlFor="quantity">
            <input className="rating-box" id="quantity" name="quantity" min="1" max="5" type="Number" value={acc} onChange={handleAccuracy} required />
            {' '}
            {' '}
            <span className="user">Accuracy</span>
          </label>
          <label htmlFor="quantity">
            <input className="rating-box" id="quantity" name="quantity" min="1" max="5" type="Number" value={comms} onChange={handleCommunication} required />
            {' '}
            {' '}
            <span className="user">Communication</span>
          </label>
          <label htmlFor="quantity">
            <input className="rating-box" id="quantity" name="quantity" min="1" max="5" type="Number" value={loc} onChange={handleLocation} required />
            {' '}
            {' '}
            <span className="user">Location</span>
          </label>
          <label htmlFor="quantity">
            <input className="rating-box" id="quantity" name="quantity" min="1" max="5" type="Number" value={check} onChange={handleCheckIn} required />
            {' '}
            {' '}
            <span className="user">Check-In</span>
          </label>
          <label htmlFor="quantity">
            <input className="rating-box" id="quantity" name="quantity" min="1" max="5" type="Number" value={val} onChange={handleValue} required />
            {' '}
            {' '}
            <span className="user">Value</span>
          </label>
          <br />
          <div className="user">
            <span>Your Review Here</span>
          </div>
          <br />
          <label>
            <textarea maxLength="800" className="addReview-post" value={message} onChange={handlePost} required />
          </label>
          <br />
          <input className="button" type="submit" value="Submit Review" />
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <button className="button" type="button" onClick={handleOpen}>
        Add Review
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
