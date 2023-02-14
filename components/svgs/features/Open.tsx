import { FC, SVGAttributes } from 'react'

const Open: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M7.56678 10.8004H20.234V7.76678C20.234 6.61158 19.8228 5.62278 19.0004 4.80038C18.178 3.97798 17.178 3.56678 16.0004 3.56678C14.8228 3.56678 13.8228 3.97798 13.0004 4.80038C12.178 5.62278 11.7668 6.61158 11.7668 7.76678H9.56678C9.56678 5.98918 10.1945 4.47265 11.45 3.21718C12.706 1.96172 14.2228 1.33398 16.0004 1.33398C17.778 1.33398 19.2948 1.96172 20.5508 3.21718C21.8063 4.47265 22.434 5.98918 22.434 7.76678V10.8004H24.434C25.0559 10.8004 25.5836 11.0169 26.0172 11.45C26.4503 11.8836 26.6668 12.4116 26.6668 13.034V27.1004C26.6668 27.7228 26.4503 28.2505 26.0172 28.6836C25.5836 29.1172 25.0559 29.334 24.434 29.334H7.56678C6.94492 29.334 6.41718 29.1172 5.98358 28.6836C5.55052 28.2505 5.33398 27.7228 5.33398 27.1004V13.034C5.33398 12.4116 5.55052 11.8836 5.98358 11.45C6.41718 11.0169 6.94492 10.8004 7.56678 10.8004V10.8004ZM16.0004 22.6668C16.7113 22.6668 17.3225 22.4169 17.834 21.9172C18.3449 21.4169 18.6004 20.8113 18.6004 20.1004C18.6004 19.4113 18.3449 18.8001 17.834 18.2668C17.3225 17.7335 16.7113 17.4668 16.0004 17.4668C15.2895 17.4668 14.6783 17.7335 14.1668 18.2668C13.6559 18.8001 13.4004 19.4225 13.4004 20.134C13.4004 20.8225 13.6559 21.4169 14.1668 21.9172C14.6783 22.4169 15.2895 22.6668 16.0004 22.6668Z'
				fill='#D8D8D8'
			/>
		</svg>
	)
}

export default Open
