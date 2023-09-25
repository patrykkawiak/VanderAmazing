import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='pl'>
			<Head>
				<link rel='shortcut icon' href='/images/favicon.png' />
			</Head>
			<body data-theme='dark'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
