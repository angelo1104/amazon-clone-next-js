import algoliasearch from "algoliasearch/lite";

const algoliaClient = algoliasearch('IF4YW21KEQ','d48761b2229629792ff3452b92cb686f');

const productIndex = algoliaClient.initIndex('amazon_products');

export {productIndex}