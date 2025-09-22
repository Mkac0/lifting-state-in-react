const IngredientList = ({ ingredients, addStack }) => {
  return (
    <div>
    <h2>Ingredients</h2>
    <ul>
      {ingredients.map((ingredient, index) => (
        <li 
          key={`${ingredient.name} - ${index}`} 
          style={{ backgroundColor: ingredient.color }}
        >
          {ingredient.name}
          <button onClick={() => addStack(ingredient)}>Add</button>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default IngredientList;