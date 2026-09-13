import Seo from '../components/tags/Seo';
import SiteHeader from '../components/layout/SiteHeader';
import ReturnTopButton from '../components/layout/ReturnTopButton';
import PageFooter from '../components/layout/PageFooter';

function Research() {
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
			<SiteHeader />

			<main>
				<div>
					<h1>簡単な自己紹介と研究に関して</h1>
					<div className="section">
						<div className="waku" style={{ paddingBottom: '20px' }}>
							<h2>私について</h2>
							<p>
								　三上隆也と申します。工学院大学情報学部情報通信工学科4年生です。結構興味のある分野は広く浅くではありますが、研究では「情報指向型ネットワーク(ICN)」について研究しています。
								<br />
								　ちなみに、Discord
								BOTやWebアプリの開発、技術記事執筆が趣味です。ゲームだと、Splatoon
								3やMinecraftなどをやっていましたが、最近はSteamゲームにお熱です(?)。
							</p>
							<a
								href="/"
								className="button"
								style={{ width: '100%', padding: '12.5px 0px' }}
								target="_blank"
								rel="noopener noreferrer"
							>
								私についてはこちら
							</a>
						</div>
					</div>
					<div className="section">
						<div className="waku">
							<h2>研究内容</h2>
							<p>
								　私の研究は「情報指向型ネットワーク(ICN)」に関する研究をしています。
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
					<div className="section">
						<h1>連絡先</h1>
						<div className="waku">
							<p>メールまたはお問い合わせフォームからご連絡ください。</p>
							<div
								className="article_buttons"
								style={{ paddingBottom: '10px' }}
							>
								<a
									href="mailto:contact@hoshimikan6490.com"
									className="button"
									style={{ width: '40%' }}
								>
									メールを送る
								</a>
								<a
									href="https://forms.gle/RdmYzA9MEHGsPB839"
									className="button"
									style={{ width: '40%' }}
									target="_blank"
									rel="noopener noreferrer"
								>
									お問い合わせフォームへ
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>

			<ReturnTopButton />
			<PageFooter />
		</>
	);
}

export default Research;
