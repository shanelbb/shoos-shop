/* eslint-disable react/prop-types */
export default function Category({ category }) {
  let css;

  switch (category) {
    case "sneakers":
      css = { backgroundImage: `url("./assets/banners/sneakers.jpg")` };
      break;
    case "dress shoes":
      css = {
        backgroundImage: `url("./assets/banners/dressShoes.jpg")`,
      };
      break;
    case "boots":
      css = { backgroundImage: `url("./assets/banners/boots.jpg")` };
      break;
    default:
      css = {
        backgroundImage: `url("./assets/banners/newArrivals.jpg")`,
      };
  }

  return (
    <div className='banner galleryBanner' style={css}>
      <h2 className='category'>{category}</h2>
    </div>
  );
}
