import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

type productProps ={imgsrc:string,productname:string,productprice:string};

const ProductsCard = ({imgsrc,productname,productprice}:productProps) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={imgsrc}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {productname}
        </Typography>
        <Typography variant="h5" color="text.primary">
          {productprice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" ><Link to={`/product`} className='textbtn'>See detail</Link></Button>
      </CardActions>
    </Card>
  )
}

export default ProductsCard