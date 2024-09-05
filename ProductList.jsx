import React, { useState, useEffect } from "react";

function App() {
  const [list, setList] = React.useState([]);
  React.useEffect(async () => {
    const fetchRes = await fetch("https://dummyjson.com/products");
    const data = await fetchRes.json();
    setList(data.products);
  }, []);

  return (
    <>
      <div>
        <h1>Product List - {list.length}</h1>
        <table border={`1`}>
          <thead>
            <th>ProductId</th>
            <th>Product Name</th>
            <th>Quanity</th>
            <th>Price</th>
            <th>Image</th>
          </thead>
          <tbody>
            {list.map((l) => (
              <tr>
                <td>{l.id}</td>
                <td>{l.title}</td>
                <td>{l.stock}</td>
                <td>{l.price}</td>
                <td>{<img src={l.images[0]} width={60} Alt="NoImage" />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
