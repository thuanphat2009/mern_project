const Cart = require('../models/cartModel');

exports.addItemToCart = (req, res) => {
    Cart.findOne({ user: req.user._id }).exec((error, cart) => {
        if (error) return res.status(400).json({ error });
        if (cart) {
            const product = req.body.cartItems.product;
            const itemProduct = cart.cartItems.find(
                (c) => c.product == product
            );
            let condition, update;

            if (itemProduct) {
                //item exist
                condition = {
                    user: req.user._id,
                    'cartItems.product': product,
                };
                update = {
                    $set: {
                        'cartItems.$': {
                            ...req.body.cartItems,
                            quantity:
                                itemProduct.quantity +
                                req.body.cartItems.quantity,
                        },
                    },
                };
            } else {
                //item not exist
                condition = { user: req.user._id };
                update = {
                    $push: {
                        cartItems: req.body.cartItems,
                    },
                };
            }

            Cart.findOneAndUpdate(condition, update).exec((error, _cart) => {
                if (error) return res.status(400).json({ error });
                if (_cart) {
                    return res.status(201).json({ cart: _cart });
                }
            });
        } else {
            //cart not exist
            const cart = new Cart({
                user: req.user._id,
                cartItems: [req.body.cartItems],
            });

            cart.save((error, cart) => {
                if (error) return res.status(400).json({ error });
                if (cart) {
                    return res.status(201).json({ cart });
                }
            });
        }
    });
};
