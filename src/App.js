import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
	const seeCart = useSelector((state) => state.ui.showCart);
	return (
		<Layout>
			{seeCart && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
