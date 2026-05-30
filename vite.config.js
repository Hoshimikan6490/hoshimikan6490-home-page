import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 各JSXファイルをReactコンポーネントとして処理するためのプラグインを使用して、Viteの設定を定義
export default defineConfig({
	plugins: [react()],
});
