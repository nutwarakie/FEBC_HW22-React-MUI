import Grid from '@mui/material/Grid';
import ProductsCard from '../components/ProductsCard';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <>
    <NavBar/>
    <h1>All Products</h1>
            <Grid container columnSpacing={1} rowSpacing={5} display="flex" justifyContent="center">
                
                <Grid item lg={4} display="flex" justifyContent="center">
                    <ProductsCard imgsrc='/src/images/Product1.png'productname='Discord Go Nitro ' productprice='฿3,490'/>
                </Grid>
                <Grid item lg={4} display="flex" justifyContent="center">
                    <ProductsCard imgsrc='/src/images/Product2.png'productname='Hexgears X-1 Wireless Low Profile' productprice='฿2,000'/>
                </Grid>
                <Grid item lg={4} display="flex" justifyContent="center">
                    <ProductsCard imgsrc='/src/images/Product3.png'productname='Kono 67° Keyboard by Kono Store' productprice='฿4,000'/>
                </Grid>
                <Grid item lg={4} display="flex" justifyContent="center">
                    <ProductsCard imgsrc='/src/images/Product4.png' productname='Discord TKL ' productprice='฿2,500'/>
                </Grid>
                <Grid item lg={4} display="flex" justifyContent="center">
                    <ProductsCard imgsrc='/src/images/Product5.png'productname='WhiteFox Eclipse ' productprice='฿3,000'/>
                </Grid>
                <Grid item lg={4} display="flex" justifyContent="center">
                    <ProductsCard imgsrc='/src/images/Product7.png'productname='Hexgears Nova - Metal RGB' productprice='฿1,299'/>
                </Grid>
            </Grid>
    </> 
  )
}

export default Home