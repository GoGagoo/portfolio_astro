import { motion } from 'framer-motion'
import { useState } from 'react'

import { useMediaQuery } from '../../util/useMediaQuery'

import avatar from '/public/avatar.png'


const navMotion = {
	visible: {
		opacity: 1,

		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.15,
		},
	},
	hidden: {
		opacity: 0,
	},
}

const itemMotion = {
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 0, x: -100 },
}


export default function Nav() {
	const [toggled, setToggled] = useState(false)
	const matches = useMediaQuery('(min-width: 1280px)')

	return (
		<nav className='relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32'>
			<svg
				className='absolute bottom-0 left-1/2 -translate-x-1/2'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width='250'
				height={4}
				viewBox='0 0 250 4'
			>
				<path
					d='M2 2L428 2'
					strokeWidth={2}
					stroke='#282828'
					strokeLinecap='round'
				/>
			</svg>
			<div className=''>
				<img src={avatar.src} alt='Profile picture of Hua' />
			</div>

			{/* Title */}

			<h1 className='text-lg font-bold'>
				<a href='/'>Hua.</a>
			</h1>

			{matches && (
				<div className=' flex gap-12'>
					<a href='/'>Home</a>
					<a href='/services'>Services</a>
					<a href='/contact'>Contact</a>
				</div>
			)}

			{!matches && (
				<div
					onClick={() => setToggled((prevToggle) => !prevToggle)}
					className='space-y-1.5 cursor-pointer z-50'
				>
					<motion.span
						animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
						className='block h-0.5 w-8 bg-black'
					></motion.span>
					<motion.span
						animate={{ width: toggled ? 0 : 24 }}
						className='block h-0.5 w-6 bg-black'
					></motion.span>
					<motion.span
						animate={{
							rotateZ: toggled ? -45 : 0,
							y: toggled ? -8 : 0,
							width: toggled ? 32 : 16,
						}}
						className='block h-0.5 w-4 bg-black'
					></motion.span>
				</div>
			)}
			{toggled && !matches && (
				<motion.div
					animate={{ opacity: 1, x: 0 }}
					initial={{ opacity: 1, x: 25 }}
					className='fixed flex bg-white bottom-0 left-0 w-full h-full items-center justify-center'
				>
					<motion.div
						variants={navMotion}
						animate="visible"
						initial="hidden"
						className='flex flex-col gap-24 text-lg'
					>
						<motion.a variants={itemMotion} href='/'>Home</motion.a>
						<motion.a variants={itemMotion} href='/services'>Services</motion.a>
						<motion.a variants={itemMotion} href='/contact'>Contact</motion.a>
					</motion.div>
				</motion.div>
			)}
		</nav>
	)
}
