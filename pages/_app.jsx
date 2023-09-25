import Layout from '@/components/layout/Layout/Layout';
import '@/sass/main.scss';
import { Montserrat } from 'next/font/google';

const mainFont = Montserrat({
	weight: ['300', '400', '600'],
	subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${mainFont.style.fontFamily};
				}
			`}</style>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
