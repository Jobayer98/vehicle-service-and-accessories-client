import React, { useEffect, useState } from 'react';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

        fetch('http://localhost:9000/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          description,
          price: Number(price),
          quantity,
          image,
          category
        })
      }).then((res) => {
        if (res.status === 201) {
          alert("Product Added");
          setName('');
          setDescription('');
          setPrice('');
          setQuantity('');
          setImage('');
          setCategory('');
        }
      })
      .catch((err) => {
        console.log(err);
      });
    
  };

  return (
    <div className="max-w-lg mx-auto my-20 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 border w-full rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 p-2 border w-full rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="mt-1 p-2 border w-full rounded-md"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block font-medium">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            className="mt-1 p-2 border w-full rounded-md"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            min={1}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block font-medium">
            Category
          </label>
          <input
            type="text"
            id="category"
            className="mt-1 p-2 border w-full rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-medium">
            Image Link
          </label>
          <input
            type="url"
            id="image"
            className="mt-1 p-2 border w-full rounded-md"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
