import {useState, useEffect} from 'react'
import {Switch, Route, useLocation} from 'react-router-dom'
import {Home, Product, Genres, Genre, Cart, Search, NotFound, Chekout} from './pages'
import {Navbar, Footer, Loading} from './components'
import commerce from './lib/commerce'
import useAsyncEffect from 'use-async-effect'


const App = () => {
  const [categories, setCategories] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [newReleases, setNewReleases] = useState([])
  const [bestSellers, setBestSellers] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [ready, setReady] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const {pathname} = useLocation()

  const addToCart = async (id, quantity) =>{
    await commerce.cart.add(id, quantity)
      .then(res =>{
        setCart(res.cart)
      })
  }

  const updateCartQty = async (id, quantity) =>{
    await commerce.cart.update(id, {quantity})
      .then(res =>{
        setCart(res.cart)
      })
  }

  const removeFromCart = async (id) =>{
    await commerce.cart.remove(id)
      .then(res =>{
        setCart(res.cart)
      })
  }

  const emptyCart = async () =>{
    await commerce.cart.empty()
      .then(res => {
        setCart(res.cart)
      })
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const useCart = {
    emptyCart,
    removeFromCart,
    updateCartQty
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useAsyncEffect(async () =>{
    await commerce.categories.list({limit: 100})
    .then(async res =>{
      setCategories(res.data)
    })
    await commerce.products.list({limit: 100})
    .then(res =>{
      setAllProducts(res.data)
    })
    await commerce.products.list({category_slug: ['new-release'], limit: 100})
    .then(res =>{
      setNewReleases(res.data)
    })
    await commerce.products.list({category_slug: ['best-seller'], limit: 100})
    .then(res =>{
      setBestSellers(res.data)
    })
    await commerce.cart.retrieve()
    .then(res => {
      setCart(res)
      setReady(true)
    })
  }, [])

  useEffect(() =>{
    window.scrollTo(0,0);
  }, [pathname])

  return (
    ready?
    <div className="tran opacity-0">
      <Navbar totalItems={cart.total_items}/>
        <Switch>
          <Route path="/" exact>
            <Home products={allProducts} newReleases={newReleases} bestSellers={bestSellers} onAddToCart={addToCart}/>
          </Route>
          <Route path="/record/:id">
            <Product products={allProducts} onAddToCart={addToCart}/>
          </Route>
          <Route path="/genres" exact>
            <Genres categories={categories}/>
          </Route>
          <Route path="/genres/:genre">
            <Genre products={allProducts} categories={categories}/>
          </Route>
          <Route path="/best-selling">
            <Genre products={allProducts} categories={categories}/>
          </Route>
          <Route path="/new-releases">
            <Genre products={allProducts} categories={categories}/>
          </Route>
          <Route path="/artist/:genre">
            <Genre products={allProducts} categories={categories}/>
          </Route>
          <Route path="/cart">
            <Cart cart={cart} useCart={useCart}/>
          </Route>
          <Route path="/search">
            <Search products={allProducts}/>
          </Route>
          <Route path="/checkout">
            <Chekout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
    </div>
    : <Loading/>
  );
}

export default App;
