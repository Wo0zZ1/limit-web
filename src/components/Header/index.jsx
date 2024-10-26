import { Link } from 'react-router-dom'

import Logo from '../logo'

const index = () => {
	return (
		<header className='w-full bg-white h-24 px-20 py-4 shadow-md'>
			<div className='container w-full m-auto h-full flex justify-between items-center'>
				<Logo />
				<Link
					to='/definition-to-limit'
					className='flex text-3xl py-3 px-5 rounded-xl bg-[#8d98e8bd] hover:bg-[#8D97E8] transition-colors text-[#333333] font-bold uppercase'>
					Go to definition
				</Link>
			</div>
		</header>
	)
}
export default index
