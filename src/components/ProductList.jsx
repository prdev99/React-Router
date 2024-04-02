import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState("");
  const [product_id, setProductId] = useState(null);

  useEffect(() => {
    listProduct();
  }, []);

  const listProduct = () => {
    fetch("http://localhost:3001/products")
      .then((result) => {
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        return result.json();
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log("Delete successfully");
        listProduct();
      });
    });
  };

  const selectData = (id) => {
    const selectedProduct = data.find((product) => product.id === id);
    setTitle(selectedProduct.title);
    setBody(selectedProduct.body);
    setPrice(selectedProduct.price);
    setFile(selectedProduct.file_url);
    setProductId(selectedProduct.id);
  };

  const updateProduct = () => {
    let item = { title, body, price, file, product_id };
    fetch(`http://localhost:3001/products/${product_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.log("product update successfully");
        listProduct();
      });
    });
  };

  return (
    <>
      <h1>Product List</h1>
      <Table border={1}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Body</th>
            <th>Price</th>
            <td>Image</td>
            <td>Operation</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={"/product/" + item.id}>{item.id}</Link>
              </td>
              <td>
                <Link to={"/product/" + item.id}>{item.title}</Link>
              </td>
              <td>
                <Link to={"/product/" + item.id}>{item.body}</Link>
              </td>
              <td>
                <Link to={"/product/" + item.id}>{item.price}</Link>
              </td>
              <td>
                <Link to={"/product/" + item.id}>
                  <img
                    src={item.file_url}
                    width={100}
                    height={100}
                    alt="Product"
                  />
                </Link>
              </td>
              <td>
                <Button onClick={() => deleteProduct(item.id)}>Delete</Button>
              </td>
              <td>
                <Button onClick={() => selectData(item.id)}>Update</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={file}
          onChange={(e) => setFile(e.target.value)}
        />
        <br />
        <button onClick={updateProduct}>Update Product</button>
      </div>
    </>
  );
};
export default ProductList;
