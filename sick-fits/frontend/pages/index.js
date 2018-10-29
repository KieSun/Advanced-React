import Link from 'next/link'

const Home = props => (
	<div>
		<div>Home</div>
		<Link href="/sell">
			<a>Sell</a>
		</Link>
	</div>
)

export default Home