const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn,isHeritageAuthor,validateHeritage } = require('../middleware');
const heritage = require('../controllers/heritages');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.get(
    '/',
    catchAsync(heritage.index)
);

router.get(
    '/new',
    isLoggedIn,
    heritage.renderNewForm
);

router.post(
    '/',
    isLoggedIn,
    upload.array('image'),
    validateHeritage,
    catchAsync(heritage.createHeritage)
);

router.get(
    '/category/:category',
    catchAsync(async (req, res) => {
        const Heritage = require('../models/heritage');
        const { category } = req.params;
        const heritageSites = await Heritage.find({
            category
        });
        res.render(
            'heritages/index',
            {
                heritageSites,
                category
            }
        );
    })
);

router.route('/:id')
    .get(
        catchAsync(heritage.showHeritage)
    )
    .put(
        isLoggedIn,
        isHeritageAuthor,
        upload.array('image'),
        validateHeritage,
        catchAsync(heritage.updateHeritage)
    )
    .delete(
        isLoggedIn,
        isHeritageAuthor,
        catchAsync(heritage.deleteHeritage)
    );

router.get(
    '/:id/edit',
    isLoggedIn,
    isHeritageAuthor,
    catchAsync(heritage.renderEditForm)
);

module.exports = router;