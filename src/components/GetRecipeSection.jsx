export default function GetRecipeSection({ getRecipe }) {
  return (
    <section className='get-recipe-section'>
      <div>
        <h4>
          Ready for a recipe?
        </h4>
        <p>
          Generate a recipe from your list of ingredients.
        </p>
      </div>

      <button onClick={getRecipe}>
        Get a recipe
      </button>
    </section>
  )
}