import Category from "@/components/Category";
import shoeInfo from "@/shoeInfo";
import GalleryItem from "@/components/GalleryItem";
import { useRouter } from "next/router";
// import { list } from "@vercel/blob";

export default async function Gallery() {
  // const response = await list();
  const router = useRouter();
  const { category } = router.query;
  console.log(category);

  return (
    <>
      <Category category={category} />
      <div className='gallery wrapper'>
        {shoeInfo.map((shoe, index) => {
          return <GalleryItem shoe={shoe} key={index} category={category} />;
        })}
      </div>
    </>
  );
}
