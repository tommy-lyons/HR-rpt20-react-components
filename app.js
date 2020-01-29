// TODO
// GroceryListItem
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    }

    return (
      <li style={style} onMouseEnter={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

  var GroceryList = (props) => (
    <ul>
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  );

  var App = () => (
    <div>
      <h2>Grocery List</h2>
      <GroceryList items={['Cucumbers', 'Kale']}/>
    </div>
  );

// to render the Grocerylist to index.html
ReactDOM.render(<App />, document.getElementById('app'))


