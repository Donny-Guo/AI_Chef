export default function IngredientSection(props) {
  const ingredientElement = props.ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))
  return (
    <section className="ingredient-section">
      <h3>
        Ingredients on hand:
      </h3>
      
      <ul>
        {ingredientElement}
      </ul>
    </section>
  )
}