"use client";

import { useEffect, useState } from "react";

type Meal = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
};

type MealIdeasProps = {
    ingredient: string;
};

async function fetchMealIdeas(ingredient: string): Promise<Meal[]> {
    if (!ingredient) return [];

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        ingredient
    )}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: { meals: Meal[] | null } = await response.json();
    return data.meals ?? [];
}

export default function MealIdeas({ ingredient }: MealIdeasProps) {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [error, setError] = useState<string | null>(null);

    async function loadMealIdeas() {
        try {
            const results = await fetchMealIdeas(ingredient);
            setMeals(results);
            setError(null);
        } catch (e) {
            const message = e instanceof Error ? e.message : "Unknown error";
            setError(message);
            setMeals([]);
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">
                Meal Ideas {ingredient ? `for "${ingredient}"` : ""}
            </h2>

            {!ingredient && (
                <p className="text-gray-400">Select an item to see meal ideas.</p>
            )}

            {error && <p className="text-red-400">{error}</p>}

            {ingredient && !error && meals.length === 0 && (
                <p className="text-gray-400">No meals found.</p>
            )}

            <ul className="list-disc pl-5 space-y-1">
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}