import { Box, Container, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import useStyles from "./style";

const Banner = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.banner}>
        <Container>
          <div className={classes.mainTitle}>
            <Typography variant="" className={classes.main}>
              St Mary’s <span>Cryptos</span>
            </Typography>
            <Typography variant="h4">Take a step into the Crypto world</Typography>
            <Typography variant="h6">Those who believe in Bitcoin also believe in cleverness.</Typography>
          </div>
        </Container>
      </Box>
      <Carousel />
    </>
  );
};

export default Banner;
