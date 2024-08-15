/* eslint-disable react/prop-types */
export default function Review(props) {
  const { reviewData } = props;
  console.log(reviewData);

  return (
    <>
      <section className='reviewForm'>
        {!reviewData ? (
          <h5>There are no reviews for this product yet. Leave one below!</h5>
        ) : (
          reviewData.map(review => {
            const date = new Date(review.createdAt);
            const formattedDate = date.toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <article className='reviewContainer' key={review.id}>
                <h6>{review.user.name}</h6>
                <p className='date'>{formattedDate}</p>
                <p>{review.message}</p>
              </article>
            );
          })
        )}
      </section>
    </>
  );
}
