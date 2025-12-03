export async function onRequest(context) {
  const originalUrl = context.request.url;
  const url = new URL(originalUrl);

  // /markdown-share-button/内でなければ処理を中断
  if (url.pathname !== '/markdown-share-button') return await context.next();

  // /markdown-share-button/内であればhttps://markdown-share-button.pages.dev よりコンテンツを取得
  // /markdown-share-button の後に続くパスを取得（最初の1回だけ置換）
  const newUrl = new URL('https://markdown-share-button.pages.dev');
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
