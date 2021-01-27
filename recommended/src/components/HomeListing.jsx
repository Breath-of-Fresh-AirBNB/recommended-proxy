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

const Accomodations = styled.div`
    margin-top: 3px;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 400;
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
    width: 267,
    boxShadow: 'none',
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
  },
  media: {
    height: 178,
    borderRadius: 10,
  },
  content: {
    padding: '0',
  },
});

const HomeListing = ({ home }) => {
  const classes = useStyles();

  return (
    <div className="homeListing">
      <Listing>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={home.imageUrl}
              title={home.name}
            />
            <CardContent className={classes.content}>
              <Reviews>
                <p className="star">
                  ★
                  {' '}
                </p>
                <p className="averageRating">
                  {home.averageRating}
                  {' '}
                </p>
                <p className="reviews">
                  {' '}
                  (
                  {home.reviews}
                  )
                </p>
              </Reviews>
              <Accomodations>
                <p className="accommodationType">
                  {home.accommodationType}
                  {' '}
                  •
                  {' '}
                  {home.beds}
                  {' '}
                  beds
                </p>
              </Accomodations>
              <Name>
                <p>
                  {home.name}
                </p>
              </Name>
              <Rate>
                <p className="rate">
                  $
                  {home.rate}
                </p>
                <p>
                  / night
                </p>
              </Rate>
            </CardContent>
          </CardActionArea>
        </Card>
      </Listing>
    </div>
  );
};

export default HomeListing;
