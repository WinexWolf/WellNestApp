import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const customButtonStyle = {
  borderRadius: '20px',
};

export default function ChallengeCard({ imgSrc, imgAlt, title, coinCnt, routeTarget, isCompleted }) {
  const selectedImgSrc = isCompleted ? imgSrc[1] : imgSrc[0];
  const buttonText = isCompleted ? 'COMPLETED' : `${coinCnt} Coins`

  return (
    <Card sx={{ maxWidth: 140, marginBottom: 3, borderRadius: 5 }}>
      <CardActionArea component={RouterLink} to={routeTarget} disabled={isCompleted}>
        <CardMedia
          component="img"
          alt={imgAlt}
          image={selectedImgSrc}
        />

        <CardContent sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 0, paddingBottom: 0 }}>
          {isCompleted ? (
            <div className="text-24px font-semibold text-center text-zinc-500">
              {title}
            </div>) : (
            <div className="text-24px font-semibold text-center">
              {title}
            </div>
          )}
        </CardContent>

        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            className="justify-center"
            style={customButtonStyle}
            disabled={isCompleted}
          >
            {buttonText}
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}