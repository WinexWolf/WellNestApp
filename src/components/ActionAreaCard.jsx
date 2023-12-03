import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ActionAreaCard = ({
  imageLink,
  featureName,
  description,
  redirectLink = "/",
  ...props
}) => {
  return (
    <Card sx={{ width: 250 }}>
      <CardActionArea component={RouterLink} to={redirectLink}>
        <CardMedia
          component="img"
          image={`${imageLink}`}
          alt={`${featureName}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {featureName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
