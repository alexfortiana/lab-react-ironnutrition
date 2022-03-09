import React, { useState } from 'react';
import './App.css';
import AddFood from './components/AddFood';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';
import TodaysFood from './components/TodaysFood';
import foods from './foods.json';


function App() {


  const [foodProduct, setFoodProduct] = useState(foods)
  const [showForm, setShowForm] = useState(false)
  const [productsToRender, setProductsToRender] = useState(foods)
  const [todaysFood, setTodaysFood] = useState([])
  
  const addFoodProduct = (newFoodProduct) => {
    setFoodProduct([newFoodProduct, ...foodProduct])
    setProductsToRender([newFoodProduct, ...foodProduct])

  }

  const searchProduct = (searchQuery) => {
    const filterProducts = foodProduct.filter((eachFoodProduct) => {
      return eachFoodProduct.name.toLowerCase().startsWith(searchQuery)
    })

    setProductsToRender(filterProducts)

    

  }

  
  const addFoodOfToday = (productToday) => {
    setTodaysFood([...todaysFood, productToday])

  }


  
  return (
    <div className="App">



          <SearchBar searchProduct={searchProduct}/>

          <h5>Add new food</h5>
          <button onClick={ () => setShowForm(!showForm)} >
          {showForm ? "Unshow" : "Show"}
           
          </button>
         {showForm && <AddFood  addFoodProduct={addFoodProduct} />}  

          
          
          
          <h5>Food list</h5>
          {productsToRender.map((eachFoodProduct, index) => {
         return (
         <FoodBox eachFoodProduct={eachFoodProduct} key={index + eachFoodProduct.name} addFoodOfToday={addFoodOfToday}/>
         )
       })}


        <TodaysFood todaysFood={todaysFood} />

       
        
      
    </div>
  );
}

export default App;
