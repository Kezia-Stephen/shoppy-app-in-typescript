import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@material-ui/core";

// const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
// const payments = [
//   { detail: "Visa" },
//   { detail: "Mr John Smith" },
//   { detail: "xxxx-xxxx-xxxx-1234" },
//   { detail: "04/2024" },
// ];

interface cartitemstype{
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;

}

interface PaymentDetailsType{
  cardname: string;
  cardnumber: string;
  expiryDate: string;
  cvv: string;
}

interface AddressDetailsType{
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface ReviewPageProps{
  cart: cartitemstype[];
  paymentDetails: PaymentDetailsType;
  addressDetails: AddressDetailsType;
}


const Review:React.FC<ReviewPageProps> = ({ cart, paymentDetails, addressDetails }) => {
  // Calculating the Total Price
  const allPrice = cart.map((x:cartitemstype) => x.price);
  const totalPrice = allPrice.reduce((acc:number, cur:number) => acc + cur, 0);

  // console.log("allPrice:", allPrice);
  console.log("totalPrice:", totalPrice);

  return (
    <React.Fragment>
      <h5>Order summary</h5>
      <List disablePadding>
        {cart.map((product:cartitemstype) => (
          <ListItem key={product.id} 
          
          >
            <ListItemText primary={product.title} />
            <Typography variant="body2">${product.price}</Typography>
          </ListItem>
        ))}

        <ListItem 
       
        >
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" 
          
          >
            ${totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <h5>Shipping</h5>
          <span>{addressDetails.firstName} </span>
          <span>{addressDetails.lastName},</span>
          <p>
            {addressDetails.address1}, {addressDetails.city},
            {addressDetails.state}, {addressDetails.zip},
            {addressDetails.country}.
          </p>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <h5>Payment details</h5>

          {/* <Grid item xs={6}>
                <Typography>Card Name</Typography>
                <Typography>Card Holder</Typography>
                <Typography>Card Number</Typography>
                <Typography>Expiry</Typography>
              </Grid> */}

          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <p>Card Name: {paymentDetails.cardname}</p>
                <p>Card Number: {paymentDetails.cardnumber}</p>
                <p>Expiry date:{paymentDetails.expiryDate}</p>
                {/* <p gutterBottom>{paymentDetails.cvv}</p> */}
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;
