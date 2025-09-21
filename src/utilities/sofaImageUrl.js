

// image url generate kora jonno.................................
function productImageUrl(name) {
  return new URL(`../assets/product/${name}`, import.meta.url).href;
}

export { productImageUrl };
