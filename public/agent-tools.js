(() => {
	const modelContext = navigator.modelContext;

	if (!modelContext || typeof modelContext.registerTool !== 'function') {
		return;
	}

	const controller = new AbortController();
	const tools = [
		{
			name: 'hoshimikan6490.navigate',
			title: 'ページを開く',
			description: 'サイト内の主要ページへ移動します。',
			inputSchema: {
				type: 'object',
				properties: {
					target: {
						type: 'string',
						enum: ['home', 'activity', 'docs-api'],
					},
				},
				required: ['target'],
				additionalProperties: false,
			},
			annotations: {
				readOnlyHint: false,
			},
			execute: async ({ target }) => {
				const destinations = {
					home: '/',
					activity: '/activity',
					'docs-api': '/docs/api',
				};

				const destination = destinations[target] || '/';
				window.location.assign(destination);
				return {
					status: 'navigating',
					destination,
				};
			},
		},
		{
			name: 'hoshimikan6490.describe',
			title: 'ページ要約を返す',
			description: '現在のページの要点と主なリンクを返します。',
			inputSchema: {
				type: 'object',
				properties: {},
				additionalProperties: false,
			},
			annotations: {
				readOnlyHint: true,
			},
			execute: async () => {
				const headings = Array.from(document.querySelectorAll('h1, h2'))
					.slice(0, 6)
					.map((element) => element.textContent?.trim())
					.filter(Boolean);

				const links = Array.from(document.querySelectorAll('a[href]'))
					.slice(0, 10)
					.map((element) => ({
						label:
							element.textContent?.trim() ||
							element.getAttribute('aria-label') ||
							element.href,
						href: element.href,
					}));

				return {
					title: document.title,
					url: window.location.href,
					headings,
					links,
				};
			},
		},
	];

	window.addEventListener(
		'pagehide',
		() => {
			controller.abort();
		},
		{ once: true },
	);

	for (const tool of tools) {
		modelContext.registerTool(tool, { signal: controller.signal });
	}
})();
