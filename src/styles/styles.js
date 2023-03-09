import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  toolbar: {
    background: "linear-gradient(#3795BD,#3E54AC,#3A98B9)",
  },
  icon: {
    marginRight: "20px",
  },
  navitem: {
    paddingRight: "20px",
  },
  iconcart: {
    marginLeft: "65rem",
    cursor: "pointer",
  },

  cardgrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    // margin: "30px",
    flexDirection: "column",
  },
  cardmedia: {
    paddingTop: "56.25%", //16:9
  },
  cardtitle: {
    fontWeight: "bold",
  },
  carddesc: {
    fontStyle: "italic",
  },
  cardcontent: {
    flexGrow: 1,
  },
  button: {
    color: "#fff",
    background: "linear-gradient(#3795BD,#3E54AC,#3A98B9)",
    borderRadius: "18px",
    "&:disabled": {
      background: "linear-gradient(#86A3B8,#567189,#7B8FA1)",
    },
  },

  avatar: {
    width: "70px",
    height: "70px",
    margin: "20px 20px 20px 0",
  },
  list: {
    width: "100%",
    maxWidth: 360,
  },
  listitem: {
    padding: "10px",
    margin: "40px",
  },
  listicon: {
    marginRight: "40px",
    cursor: "pointer",
  },
  cartempty: {
    margin: "10px",
  },
  footer: {
    backgroundColor: "#fff",
    color: "#3E54AC",
    padding: "50px 0",
  },
}));

export default useStyles;
