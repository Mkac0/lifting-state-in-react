const IngredientList = ({ ingredients, addStack }) => {
  return (
    <div>
    <h2>Ingredients</h2>
    <ul className="list">
      {ingredients.map((ingredient, index) => (
        <li 
          className="row"
          key={`${ingredient.name} - ${index}`} 
          style={{ backgroundColor: ingredient.color }}
        >
          {ingredient.name}
          <button className="add" onClick={() => addStack(ingredient)}>+</button>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default IngredientList;