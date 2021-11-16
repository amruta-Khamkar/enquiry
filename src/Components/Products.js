import React, {  useState ,useEffect} from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';

// let count=0;
export  default function Product() {

 const[productData,setProductData]=useState([])

   
useEffect(() => {
    axios.get(" http://localhost:3001/Products").then((res)=>{
        setProductData(res.data)
   })
}, [])
  
    
        return (
            <div>
               <h1 className="text-center"> Our Products</h1>
                {productData.map(pro =>
                    <Card  className="mx-4 my-5"  style={{ width: '18rem',display:"inline-block" }}>
                    <Card.Img variant="top" src={pro.imgsrc} style={{width:"290px",height:"300px"}} />
                    <Card.Body>
                      <Card.Title>{pro.ProductName}</Card.Title>
                      <Card.Text>
                      Price :  <span className="text-danger fw-bold" >{pro.Price}</span>
                      Quantity :  <span className="text-danger fw-bold" >{pro.Quantity}</span>
                        
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )}


                
            </div>
        )
    
}

