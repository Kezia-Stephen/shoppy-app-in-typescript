import React, { useState, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import {
  CssBaseline,
  AppBar,
  Box,
  Container,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@material-ui/core";
import { ShoppingBasketRounded } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import useStyles from "../styles/styles";

const steps = ["Shipping address", "Payment details", "Review your order"];

const theme = createTheme();

interface PaymentDetailsType{
  cardname: string;
  cardnumber: string;
  expiryDate: string;
  cvv: string;
}

interface PaymentDetailsActionType{
  type: string;
  payload:any;
}

const init = {
  cardname: "",
  cardnumber: "",
  expiryDate: "",
  cvv: "",
};

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

interface AddressDetailsActionType{
  type: string;
  payload:string;
}

const addressinit = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

interface cartitemstype{

  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;

}

const Checkout = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const classes = useStyles();
  let navigate = useNavigate();
  const { state } = useLocation();
  const { cart } = state;
  console.log("Checkout cart", cart);
  const handleNext:any = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack:any = () => {
    setActiveStep(activeStep - 1);
  };

  const paymentReducer = (paymentDetails:PaymentDetailsType, action:PaymentDetailsActionType) => {
    const { type, payload } = action;
    console.log("payload:", payload);

    switch (type) {
      case "cardname":
        return { ...paymentDetails, cardname: payload };
      case "cardnumber":
        return { ...paymentDetails, cardnumber: payload };
      case "expiryDate":
        return { ...paymentDetails, expiryDate: payload };
      case "cvv":
        return { ...paymentDetails, cvv: payload };
      case "setForm":
        return payload;
      case "reset":
        return init;
      default:
        return paymentDetails;
    }
  };

  const [paymentDetails, dispatchpayment] = useReducer(paymentReducer, init);
  console.log("paymentDetails:", paymentDetails);

  // const resetForm = () => dispatch({ type: "reset" });
  // const setForm = (val) => dispatch({ type: "setForm", payload: val });

  const addressReducer = (addressDetails:AddressDetailsType, action:AddressDetailsActionType) => {
    const { type, payload } = action;
    // console.log("payload", payload);
    switch (type) {
      case "firstName":
        return { ...addressDetails, firstName: payload };
      case "lastName":
        return { ...addressDetails, lastName: payload };
      case "address1":
        return { ...addressDetails, address1: payload };
      case "address2":
        return { ...addressDetails, address2: payload };
      case "city":
        return { ...addressDetails, city: payload };
      case "state":
        return { ...addressDetails, state: payload };
      case "zip":
        return { ...addressDetails, zip: payload };
      case "country":
        return { ...addressDetails, country: payload };
      default:
        return addressDetails;
    }
  };

  const [addressDetails, dispatchaddress] = useReducer(addressReducer,addressinit);
  console.log("addressDetails:", addressDetails);

  const getStepContent = (step:number, cart:cartitemstype[]) => {
    switch (step) {
      case 0:
        return (
          <AddressForm
            addressDetails={addressDetails}
            dispatchaddress={dispatchaddress}
          />
        );
      case 1:
        return (
          <PaymentForm
            paymentDetails={paymentDetails}
            dispatchpayment={dispatchpayment}
          />
        );
      case 2:
        return (
          <Review
            cart={cart}
            paymentDetails={paymentDetails}
            addressDetails={addressDetails}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
       
      >
        <Toolbar className={classes.toolbar}>
          <ShoppingBasketRounded className={classes.icon} />
          <Typography variant="h5" className={classes.navitem}>
            Shoppy
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md"
    
       >
        <Paper
          variant="outlined"
          
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} 
         
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                 
                  onClick={() => navigate("/")}
                >
                  Back to Homepage
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, cart)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} 
                 
                  >
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>

    
  );
};

export default Checkout;
