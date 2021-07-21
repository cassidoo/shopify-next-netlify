import Head from 'next/head';
import ProductPageContent from '@components/ProductPageContent';

export default function ProductPage({ products }) {
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
        <a className="home" href="/">
          Go back
        </a>
        <a className="cart" href="/cart">
          Shopping Cart
        </a>

        <ProductPageContent product={collection.data[0].node} />
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  let products = await fetch(
    `${process.env.NETLIFY_URL}/.netlify/functions/get-product-list`
  )
    .then((res) => res.json())
    .then((response) => {
      return response.products.edges;
    });

  console.log(products);

  return { paths: [], fallback: false };
}

export async function getStaticProps() {
  let products = [];

  return {
    props: {
      products,
    },
  };
}
