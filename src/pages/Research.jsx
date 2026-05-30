import { useEffect } from 'react';

import Seo from '../components/tags/Seo';

function Research() {
	useEffect(() => {
		const returnTop = document.getElementById('return_top');
		if (!returnTop) {
			return;
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
		<>
			<Seo
				title="研究活動｜Hoshimikan6490"
				description="Hoshimikan6490の研究活動のページです。"
				keywords={['Hoshimikan6490', '研究', 'ICN', '情報指向型ネットワーク']}
				canonical="https://hoshimikan6490.com/research.html"
				openGraph={{
					title: '研究活動｜Hoshimikan6490',
					description: 'Hoshimikan6490の研究活動のページです。',
					url: 'https://hoshimikan6490.com/research.html',
					image: 'https://hoshimikan6490.com/images/logo.webp',
					type: 'website',
					site_name: 'Hoshimikan6490',
				}}
				twitter={{
					card: 'summary_large_image',
					site: 'Hoshimikan6490🌟🍊',
					creator: 'Hoshimikan6490🌟🍊',
					title: '研究活動｜Hoshimikan6490',
					description: 'Hoshimikan6490の研究活動のページです。',
					image: 'https://hoshimikan6490.com/images/logo.webp',
				}}
			/>
			<header>
				<div className="headerContents">
					<div className="headerLeft">
						<a href="/" rel="noreferrer">
							<img src="/logo.webp" alt="私のアイコン" className="myIcon" />
							<div className="Myname">
								<p>Hoshimikan6490</p>
							</div>
						</a>
					</div>
					<div className="headerRight">
						<a
							href="https://github.com/Hoshimikan6490/hoshimikan6490-home-page"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								alt="このWebサイトのプログラムが見られるボタン"
								src="https://img.shields.io/badge/View%20on%20Github-grey?style=for-the-badge&logo=github"
							/>
						</a>
					</div>
				</div>
			</header>

			<main>
				<div>
					<h1>研究室の話</h1>
					<div className="section">
						<div className="waku">
							<h2>私と私の研究について</h2>
							<p>
								　三上隆也と申します。工学院大学情報学部情報通信工学科4年生です。結構興味のある分野は広く浅くではありますが、研究では「情報指向型ネットワーク(ICN)」について研究しています。
								<br />
								　ちなみに、Discord
								BOTやWebアプリの開発、技術記事執筆が趣味です。ゲームだと、Splatoon
								3やMinecraftなどをやっていましたが、最近はSteamゲームにお熱です(?)。
							</p>
						</div>
					</div>
					<div className="section">
						<div className="waku" style={{ paddingBottom: '20px' }}>
							<h2>研究室について</h2>
							<p>
								　所属する「コミュニケーションサービスシステム研究室」については、研究室の公式サイトをご覧ください。
							</p>
							<a
								href="https://www.mizunolab.net/what.html"
								className="button"
								style={{ width: '100%', padding: '12.5px 0px' }}
								target="_blank"
								rel="noopener noreferrer"
							>
								研究室についてはこちら
							</a>
						</div>
					</div>
				</div>
			</main>

			<a id="return_top" href="#" className="button" onClick={handleReturnTop}>
				▲TOPへ戻る
			</a>

			<footer>
				<small>© Hoshimikan6490 2026</small>
			</footer>
		</>
	);
}

export default Research;
