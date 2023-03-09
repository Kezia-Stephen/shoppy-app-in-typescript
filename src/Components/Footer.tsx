import React from "react";
import useStyles from "../styles/styles";
import { Typography } from "@material-ui/core";

const Footer:React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer @2023
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          No copyrights! Just a simple shopping app 😊
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;
