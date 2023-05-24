import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Inicio from './pages/Inicio'
import TermsOfUse from './pages/TermsOfUse'
import Admin from './pages/Admin'
import Consultation from './pages/Consultation'
import Result from './pages/Result'


const App = () => {
	return (
		<div>
			<BrowserRouter>
                <Routes>
				<Route path="/" element={<Login/>} />
				<Route path="/register"  element={<Register/>} />
                <Route path="/inicio"  element={<Inicio/>} />
				<Route path="/TermsOfUse" element= {<TermsOfUse/>}/>
				<Route path="/login-admin" element= {<Admin/>}/>
				<Route path="/consultation" element= {<Consultation/>}/>
				<Route path="/result" element= {<Result/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App