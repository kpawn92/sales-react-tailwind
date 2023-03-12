import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCartContext from './context/ShoppingCartContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BeveragesPage from './pages/BeveragesPage';
import FoodsPage from './pages/FoodsPage';
import SteelPage from './pages/SteelPage';
import CartPage from './pages/CartPage';

const App = () => {
	return (
		<ShoppingCartContext>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/beverages' element={<BeveragesPage />} />
						<Route path='/foods' element={<FoodsPage />} />
						<Route path='/steel' element={<SteelPage />} />
						<Route path='/cart' element={<CartPage />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</ShoppingCartContext>
	);
};

export default App;
