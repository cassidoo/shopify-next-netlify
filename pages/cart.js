import Head from 'next/head';
import Cart from '@components/Cart';

export default function Home({ products }) {
  return (
    <div className="container">
      <Head>
        <title>Cheese and Meat Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <h1>Shoperoni</h1>
          <h2>
            Shop for literally the best products in the world, right here.
          </h2>
        </header>

        {/* TODO change to Link */}
        <a className="home" href="/">
          Go back
        </a>

        <Cart />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  let products = [];

  return {
    props: {
      products,
    },
  };
}
