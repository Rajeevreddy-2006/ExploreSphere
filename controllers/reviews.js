const Campground = require("../models/campground");
const Heritage = require('../models/heritage');
const Review = require("../models/review");

module.exports.createReview = async(req,res,next)=>{
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success','Created new review!');
    res.redirect(`/campgrounds/${campground._id}`);
}

module.exports.createHeritageReview = async (req, res) => {
    const heritage = await Heritage.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    heritage.reviews.push(review);
    await review.save();
    await heritage.save();
    req.flash('success','Created new review!');
    res.redirect(`/heritage/${heritage._id}`);
};

module.exports.deleteReview = async (req,res,next) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, {$pull: {reviews : reviewId} });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Successfully deleted review!');
    res.redirect(`/campgrounds/${id}`);
}

module.exports.deleteHeritageReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Heritage.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Successfully deleted review!');
    res.redirect(`/heritage/${id}`);
};