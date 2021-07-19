import Head from 'next/head';
import ProductListing from '@components/ProductListing';

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

        <a className="cart" href="/cart">
          Shopping Cart
        </a>

        <ul className="products">
          {products.map((p) => {
            return <ProductListing product={p.node} />;
          })}
        </ul>
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
