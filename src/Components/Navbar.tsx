import {
  AppBar,
  Avatar,
  Badge,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Toolbar,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import {
  DeleteRounded,
  Loyalty,
  ShoppingBasketRounded,
  ShoppingCartRounded,
} from "@material-ui/icons";
import React from "react";
import useStyles from "../styles/styles";
import { useNavigate } from "react-router-dom";

interface cartitemstype{

  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;

}

interface NavbarPropsType{
  cart: cartitemstype[];
  handleDelete: Function;
}


const Navbar:React.FC<NavbarPropsType> = ({ cart, handleDelete }) => {
  let navigate = useNavigate();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCart = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="sticky"
      // lg={12} 
      >
        <Toolbar className={classes.toolbar}>
          <ShoppingBasketRounded className={classes.icon} />
          <Typography variant="h5" className={classes.navitem}>
            Shoppy
          </Typography>
          <Typography variant="h6" className={classes.navitem}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.navitem}>
            Products
          </Typography>
          <Typography variant="h6" className={classes.navitem}>
            Pricing
          </Typography>
          <Badge badgeContent={cart?.length || 0} color="secondary">
            <ShoppingCartRounded
              className={classes.iconcart}
              onClick={handleCart}
            />
          </Badge>
          <Popover
            id={"simple-popover"}
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <List className={classes.list}>
              {cart.map((product:cartitemstype, index:number) => (
                <ListItem key={index} className={classes.listitem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Thumbnail Image"
                      src={product.thumbnail}
                      className={classes.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.title}
                    secondary={"₹" + product.price}
                  />
                  <DeleteRounded
                    className={classes.listicon}
                    onClick={() => handleDelete(index)}
                  />
                </ListItem>
              ))}
              {Array.isArray(cart) && cart.length ? (
                <Typography align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<Loyalty />}
                    onClick={() => {
                      navigate("/checkout", { state: { cart } });
                    }}
                  >
                    Proceed to checkout
                  </Button>
                </Typography>
              ) : (
                <Typography variant="body1" className={classes.cartempty}>
                  Nothing here. Add items to checkout 🙂
                </Typography>
              )}
            </List>
          </Popover>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
