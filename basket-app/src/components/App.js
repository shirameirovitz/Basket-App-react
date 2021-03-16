import "../App.css";
import Basket from "./Basket";
import Groceries from "./Groceries";


function App() {
const groceries = [
  { id: 1, name: "Strawberry" },
  { id: 2, name: "Blueberry" },
  { id: 3, name: "Orange" },
  { id: 4, name: "Banana" },
  { id: 5, name: "Apple" },
  { id: 6, name: "Carrot" },
  { id: 7, name: "Celery" },
  { id: 8, name: "Mushroom" },
  { id: 9, name: "Green Pepper" },
  { id: 10, name: "Eggs" },
  { id: 11, name: "Cheese" },
  { id: 12, name: "Butter" },
  { id: 13, name: "Chicken" },
  { id: 14, name: "Beef" },
  { id: 15, name: "Pork" },
  { id: 16, name: "Fish" },
  { id: 17, name: "Rice" },
  { id: 18, name: "Pasta" },
  { id: 19, name: "Bread" },
];
//add item +counter
const [counter, setCounter] = useState({});
function addItem(itemName) {
  if(!counter[itemName]){
    counter[itemName] = 1;
  }else {
    ++counter[itemName]
  }
  setState(Object.assign({},counter));
}
function removeItem(itemName) {
  if(counter[itemName] === 1) {
    delete counter[itemName];
  }
}

}
function App() {
  return (
    <div className="groceries-list">
      {groceries.map((item, index) => (
        <Groceries key={index} name={item.name} id={item.id} />
        ))}<br/>
        <Basket key={index} name={item.name} id={item.id} />
    </div>
  );
}

export default App;
