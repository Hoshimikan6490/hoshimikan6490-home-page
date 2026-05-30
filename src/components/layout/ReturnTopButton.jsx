import { useEffect } from 'react';

export default function ReturnTopButton({ label = '▲TOPへ戻る' }) {
	useEffect(() => {
		const returnTop = document.getElementById('return_top');
		if (!returnTop) {
			return undefined;
		}

		const handleScroll = () => {
			returnTop.classList.toggle('active', window.scrollY >= 100);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleReturnTop = (event) => {
		event.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<a id="return_top" href="#" className="button" onClick={handleReturnTop}>
			{label}
		</a>
	);
}
