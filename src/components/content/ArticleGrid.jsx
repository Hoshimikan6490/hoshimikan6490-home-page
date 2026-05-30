export default function ArticleGrid({ articles }) {
	return (
		<div className="articles">
			{articles.map((article) => (
				<a
					key={article.href}
					href={article.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="article">
						<h2>{article.title}</h2>
						<img
							src={article.image}
							alt={article.alt}
							style={{ width: '100%' }}
						/>
						{article.note ? <small>{article.note}</small> : null}
					</div>
				</a>
			))}
		</div>
	);
}
