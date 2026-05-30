export default function Seo({
	title,
	description,
	keywords,
	author,
	openGraph,
	twitter,
	canonical,
	additionalMetaTags,
}) {
	return (
		<>
			{title && <title>{title}</title>}
			{description && <meta name="description" content={description} />}
			{keywords && keywords.length > 0 && (
				<meta name="keywords" content={keywords.join(', ')} />
			)}
			{author && <meta name="author" content={author} />}

			{/* Canonical URL */}
			{canonical && <link rel="canonical" href={canonical} />}

			{/* Open Graph / Facebook */}
			{openGraph && (
				<>
					{openGraph.title && (
						<meta property="og:title" content={openGraph.title} />
					)}
					{openGraph.description && (
						<meta property="og:description" content={openGraph.description} />
					)}
					{openGraph.url && <meta property="og:url" content={openGraph.url} />}
					{openGraph.image && (
						<meta property="og:image" content={openGraph.image} />
					)}
					{openGraph.type && (
						<meta property="og:type" content={openGraph.type} />
					)}
					{openGraph.site_name && (
						<meta property="og:site_name" content={openGraph.site_name} />
					)}
				</>
			)}

			{/* Twitter */}
			{twitter && (
				<>
					{twitter.card && <meta name="twitter:card" content={twitter.card} />}
					{twitter.site && <meta name="twitter:site" content={twitter.site} />}
					{twitter.creator && (
						<meta name="twitter:creator" content={twitter.creator} />
					)}
					{twitter.title && (
						<meta name="twitter:title" content={twitter.title} />
					)}
					{twitter.description && (
						<meta name="twitter:description" content={twitter.description} />
					)}
					{twitter.image && (
						<meta name="twitter:image" content={twitter.image} />
					)}
				</>
			)}

			{/* Additional Meta Tags */}
			{additionalMetaTags &&
				additionalMetaTags.map((tag, index) => (
					<meta
						key={`meta-tag-${index}`}
						name={tag.name}
						content={tag.content}
					/>
				))}
		</>
	);
}
