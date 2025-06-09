import "./App.css"
import Header from "./components/Header"
import InputSection from "./components/InputSection"
import IngredientSection from "./components/IngredientSection"
import GetRecipeSection from "./components/GetRecipeSection"
import RecipeSection from "./components/RecipeSection"
import {useState, useRef, useEffect} from 'react'

export default function App() {

  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState("")
  const recipeSection = useRef(null)

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [recipe])

  function addIngredient(newIngredient) {
    if (!ingredients.includes(newIngredient)) {
      setIngredients(prev => [
        ...prev,
        newIngredient
      ])
    }
  }
  const api_url = "https://chef-api.onrender.com/api/claude"
  // test:
  // const api_url = "http://localhost:5000/api/claude"

  async function getRecipe() {
    const response = await fetch(api_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients
      })
    })
    const result = await response.json()
    setRecipe(result['response'])
  }

  return (
    <main>
      <Header />

      <section className="main-section">
        <InputSection handleIngredient={addIngredient} />

        <IngredientSection ingredients={ingredients} />

        {ingredients.length >= 2 && <GetRecipeSection getRecipe={getRecipe}/>}

        {recipe && <RecipeSection recipe={recipe} ref={recipeSection}/>}
      </section>
      
      
    </main>
  )
}