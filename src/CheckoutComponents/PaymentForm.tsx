import React from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

interface PaymentDetailsType{
  cardname: string;
  cardnumber: string;
  expiryDate: string;
  cvv: string;
}

interface PaymentDetailsPageProps{
  dispatchpayment: any;
  paymentDetails: PaymentDetailsType;
}

const PaymentForm:React.FC<PaymentDetailsPageProps> = ({ dispatchpayment, paymentDetails }) => {
  console.log("dispatchpayment:", dispatchpayment);
  // const [carddetails, setCardDetails] = useState(init);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatchpayment({ type: name, payload: value });

    // return setCardDetails({
    //   ...carddetails,
    //   [name]: value,
    // });
  };
  // console.log("carddetails", carddetails);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            name="cardname"
            value={paymentDetails.cardname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            name="cardnumber"
            value={paymentDetails.cardnumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentForm;
