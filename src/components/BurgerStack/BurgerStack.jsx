const BurgerStack = ({ stack, removeStack, clearStack }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <button className="clear" onClick={clearStack} disabled={stack.length === 0}>
        Clear Stack
      </button>
      <ul className="list">
        {stack.length === 0 && <li className="empty">No ingredients yet!</li>}
        {stack.map((ingredient, index) => (
          <li 
            className="row"
            key={index} 
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            <button className="remove" onClick={() => removeStack(index)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;