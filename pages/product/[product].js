import Head from 'next/head';
import ProductPageContent from '@components/ProductPageContent';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useAppContext } from '../../state';

export default function ProductPage({ product }) {
  const { cartId } = useAppContext();

  return (
    <div className="container">
      <Head>
        <title>Shoperoni | Buy {product.node.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="product-page">
        <article>
          <ProductPageContent product={product.node} />
        </article>
      </div>
      <Footer />
    </div>
  );
}

export async function getProductList() {
  let products = await fetch(
    `${process.env.NETLIFY_URL}/.netlify/functions/get-product-list`
  )
    .then((res) => res.json())
    .then((response) => {
      console.log('--- built product pages ---');
      return response.products.edges;
    });
  return products;
}

export async function getStaticPaths() {
  let products = await getProductList();
  let routes = products.map((p) => {
    const params = `/product/${p.node.handle}`;
    return params;
  });

  return { paths: routes, fallback: false };
}

export async function getStaticProps({ params }) {
  let products = await getProductList();

  let product = products.find((p) => {
    return p.node.handle === params.product;
  });

  return {
    props: {
      product,
    },
  };
}
