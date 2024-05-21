import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "none",
    height: 630,
    position: "relative",
    [theme.breakpoints.up("md")]: {
      backgroundImage: "url('src/assets/images/cryptosBanner.jpg')",
      backgroundRepeat: "no-repeat",
      height: 580,
      backgroundSize: "100%",
      filter: "brightness(0.7)",
    }
  },
  font: {
    fontWeight: "bolder",
    color: "red",
  },
  main: {
    fontSize: "5rem",
    "& span": {
      color: "#c18901"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "5rem",
    }
  },
  mainTitle: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "0rem",
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "6rem",
    }
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    color: "red",
    marginTop: "0rem",
    "& .alice-carousel__wrapper": {
      background: "#012536",
      borderRadius: "20px"
    }
  },
  carouselImage: {
    height: "auto",
    width: "100px",
    margin: "auto",
    backgroundColor: "#c18901",
    padding: "1rem",
    borderRadius: "100%",
    boxShadow: "rgba(0, 0, 255, 0.2) 0px 7px 29px 0px"
  },
  text: {
    color: "white",
    fontSize: "0.9rem",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    paddingBottom: "0.5rem"
  },
  textPrice: {
    color: "green",
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    paddingBottom: "0.5rem"
  },
  wrapper: {
    justifyContent: "center",
    display: "grid",
    backgroundColor: "transparent",
    marginTop: "1.2rem"
  },
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: "#c18901",
  },
  tableRow: {
    color: "white",
  },
  tableTitle: {
    margin: "1rem 0rem",
    fontWeight: "bold",
    fontSize: "2rem"
  },
  design: {
    color: "#c18901",
  },
  tableBody: {
    background: "black",
    color: "white",
  },
  tableImg: {
    height: "40px",
    width: "40px"
  },
  group: {
    display: "flex",
    columnGap: "2rem",
    alignItems: "center"
  },
  coinChange: {
    color: "green"
  },
  searchBox: {
    display: "block",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "0.5rem",

    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  searchText: {
    width: "100%",
    margin: "1rem 0rem",
    color: "white",
    "&:focus": {
      outline: "none",
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    }
  },
  pagination: {
    margin: "0.5rem auto",
    justifyContent: "center",
    display: "flex",
    "& .MuiPaginationItem-root": {
      color: "white",
    },
  },
  link: {
    color: "white"
  },
  infoTitle: {
    margin: "1rem 0rem",
    [theme.breakpoints.up("sm")]: {
      margin: "3rem 0rem",
    }

  },
  popularCoin: {
    fontSize: "2rem",
    color: "white",
    fontWeight: "bold",
    margin: "1rem 0rem",
    "& span": {
      color: "#c18901"
    }
  },
  statsWrapper: {
    background: "#c18901",
    padding: "1rem",
    borderRadius: "20px",
    "& svg": {
      height: "1rem",
      width: "1rem",
      border: "1px solid white",
      padding: "0.3rem",
      borderRadius: "100px"
    },
    marginBottom: "1rem",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "1rem",

    },
  },
  statsCount: {
    fontSize: "1.1rem"
  },
  boxWrapper: {
    display: "block",
    rowGap: "1rem",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      columnGap: "1rem",
      margin: "2rem 0rem",
    }
  },
  stats: {
    display: "flex",
    columnGap: "2rem",
    justifyContent: "center",
    alignItems: "center", // Default display block
    [theme.breakpoints.up("sm")]: {
      display: "flex", // Change to flex on screens larger than or equal to small size
      alignItems: "center",
      columnGap: "1rem",
      justifyContent: "center",
    },
  },
  priceButton: {
    color: "white !important",
    background: "#c18901",
    float: "inline-end",
    marginBottom: "1rem",
    "&:hover": {
      background: "white",
      color: "#c18901"
    },
    [theme.breakpoints.up("sm")]: {
      float: "none",
      marginBottom: "none",
    }

  }
}));

export default useStyles;
