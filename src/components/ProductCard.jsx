function ProductCard(props){
    return(
        <>
            <div className="product-card">
                <img src={props.url} alt="" className="product-image" />
                <h3 className="product-name">{props.name}</h3>
                <div>
                    
                </div>
                <p>120</p>
            </div>
        </>
                
    );
}

export default ProductCard;