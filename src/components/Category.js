export default function Category({ category }) {
    let css;

    switch (category) {
        case "Sneakers":
            css = { backgroundImage: `url("./assets/banners/sneakers.jpg")` };
            break;
        case "Dress Shoes":
            css = {
                backgroundImage: `url("./assets/banners/dressShoes.jpg")`,
            };
            break;
        case "Boots":
            css = { backgroundImage: `url("./assets/banners/boots.jpg")` };
            break;
        default:
            css = {
                backgroundImage: `url("./assets/banners/newArrivals.jpg")`,
            };
    }

    return (
        <div className="banner galleryBanner" style={css}>
            <h2 className="category">{category}</h2>
        </div>
    );
}
