export default function ReviewForm() {
    return (
        <>
            <div className="reviewForm">
                <h5>Leave a Review</h5>
                <form>
                    <div className="userInfo">
                        <label for="name"></label>
                        <input
                            className="nameInput"
                            type="text"
                            id="name"
                            placeholder="Name (optional)"
                        ></input>
                        <label for="email"></label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email (optional)"
                        ></input>
                    </div>
                    <label for="review"></label>
                    <textarea
                        className="reviewInput"
                        placeholder="Your Review:"
                        name="review"
                        id="review"
                    ></textarea>
                    <button type="submit" className="reviewSubmit">
                        Submit Review
                    </button>
                </form>
            </div>
        </>
    );
}
