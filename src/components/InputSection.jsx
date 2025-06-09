export default function InputSection({ handleIngredient }) {
  
  function handleSubmit(formData) {
    const ingredient = formData.get('ingredient')
    if (ingredient) {
      handleIngredient(ingredient)
    }
  }

  return (
    <section className="input-section">
      <form action={handleSubmit}>
        <input 
          type="text"
          placeholder="e.g. chicken breast"
          name="ingredient"
        />
        <button type="submit">
          + Add Ingredient
        </button>
      </form>
    </section>
  )
}