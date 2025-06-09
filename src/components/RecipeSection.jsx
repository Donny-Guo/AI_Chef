import Markdown from 'react-markdown'

export default function RecipeSection({recipe, ref}) {
  return (
    <section className="recipe-section">
      <h3 ref={ref}>
        Suggested Recipe:
      </h3>
      <div className="markdown-content">
        <Markdown>
          {recipe}
        </Markdown>
      </div>
      
    </section>
  )
}