export default function SiteHeader({ logoProps = {} }) {
	return (
		<header>
			<div className="headerContents">
				<div className="headerLeft">
					<a href="/" rel="noreferrer">
						<img
							src="/logo.webp"
							alt="私のアイコン"
							className="myIcon"
							{...logoProps}
						/>
						<div className="Myname">
							<p>Hoshimikan6490</p>
							<small className="realName">（三上隆也）</small>
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
	);
}
