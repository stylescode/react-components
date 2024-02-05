// TODO
const { useState } = React;

const GroceryListItem = (props) => {

  const [hovered, setHovered] = useState(false);

  let style = {
    fontWeight: hovered ? 'bold': 'normal',
  };

  return (
    <li style={style} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>{props.item}</li>
  )
}

const GroceryList = (props) => {
  return (
    <ul>
      {props.groceryItems.map((item) => (
        <GroceryListItem item={item} />
      ))}
    </ul>
  )
}

ReactDOM.render(<GroceryList groceryItems={['Bacon', 'Bananas']} />, document.getElementById('app'));

