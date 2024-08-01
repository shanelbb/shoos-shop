import { useState } from "react";
import Category from "./Category";
import GalleryItem from "./GalleryItem";

export default function Gallery({ shoeInfo, category }) {
    console.log(category);
    return (
        <>
            <Category category={category} />
            <div className="gallery wrapper">
                {shoeInfo.map((shoe, index) => {
                    return (
                        <GalleryItem
                            shoe={shoe}
                            key={index}
                            category={category}
                        />
                    );
                })}
            </div>
        </>
    );
}
