export async function onRequest(context) {
	const originalUrl = context.request.url;
	const url = new URL(originalUrl);
	const accept = context.request.headers.get('accept') || '';
	const wantsMarkdown = accept.toLowerCase().includes('text/markdown');
	const homepageLinkHeader =
		'</.well-known/api-catalog>; rel="api-catalog", </docs/api>; rel="service-doc", </openapi.json>; rel="service-desc", </.well-known/oauth-protected-resource>; rel="describedby"';

	function markdownTokenCount(markdown) {
		return Math.max(
			1,
			Math.ceil(markdown.replace(/\s+/g, ' ').trim().length / 4),
		);
	}

	function markdownResponse(markdown) {
		return new Response(markdown, {
			status: 200,
			headers: {
				'Content-Type': 'text/markdown; charset=utf-8',
				'x-markdown-tokens': String(markdownTokenCount(markdown)),
			},
		});
	}

	function homeMarkdown() {
		return [
			'# Hoshimikan6490',
			'',
			'個人サイトのホームです。プロフィール、活動、作成物を案内しています。',
			'',
			'## 主要ページ',
			'- /activity - 執筆記事や作成動画の一覧',
			'- /docs/api - エージェント向けの API ドキュメント',
			'- /.well-known/api-catalog - API カタログ',
			'- /openapi.json - OpenAPI 定義',
			'- /.well-known/openid-configuration - OAuth / OIDC ディスカバリ',
			'- /.well-known/oauth-protected-resource - OAuth 保護リソースメタデータ',
			'',
			'## 外部リンク',
			'- GitHub リポジトリ: https://github.com/Hoshimikan6490/hoshimikan6490-home-page',
		].join('\n');
	}

	function activityMarkdown() {
		return [
			'# 執筆した記事や作成した動画',
			'',
			'個人で執筆した記事や、大学・委員会での活動実績をまとめたページです。',
			'',
			'- note 記事や Qiita 記事へのリンク',
			'- 大学や委員会での執筆実績',
			'- 動画・制作物の案内',
		].join('\n');
	}

	function docsMarkdown() {
		return [
			'# API ドキュメント',
			'',
			'このサイトはエージェント向けの発見用メタデータを公開しています。',
			'',
			'## 公開エンドポイント',
			'- `/.well-known/api-catalog` - API カタログ (application/linkset+json)',
			'- `/openapi.json` - OpenAPI 定義',
			'- `/healthz` - ヘルスチェック',
			'- `/.well-known/openid-configuration` - OAuth / OIDC ディスカバリ',
			'- `/.well-known/oauth-protected-resource` - OAuth 保護リソースメタデータ',
			'- `/.well-known/mcp/server-card.json` - MCP サーバーカード',
			'- `/.well-known/agent-skills/index.json` - Agent Skills インデックス',
			'',
			'## 補足',
			'- ブラウザでは通常の HTML が返ります。',
			'- `Accept: text/markdown` が指定された場合のみ Markdown を返します。',
		].join('\n');
	}

	if (
		url.pathname.startsWith('/markdown-share-button') &&
		!url.pathname.startsWith('/markdown-share-button/markdown-share-button')
	) {
		// /markdown-share-button/ または /markdown-share-button/images/ 内であれば
		// https://markdown-share-button.pages.dev よりコンテンツを取得
		const pathAfterPrefix = url.pathname.substring(
			'/markdown-share-button'.length,
		);
		const newUrl = new URL(
			'https://markdown-share-button.pages.dev' + pathAfterPrefix + url.search,
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

	if (
		wantsMarkdown &&
		(url.pathname === '/' ||
			url.pathname === '/index.html' ||
			url.pathname === '/activity' ||
			url.pathname === '/activity.html' ||
			url.pathname === '/docs/api')
	) {
		if (url.pathname === '/' || url.pathname === '/index.html') {
			return markdownResponse(homeMarkdown());
		}

		if (url.pathname === '/activity' || url.pathname === '/activity.html') {
			return markdownResponse(activityMarkdown());
		}

		if (url.pathname === '/docs/api') {
			return markdownResponse(docsMarkdown());
		}
	}

	const response = await context.next();
	if (url.pathname === '/' || url.pathname === '/index.html') {
		const headers = new Headers(response.headers);
		headers.set('Link', homepageLinkHeader);
		return new Response(await response.blob(), {
			status: response.status,
			statusText: response.statusText,
			headers,
		});
	}
	return response;
}
