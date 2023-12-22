import { motion } from 'framer-motion'
import { useState } from 'react'
import avatar from '/avatar.png'
import dribble from '/dribble.png'
import twitter from '/twitter.png'
import youtube from '/youtube.png'

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
const itemMotionDesktop = {
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 1, x: 0 },
}
const navLinks = [
	{ name: 'Home', href: '/', id: 1 },
	{ name: 'Blog', href: '/blog', id: 2 },
	{ name: 'Contact', href: '/contact', id: 3 },
]

const NavLinks = ({
	isMobile,
	className,
}: {
	isMobile: boolean
	className: string
}) => (
	<div className={className}>
		{navLinks.map(({ name, href, id }) => (
			<motion.a
				key={id}
				variants={isMobile ? itemMotion : itemMotionDesktop}
				href={href}
			>
				{name}
			</motion.a>
		))}
	</div>
)

export default function Nav() {
	const [toggled, setToggled] = useState(false)
	return (
		<nav className=' relative mx-8 mb-24 flex items-center justify-between pb-6 pt-12 font-medium md:mx-16 lg:mx-32'>
			<svg
				className='absolute bottom-0 left-1/2 -translate-x-1/2  '
				width='250'
				height='4'
				viewBox='0 0 250 4'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<motion.path
					animate={{ pathLength: 1, opacity: 1 }}
					initial={{ pathLength: 0, opacity: 0 }}
					transition={{ delay: 1, duration: 0.75 }}
					d='M2 2L428 1.99996'
					stroke='#282828'
					strokeWidth='2'
					strokeLinecap='round'
				/>
			</svg>

			<motion.div
				animate={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -25 }}
				transition={{ delay: 0.35 }}
				className='flex gap-12'
			>
        <a href="/">
				  <img src={avatar} alt='Hua profile picture' />
        </a>
				<motion.div className='hidden items-center gap-12 xl:flex'>
					<img src={dribble} alt='Dribble Account' />
					<img src={twitter} alt='Twitter Account' />
					<img src={youtube} alt='Youtube Channel' />
				</motion.div>
			</motion.div>
			{/* Title */}

      <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
      <span>
        <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-[1px] rounded-full bg-black transition-colors duration-200 group-hover:bg-slate-800" />
      <a href='/' className="text z-10 text-[#cbd5e1]">Hua.</a>
    </button>

      

			{/* Nav Items animating in  */}
			{toggled && (
				<motion.div
					variants={navMotion}
					animate='visible'
					initial='hidden'
					className='fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold'
				>
					<NavLinks
						className=' flex flex-col gap-24 text-lg '
						isMobile={true}
					/>
				</motion.div>
			)}
			<motion.div
				animate={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 25 }}
				transition={{ delay: 0.35 }}
				className='hidden xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg   '
			>
				<NavLinks className='flex gap-12' isMobile={false} />
			</motion.div>

			{/* Hamburger Toggle */}
			<motion.div
				animate={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 25 }}
				transition={{ delay: 0.35 }}
				onClick={() => setToggled((prevToggle) => !prevToggle)}
				className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden 
        `}
			>
				<motion.span
					animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
					className='line-1 block h-0.5 w-8 bg-content'
				></motion.span>

				<motion.span
					animate={{ width: toggled ? 0 : 24 }}
					className='line-2 block h-0.5 w-6 bg-content'
				></motion.span>
				<motion.span
					animate={{
						rotateZ: toggled ? -45 : 0,
						y: toggled ? -8 : 0,
						width: toggled ? 32 : 24,
					}}
					className='line-3 block h-0.5 w-4 bg-content'
				></motion.span>
			</motion.div>
		</nav>
	)
}
