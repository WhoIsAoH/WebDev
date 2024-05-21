import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1.3rem",
    background: "white",
    borderRadius: "50px",
    width: "200px",
    padding: "0.3rem 1rem",
    color: "black"
  },
  crypto: {
    color: "#c18901"
  },
  select: {
    width: 100,
    height: 40,
    marginLeft: 15,
  },
  nav: {
    backgroundColor: "#c18901",
    padding: "0",
  },
  supply: {
    fontSize: "1.2rem",
    margin: "0.5rem 0rem",
    "& span": {
      color: "#c18901"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    }
  }
}));

export default useStyles;
