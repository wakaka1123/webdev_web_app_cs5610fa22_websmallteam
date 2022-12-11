import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findPlaceByPlaceIdThunk} from "./googleplaces-thunks";
import ContactBar from "../home/contactBar";
import NavigationBar from "../home/navigationBar";
import {
    createReviewThunk,
    findReviewsByAuthorThunk, findReviewsByPlaceThunk
} from "../reviews/reviews-thunks"
import {Link} from "react-router-dom";

const GoogleplacesDetails = () => {
    const {placeID} = useParams()
    const navigate = useNavigate();
    const {details} = useSelector((state) => state.place)
    const [review, setReview] = useState('')
    const {reviews} = useSelector((state) => state.reviews)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findPlaceByPlaceIdThunk(placeID))
        dispatch(findReviewsByPlaceThunk(placeID))
    }, [placeID])
    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review,
            placeID
        }))
    }
    return (
        <>
            {/*<ContactBar/>*/}
            {/*<NavigationBar/>*/}
            <h1 className="mb-5">{details.result?.name}</h1>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item">
                            Google Rating: {details.result?.rating ? details.result?.rating : 'NA'}
                        </li>
                        <li className="list-group-item">
                            <ul className="list-group">
                                Google Reviews: {details.result?.reviews ? details.result?.reviews.map(
                                    review =>
                                        <li key={review.author_name} className="list-group-item">
                                            Author Name: {review.author_name} <br/>
                                            Rating: {review.rating}<br/>
                                            Content: {review.text}
                                        </li>
                                )
                                : 'NA'}
                            </ul>
                        </li>
                        <li className="list-group-item">
                            Website: {details.result?.website ? details.result?.website : 'NA'}
                        </li>
                    </ul>
                </div>
            </div>
            {
                currentUser && currentUser.role !== 'Corporate' && currentUser.role !== 'Admin' &&
                <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control mt-3"></textarea>
                    <button className="btn btn-primary mt-2 mb-5" onClick={handlePostReviewBtn}>Post Review</button>
                </div>
            }
            {
                !currentUser &&
                <div>
                    <textarea
                        disabled="true"
                        placeholder={"Please login to write review"}
                        className="form-control mt-3"></textarea>
                    <button className="btn btn-primary mt-2 mb-5" disabled="true">Post Review</button>
                </div>
            }
            <ul className="list-group">
                <h5>User Reviews:</h5>
                {
                    reviews.map((review) =>
                        <li className="list-group-item">
                            {review.review}
                            {review.author && <Link to={`/profile/${review.author?._id}`} className="float-end">
                                {review.author?.username}
                            </Link>}
                            {!review.author && <span className="float-end text-danger">Inactive User</span>}

                        </li>
                    )
                }
            </ul>
            <button
                className="btn btn-primary mt-3"
                onClick={() => {
                    navigate('/search')
                }
                }>Back to Search
            </button>
        </>
    )
}
export default GoogleplacesDetails