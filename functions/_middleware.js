export async function onRequest(context) {
	const originalUrl = context.request.url;
	const url = new URL(originalUrl);

	if (
		!url.pathname.startsWith('/markdown-share-button') ||
		url.pathname.startsWith('/markdown-share-button/markdown-share-button')
	)
		// /markdown-share-button/内かつ/markdown-share-button/markdown-share-button/外であれば
		// 通常の処理を続行
		return await context.next();

	// /markdown-share-button/ または /markdown-share-button/images/ 内であれば
	// https://markdown-share-button.pages.dev よりコンテンツを取得
	const pathAfterPrefix = url.pathname.substring(
		'/markdown-share-button'.length
	);
	const newUrl = new URL(
		'https://markdown-share-button.pages.dev' + pathAfterPrefix + url.search
	);
	const response = await fetch(new Request(newUrl), {
		headers: new Headers(context.request.headers),
	});
	// 取得したコンテンツをレスポンスとして返す
	const responseBody = await response.blob();
	return new Response(responseBody, {
		status: response.status,
		statusText: response.statusText,
		headers: new Headers(response.headers),
	});
}
