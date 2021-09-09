import { AppWrapper } from '../state.js'; // import based on where you put it
import '@styles/globals.css';

export function Application({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default Application;
