import SiteHeader from '../components/layout/SiteHeader';

function NotFound() {
	return (
		<>
			<SiteHeader />

			<main>
				<div>
					<h1>404 Not Found</h1>
					<p>お探しのページは見つかりませんでした。</p>
					<p>
						URLが正しいかご確認ください。ページが削除された可能性もあります。
					</p>
					<a href="/">トップページに戻る</a>
				</div>
			</main>
		</>
	);
}

export default NotFound;
