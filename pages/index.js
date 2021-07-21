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
          {products.map((p, index) => {
            return <ProductListing product={p.node} key={`product${index}`} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  console.log(`${process.env.NETLIFY_URL}/.netlify/functions/get-product-list`);

  //https://shopify-next.netlify.app/

  let products = await fetch(
    `${process.env.NETLIFY_URL}/.netlify/functions/get-product-list`
  )
    .then((res) => res.json())
    .then((response) => {
      return response.products.edges;
    });

  console.log(products);

  let routes = products.map((p) => {
    const params = p.node.handle;
    return params;
  });

  console.log(routes);

  return {
    props: {
      products,
    },
  };
}
