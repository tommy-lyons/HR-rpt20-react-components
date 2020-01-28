// TODO

var GroceryListItem = (props) => (

  var onMouseHover = (event) => {
    console.log('I got clicked');
  };

  return (
    <ul>
      <li onMouseEnter={onMouseHover}>{props.items[0]}</li> // onHover,on
      <li>{props.items[0]}</li>
      <li>{props.items[1]}</li>
    </ul>
  );
}
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItem items={['Cucumbers', 'Kale']}/>

  </div>
);
// //////////z
// // to render the Grocerylist to index.html
ReactDOM.render(<App />, document.getElementById('app'))
// ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));
