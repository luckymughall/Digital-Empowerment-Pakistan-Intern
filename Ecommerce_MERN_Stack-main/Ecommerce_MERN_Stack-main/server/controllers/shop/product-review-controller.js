import Order from "../../models/Order.js";
import Product from "../../models/Product.js";
import ProductReview from "../../models/Review.js";

export const addProductReview = async (req, res) => {
  try {
    const { productId, userId, userName, reviewMessage, reviewValue } = req.body;

    // Ensure the user has purchased the product
    const order = await Order.findOne({
      userId,
      "cartItems.productId": productId,
      // Ensure the order status is either "confirmed" or "delivered"
      orderStatus: { $in: ["confirmed", "delivered"] }
    });

    if (!order) {
      return res.status(403).json({
        success: false,
        message: "You need to purchase the product to review it.",
      });
    }

    // Check if the user has already reviewed the product
    const existingReview = await ProductReview.findOne({
      productId,
      userId,
    });

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: "You already reviewed this product!",
      });
    }

    // Create and save the new review
    const newReview = new ProductReview({
      productId,
      userId,
      userName,
      reviewMessage,
      reviewValue,
    });

    await newReview.save();

    // Calculate and update the average review rating for the product
    const reviews = await ProductReview.find({ productId });
    const totalReviewsLength = reviews.length;
    const averageReview = reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) / totalReviewsLength;

    await Product.findByIdAndUpdate(productId, { averageReview });

    res.status(201).json({
      success: true,
      data: newReview,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

export const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;

    const reviews = await ProductReview.find({ productId });
    res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};
