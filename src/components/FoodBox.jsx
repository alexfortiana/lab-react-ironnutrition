import React, { useState } from 'react';

function FoodBox(props) {
  const { name, calories, image } = props.eachFoodProduct;

  const [quantity, setQuantity] = useState(0)
  

  const handleChange = (event) => {
    setQuantity(event.target.value)


  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addFoodOfToday({name, image, calories, quantity})

  }


  return (
    <div className="food-card">
      <img src={image} alt="" width={50} />

      <p> {calories} cal</p>
      <h4> {name} </h4>


      <form onSubmit={handleSubmit}>
      <input type="number" name='quantity' value={quantity} onChange={handleChange} />
      <button>+</button>
      </form>



    </div>
  );
}

export default FoodBox;
