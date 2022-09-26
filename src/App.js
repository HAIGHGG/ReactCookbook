import Pages from './pages/Pages'
import Category from './components/Category'
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Nav to={'/'}>
					<GiKnifeFork />
					<Logo>delicious</Logo>
				</Nav>
				<Search />
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	)
}

const Logo = styled.div`
	
	font-size: 3rem;
	font-weight: 400;
	font-family: 'Lobster Two', cursive;
`

const Nav = styled(Link)`
	padding: 4rem 0rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-decoration: none;
	color: black;
	svg {
		font-size: 2rem;
	}
`

export default App
