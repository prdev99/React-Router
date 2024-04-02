import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState([]);
  const navigate = useNavigate();

  async function createProduct() {
    const formData = new FormData();
    formData.append("product[title]", title);
    formData.append("product[body]", body);
    formData.append("product[price]", price);
    formData.append("product[file]", file);

    try {
      let result = await fetch("http://localhost:3001/products", {
        method: "POST",
        body: formData,
      });

      if (result.ok) {
        const data = await result.json();
        console.log("Product created successfully");
        navigate(`/product/${data.id}`);
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  return (
    <>
      <div className="col-sm-6 offset-sm-3">
        <h1>AddProduct Page</h1>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
        <br />
        <textarea
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="file"
          placeholder="File"
          onChange={(e) => setFile(e.target.files[0])}
          className="form-control"
        />
        <br />
        <Button onClick={createProduct}>Create Product</Button>
      </div>
    </>
  );
};

export default ProductCreate;
