import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrder from "./screens/PlaceOrder";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container"> 
        <header className="row">
        <Header></Header>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/register" component={RegisterScreen} exact></Route>
          <Route path="/signin" component={SigninScreen} exact></Route>
          <Route path="/shipping" component={ShippingScreen} exact></Route>
          <Route path="/payment" component={PaymentScreen} exact></Route>
          <Route path="/placeorder" component={PlaceOrder} exact></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">
          <Footer></Footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
