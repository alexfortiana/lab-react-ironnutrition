import React from 'react';

function TodaysFood(props) {

const totalCalories = props.todaysFood.reduce((acc, elem) => {
    return acc + (elem.calories * elem.quantity)
}, 0)


  return (
    <div>
      <h4>Today's food</h4>

      {props.todaysFood.map((eachTodayFood) => {
        return (
          <div className="food-card">
            <img src={eachTodayFood.image} alt="" width={50} />

            <p> {eachTodayFood.calories * eachTodayFood.quantity} cal</p>
            <h4> {eachTodayFood.name} </h4>
            <h4>{eachTodayFood.quantity}</h4>
          </div>
        );
      })}

      <h5>Total Calories: {totalCalories} cal</h5>
    </div>
  );
}

export default TodaysFood;
