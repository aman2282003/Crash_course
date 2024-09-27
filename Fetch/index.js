async function getCetogeriesData() {
  try {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const res = await data.json();
    console.log(res.meals);
  } catch (error) {
    console.log(error);
  }
}

async function getingredientdata() {
  try {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
    );
    const res = await data.json();
    console.log(res.meals);
  } catch (error) {
    console.log(error);
  }
}
