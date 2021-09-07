import Head from 'next/head';
import ProductListing from '@components/ProductListing';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Cheese and Meat Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <ul className="product-grid">
          {products.map((p) => {
            return <ProductListing product={p.node} />;
          })}
        </ul>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  console.log(`${process.env.NETLIFY_URL}/.netlify/functions/get-product-list`);

  //https://shopify-next.netlify.app/

  console.log('poop');

  console.log(process.env.NETLIFY_URL);

  // let products = await fetch(
  //   `${process.env.NETLIFY_URL}/.netlify/functions/get-product-list`
  // )
  //   .then((res) => res.json())
  //   .then((response) => {
  //     console.log('--- built home page ---');
  //     return response.products.edges;
  //   });

  // console.log(products);

  // let routes = products.map((p) => {
  //   const params = p.node.handle;
  //   return params;
  // });

  // console.log(routes);

  let products = [];

  return {
    props: {
      products,
    },
  };
}
