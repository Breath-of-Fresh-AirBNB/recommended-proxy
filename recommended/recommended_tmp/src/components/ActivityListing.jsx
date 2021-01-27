/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';

const Listing = styled.div`
  font-family: Montserrat, sans-serif;
  color: #222222;
  border: none;
  background-color: #F7F7F7;

  & p {
    margin: 0;
  }
`;

const Reviews = styled.div`
  display: flex;
  align-items: center;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  margin-top: 13px;

  & .star {
    padding-right: 5px;
    color: #FD385C;
  }

  & .averageRating {
    padding-right: 5px;
  }

  & .reviews {
    color: grey;
  }
`;

const Name = styled.div`
    margin-top: 3px;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 400;
`;

const Rate = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3px;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 400;

    & .rate {
      font-weight: 600;
      margin-right: 2px;
    }
`;

const useStyles = makeStyles({
  root: {
    width: 171,
    boxShadow: 'none',
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
  },
  media: {
    height: 228,
    borderRadius: 10,
  },
  content: {
    padding: '0',
  },
});

const ActivityListing = ({ activity }) => {
  const classes = useStyles();

  return (
    <div className="activityListing">
      <Listing>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={activity.imageUrl}
              title={activity.name}
            />
            <CardContent className={classes.content}>
              <Reviews>
                <p className="star">
                  ★
                  {' '}
                </p>
                <p className="averageRating">
                  {activity.averageRating}
                  {' '}
                </p>
                <p className="reviews">
                  {' '}
                  (
                  {activity.reviews}
                  )
                </p>
              </Reviews>
              <Name>
                <p>
                  {activity.name}
                </p>
              </Name>
              <Rate>
                <p className="rate">
                  From $
                  {activity.rate}
                </p>
                <p>
                  / person
                </p>
              </Rate>
            </CardContent>
          </CardActionArea>
        </Card>
      </Listing>
    </div>
  );
};

export default ActivityListing;
