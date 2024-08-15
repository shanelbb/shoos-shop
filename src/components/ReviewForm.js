import { useState } from "react";

export default function ReviewForm({ productId, setReviewData, reviewData }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    let reviewDetails = {};

    const handleChange = e => {
        reviewDetails = {
            ...reviewDetails,
            [e.target.name]: e.target.value,
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmitted(true);
        addUser().then(data => {
            addReview(data.id);
        });
    };

    const addUser = async () => {
        const userData = {
            name: reviewDetails.name,
            email: reviewDetails.email,
        };

        const body = { userData };

        const response = await fetch("/api/post/addUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    };

    const addReview = async user_id => {
        const shoe_id = Number(productId);
        const reviewBody = {
            message: reviewDetails.message,
            shoe_id: shoe_id,
        };

        console.log(typeof reviewBody, reviewBody);

        const body = { reviewBody, user_id };
        const response = await fetch("/api/post/addReview", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await response.json();
    };

    return (
        <>
            <div className="reviewForm">
                <h5>Leave a Review</h5>
                <form onSubmit={handleSubmit}>
                    <div className="userInfo">
                        <label htmlFor="name"></label>
                        <input
                            className="nameInput"
                            type="text"
                            id="name"
                            name="name"
                            value={reviewDetails.name}
                            onChange={handleChange}
                            placeholder="Name"
                        ></input>
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={reviewDetails.email}
                            onChange={handleChange}
                            placeholder="Email"
                        ></input>
                    </div>
                    <label htmlFor="message"></label>
                    <textarea
                        className="reviewInput"
                        placeholder="Your Review:"
                        name="message"
                        id="message"
                        value={reviewDetails.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="reviewSubmit">
                        Submit Review
                    </button>
                </form>
            </div>
        </>
    );
}
