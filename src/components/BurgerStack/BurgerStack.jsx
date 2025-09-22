const BurgerStack = ({ stack, removeStack, clearStack }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <button onClick={clearStack} disabled={stack.length === 0}>
        Clear Stack
      </button>
      <ul>
        {stack.length === 0 && <li>No ingredients yet!</li>}
        {stack.map((ingredient, index) => (
          <li 
            key={index} 
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            <button onClick={() => removeStack(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;