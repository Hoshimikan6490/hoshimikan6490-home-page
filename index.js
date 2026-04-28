const compression = require('compression');
const express = require('express');
const app = express();
let port = 80;

const homepageLinkHeader =
	'</.well-known/api-catalog>; rel="api-catalog", </docs/api>; rel="service-doc", </openapi.json>; rel="service-desc", </.well-known/oauth-protected-resource>; rel="describedby"';

function wantsMarkdown(request) {
	const accept = request.headers.accept || '';
	return accept.toLowerCase().includes('text/markdown');
}

function markdownTokenCount(markdown) {
	return Math.max(
		1,
		Math.ceil(markdown.replace(/\s+/g, ' ').trim().length / 4),
	);
}

function sendMarkdown(res, markdown) {
	res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
	res.setHeader('x-markdown-tokens', String(markdownTokenCount(markdown)));
	res.status(200).send(markdown);
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

function setDiscoveryHeaders(res, filePath) {
	const normalized = filePath.replace(/\\/g, '/');

	if (normalized.endsWith('/public/docs/api')) {
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
	}

	if (normalized.endsWith('/public/healthz')) {
		res.setHeader('Content-Type', 'application/json; charset=utf-8');
	}

	if (normalized.endsWith('/public/.well-known/api-catalog')) {
		res.setHeader('Content-Type', 'application/linkset+json; charset=utf-8');
	}

	if (normalized.endsWith('/public/.well-known/openid-configuration')) {
		res.setHeader('Content-Type', 'application/json; charset=utf-8');
	}

	if (normalized.endsWith('/public/.well-known/oauth-protected-resource')) {
		res.setHeader('Content-Type', 'application/json; charset=utf-8');
	}
}

// GZIP圧縮を有効にする
app.use(compression());

app.use(express.static('./public/images'));
app.use('/images', express.static('./public/images'));

app.use(function (req, res, next) {
	if (req.path === '/' || req.path === '/index.html') {
		res.setHeader('Link', homepageLinkHeader);
	}

	if (
		wantsMarkdown(req) &&
		(req.path === '/' ||
			req.path === '/index.html' ||
			req.path === '/activity' ||
			req.path === '/activity.html' ||
			req.path === '/docs/api')
	) {
		if (req.path === '/' || req.path === '/index.html') {
			return sendMarkdown(res, homeMarkdown());
		}

		if (req.path === '/activity' || req.path === '/activity.html') {
			return sendMarkdown(res, activityMarkdown());
		}

		if (req.path === '/docs/api') {
			return sendMarkdown(res, docsMarkdown());
		}
	}

	return next();
});

app.use(express.static('./public', { setHeaders: setDiscoveryHeaders }));

app.get('/', async function (req, res) {
	res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/activity', async function (req, res) {
	res.sendFile(`${__dirname}/public/activity.html`);
});

app.get('/style.css', async function (req, res) {
	res.sendFile(`${__dirname}/public/style.css`);
});

app.get('/robots.txt', async function (req, res) {
	res.sendFile(`${__dirname}/public/robots.txt`);
});

app.get('/sitemap.xml', async function (req, res) {
	res.sendFile(`${__dirname}/public/sitemap.xml`);
});

app.listen(port, function () {
	console.log(`[NodeJS] Application Listening on Port ${port}`);
});
