import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Komisi } from './pages/Komisi';
import { Peraturan } from './pages/Peraturan';
import { PertanyaanAndJawaban } from './pages/PertanyaanAndJawaban';

export const MainRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage/>} />
				<Route path='/Komisi' element={<Komisi/>} />
				<Route path='/Peraturan' element={<Peraturan/>} />
				<Route path='/PertanyaanAndJawaban' element={<PertanyaanAndJawaban/>} />
			</Routes>
		</Router>
	);
}