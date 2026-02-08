import ProductList from "./ProductList";


const MemoApp = () => {
   
    const products = [];

    for(let i = 0; i < 100; i++){
        products.push( {
            id:i + 1,
            file:`Продукт ${i + 1}`,
        })
    }

  return (
    <div>
        <ProductList products={products}/>
    </div>
  )
}

export default MemoApp