import logo from './logo.svg';
import './App.css';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Products img="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" model="MacBook" price="$2100" category="Mac"/>

      <Products img="https://www.digitaltrends.com/wp-content/uploads/2021/09/iphone-13-pro-review-dan-baker-35.jpg?p=1" model="iPhone 13 Pro" price="$1200" category="iPhone"/>

      <Products img="https://www.zdnet.com/a/img/resize/699c600903b6409f4147a4fecf902d82533586cc/2022/07/18/00dd0f1c-d79a-4df2-9e32-3bbbf1185d9a/apple-watch-series-7-best-apple-watch-models-compared.jpg?auto=webp&fit=crop&height=900&width=1200" model="Apple Watch Series 7" price="$600" category="Watch"/>
    </div>
  );
}

export default App;
