import ProductCard from './components/ProductCard'
import './App.css'

const productData=[
     {
       name:"Apple",
       price:79.99,
       image_url:"apple.jpg"
     } ,
     {
      name:"Banana",
      price:50,
      image_url:"banana.png"
    } ,
    {
      name:"Grapes",
      price:90,
      image_url:"grapes.jpg"
    } ,
    {
      name:"Grapes",
      price:90,
      image_url:"grapes.jpg"
    } ,
    {
      name:"Grapes",
      price:90,
      image_url:"grapes.jpg"
    } ,
    {
      name:"Grapes",
      price:90,
      image_url:"grapes.jpg"
    } 

    ]


function App() {
  return (
    <div>

         <div className='product-container'>
          <h1 className='page-title'>Fruit Store</h1>
          <p className='page-subtitle'>Fresh fruits available</p>
      
         <div className='product-grid'>
           {
              productData.map((product,index)=>(
                <ProductCard key={index} title={product.price} name={product.name} url={product.image_url}/>
              ))

           }
           
         </div>
        </div>

    </div>
  )
}

export default App