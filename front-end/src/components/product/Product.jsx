import React, { useEffect, useState } from "react";

function Product({ addToCart }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Fetching data failed");
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {data.map((product, index) => (
          <div
            key={index}
            style={{ border: "1px solid #ccc", padding: "20px" }}
          >
            <img width="30%" src={product.image} alt={product.title} />
            <div style={{ textAlign: "center" }}>
              <h3>{product.title}</h3>
              <p>{product.price}$</p>
              <br></br>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
