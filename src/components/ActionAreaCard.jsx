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
  isDisabled,
  ...props
}) => {
  return (
    <Card className="w-32 lg:w-64" sx={{ borderRadius: 5 }}>
      <CardActionArea
        component={RouterLink}
        to={redirectLink}
        disabled={isDisabled}
      >
        <CardMedia
          component="img"
          image={`${imageLink}`}
          alt={`${featureName}`}
        />
        <CardContent>
          {isDisabled ? (
            <div className="text-24px font-semibold text-center text-zinc-500">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {featureName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </div>
          ) : (
            <div className="text-24px font-semibold text-center">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {featureName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
