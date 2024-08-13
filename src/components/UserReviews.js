import Review from "./Review";

export default function UserReviews() {
  return (
    <div className='wrapper'>
      <div className='userReviews'>
        <h5>User Reviews</h5>
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
}
