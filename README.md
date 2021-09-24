# Next.js + Shopify Starter Project

This is a Next.js + Shopify Cart API demo! [Check out the site here](https://shopify-next.netlify.app/). If you want to make your own version, make sure you create a Shopify account and create some products, and install the [Netlify CLI](https://docs.netlify.com/cli/get-started/).

Once you have your shop set up, add environment variables to your setup:

```bash
SHOPIFY_STOREFRONT_API_TOKEN=example
SHOPIFY_API_ENDPOINT=https://exampleshopify/graphql.json
```

See more about the setup [in this blog post](https://www.netlify.com/blog/2021/09/13/build-your-own-online-shop-with-next.js-and-shopify/).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/shopify-next-netlify)

(If you click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify)

## Getting Started

First, run the development server:

```bash
npm start
```

Open [http://localhost:8888](http://localhost:8888) with your browser to see the result.

### Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/shopify-next-netlify)

**Option two:** Manual clone

1. Clone this repo: `git clone https://github.com/cassidoo/shopify-next-netlify.git`
2. Navigate to the directory and run `npm run dev`
3. Make your changes
4. Connect to [Netlify](https://url.netlify.com/Bk4UicocL) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)
