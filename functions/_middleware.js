export async function onRequest(context) {
  const originalUrl = context.request.url;
  const url = new URL(originalUrl);
  // /markdown-share-button/内でなければ処理を中断
  if (url.pathname.indexOf("/markdown-share-button") !== 0) {
    return await context.next();
  }
  // /markdown-share-button/内であればhttps://markdown-share-button.pages.devよりコンテンツを取得
  const newUrl = new URL(
    `https://markdown-share-button.pages.dev${url.pathname.replace(
      "/markdown-share-button",
      "/"
    )}${url.search}`
  );
  const response = await fetch(new Request(newUrl), {
    headers: new Headers(context.request.headers),
  });
  // 取得したコンテンツをレスポンスとして返す
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: new Headers(response.headers),
  });
}
