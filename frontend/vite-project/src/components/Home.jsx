import React, { useEffect, useState } from "react";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((data) => 
         setItems(data.meals))
      
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className="item-container">
      {items.map((item) => (
        <div key={item.idMeal} className="item">
          <img src={item.strMealThumb} alt={item.strMeal}  className="img"/>
           <div className="para">
          <p>{item.strMeal}</p>
          <p>#{item.idMeal}</p>
          </div>
         </div>
      ))}
    </div>
  );
}

export default Home;
