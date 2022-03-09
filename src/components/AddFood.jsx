import React, { useState } from 'react'

function AddFood(props) {

    const [name, setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [image, setImage] = useState ("")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addFoodProduct({name, calories, image})
    }

    const handleImageChange = (event) => {
        setImage(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleCaloriesChange = (event) => {
        setCalories(event.target.value)
    }



    
  return (
    <div>
<form onSubmit={handleSubmit}>

    <label htmlFor="photo">Picture:</label>
    <input type="text" name="foto" value={image} onChange={handleImageChange}/> 

    <label htmlFor="name">Food Product:</label>
    <input type="text" name="name" value={name} onChange={handleNameChange}/>

    <label htmlFor="calories">Calories:</label>
    <input type="number" name="calories" value={calories} onChange={handleCaloriesChange} min={0}/>

    <button>Add Product</button>

</form>


    </div>
  )
}

export default AddFood