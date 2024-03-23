import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

async function fetchMealDetails(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals[0];
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [expandedId, setExpandedId] = useState(null);
    const [ingredientList, setIngredientList] = useState([]);
    const [mealDetails, setMealDetails] = useState(null);


    const loadMealIdeas = async (ingredient) => {
        const mealsFromAPI = await fetchMealIdeas(ingredient);
        if (mealsFromAPI === null) setMeals([]);
        else setMeals(mealsFromAPI);
    }

    const loadMealDetails = async (id) => {
        const mealDetails = await fetchMealDetails(id);
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = mealDetails[`strIngredient${i}`];
            if (ingredient === "" || ingredient === null) break;
            const weight = mealDetails[`strMeasure${i}`];
            const ingredientString = `${ingredient} (${weight})`;
            ingredients.push(ingredientString);
        }
        setIngredientList(ingredients);
    }

    const mealIdeaOnClick = (id) => {
        if (id !== expandedId) setExpandedId(id);
    }

    useEffect(() => {
        if (ingredient === "") return;
        loadMealIdeas(ingredient);
    }, [ingredient]);

    useEffect(() => {
        if (expandedId === null) return;
        loadMealDetails(expandedId);
    }, [expandedId]);

    return (
        <div>
            {
                ingredient === "" ? <h1 className="text-2xl m-3">Select an ingredient to see meal ideas</h1> :
                    meals.length === 0 ? <h1 className="text-2xl m-3">No meals found for {ingredient}</h1> :
                        <div>
                            <h1 className="text-2xl m-3">Here are some meal ideas using {ingredient}:</h1>
                            <ui className="list-none">
                                {meals.map(meal => {
                                    return <a href="#" key={meal.idMeal}>
                                        <li className="w-80" onClick={() => mealIdeaOnClick(meal.idMeal)}>
                                            <div className=" bg-slate-800 w-80 m-5 ml-3 rounded-md hover:bg-sky-700">
                                                <div className="m-2 p-2">
                                                    <h1 className=" text-xl font-semibold">{meal.strMeal}</h1>
                                                    {
                                                        expandedId === meal.idMeal && <div>
                                                            <p className="ml-4">Ingredients needed:</p>
                                                            <ui className="list-none">
                                                                {ingredientList.map(ingredient => {
                                                                    return <li className="ml-8" key={ingredient}>{ingredient}</li>
                                                                })}
                                                            </ui>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </li>
                                    </a>

                                })}
                            </ui>
                        </div>
            }
        </div >
    )
}