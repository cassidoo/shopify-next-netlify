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
          {products.map((p, index) => {
            return <ProductListing key={`product${index}`} product={p.node} />;
          })}
        </ul>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  let products = await fetch(
    `${process.env.NETLIFY_URL}/.netlify/functions/get-product-list`
  )
    .then((res) => res.json())
    .then((response) => {
      console.log('--- built home page ---');
      return response.products.edges;
    });

  return {
    props: {
      products,
    },
  };
}
