import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=' px-12 py-2'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
