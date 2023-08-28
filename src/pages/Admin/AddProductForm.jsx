import React, { useState } from 'react';

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imageLink, setImageLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform further actions here, such as sending the data to an API
    // For now, let's just log the form data
    console.log({
      productName,
      description,
      price,
      quantity,
      imageLink,
    });

    // Clear form fields
    setProductName('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setImageLink('');
  };

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productName" className="block font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className="mt-1 p-2 border w-full rounded-md"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
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
            min={1}
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
          <label htmlFor="imageLink" className="block font-medium">
            Image Link
          </label>
          <input
            type="url"
            id="imageLink"
            className="mt-1 p-2 border w-full rounded-md"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
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
