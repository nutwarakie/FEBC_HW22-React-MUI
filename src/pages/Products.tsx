import Grid from '@mui/material/Grid';
import NavBar from "../components/NavBar"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import SpecCard from '../components/SpecCard';
import DetailCard from '../components/DetailCard';
import Rate from '../components/Rate';
import Reviews from '../components/Reviews';

const Products = () => {
  return (
    <>
    <NavBar/>
    <Grid container columnSpacing={4} rowSpacing={5} display="flex" justifyContent="center">
                
                <Grid item sm={6} display="flex" direction="column" alignItems="center" justifyContent="center" >
                    <img src="/src/images/Product1_detail.png" style={{width:'100%'}}/>
                    <Box sx={{ width: '100%' }} mt={2}>
                        <h3>Stock (75/100)</h3>
                        <LinearProgress variant="determinate" value={75}/>
                    </Box>
                </Grid>
                <Grid item sm={6} display="flex" direction="column" alignItems="center" justifyContent="center">
                  <DetailCard />
                  <SpecCard/>
                </Grid>
    </Grid>
    <Rate/>
    <Reviews/>
    </>
    
  )
}

export default Products