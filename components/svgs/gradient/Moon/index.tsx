import clsx from 'clsx'
import styles from './index.module.css'
import { FC, SVGAttributes } from 'react'

const Moon: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg
			width={25}
			height={24}
			viewBox='0 0 25 24'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
			className={clsx(styles.moon, 'h-full w-full', props.className)}
		>
			<defs>
				<linearGradient id='light-gradient'>
					<stop offset='-10.37%' stopColor='#C2C2C2' />
					<stop offset='60.17%' stopColor='#C2C2C2' />
				</linearGradient>
			</defs>
			<path
				d='M12.5004 21.1004C9.96706 21.1004 7.81706 20.2171 6.05039 18.4504C4.28372 16.6837 3.40039 14.5337 3.40039 12.0004C3.40039 9.48372 4.28772 7.33772 6.06239 5.56239C7.83772 3.78772 9.98372 2.90039 12.5004 2.90039C12.7171 2.90039 12.9337 2.90872 13.1504 2.92539C13.3671 2.94206 13.5837 2.96706 13.8004 3.00039C13.1671 3.50039 12.6587 4.12539 12.2754 4.87539C11.8921 5.62539 11.7004 6.43372 11.7004 7.30039C11.7004 8.83372 12.2337 10.1337 13.3004 11.2004C14.3671 12.2671 15.6671 12.8004 17.2004 12.8004C18.0837 12.8004 18.9004 12.6127 19.6504 12.2374C20.4004 11.8627 21.0171 11.3587 21.5004 10.7254C21.5337 10.9254 21.5587 11.1337 21.5754 11.3504C21.5921 11.5671 21.6004 11.7837 21.6004 12.0004C21.6004 14.5171 20.7131 16.6631 18.9384 18.4384C17.1631 20.2131 15.0171 21.1004 12.5004 21.1004ZM12.5004 18.8254C13.8671 18.8254 15.1004 18.4587 16.2004 17.7254C17.3004 16.9921 18.1171 16.0337 18.6504 14.8504C18.3671 14.9171 18.0797 14.9711 17.7884 15.0124C17.4964 15.0544 17.2004 15.0671 16.9004 15.0504C14.8671 14.9837 13.1337 14.2421 11.7004 12.8254C10.2671 11.4087 9.51706 9.66706 9.45039 7.60039C9.45039 7.30039 9.46706 7.00439 9.50039 6.71239C9.53372 6.42106 9.58372 6.13372 9.65039 5.85039C8.46706 6.38372 7.50872 7.20039 6.77539 8.30039C6.04206 9.40039 5.67539 10.6337 5.67539 12.0004C5.67539 13.8837 6.34206 15.4921 7.67539 16.8254C9.00872 18.1587 10.6171 18.8254 12.5004 18.8254Z'
				className='fill-[url(#light-gradient)]'
			/>
		</svg>
	)
}

export default Moon
