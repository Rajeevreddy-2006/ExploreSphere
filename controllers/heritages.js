const Heritage = require("../models/heritage");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({
    accessToken: mapBoxToken
});

const { cloudinary } = require('../cloudinary');

module.exports.index = async (req, res) => {
    const heritageSites = await Heritage.find({});
    res.render('heritages/landing');
};

module.exports.renderNewForm = async (req, res) => {
    res.render('heritages/new');
};

module.exports.createHeritage = async (req, res) => {
    const geoData = await geocoder.forwardGeocode({
        query: req.body.heritage.location,
        limit: 1
    }).send();
    const heritage = new Heritage(req.body.heritage);
    heritage.geometry = geoData.body.features[0].geometry;
    heritage.images = req.files.map(f => ({
        url: f.path,
        filename: f.filename
    }));
    heritage.author = req.user._id;
    await heritage.save();
    req.flash(
        'success',
        'Successfully added a new heritage site!'
    );
    res.redirect(`/heritage/${heritage._id}`);
};

module.exports.showHeritage = async (req, res) => {
    const heritage = await Heritage.findById(req.params.id)
        .populate({
            path: 'reviews',
            populate: {
                path: 'author'
            }
        })
        .populate('author');
    if (!heritage) {
        req.flash('error', 'Cannot find that Heritage Site!');
        return res.redirect('/heritage');
    }
    res.render('heritages/show', { heritage });
};

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const heritage = await Heritage.findById(id);
    if (!heritage) {
        req.flash('error', 'Cannot find that Heritage Site!');
        return res.redirect('/heritage');
    }
    res.render('heritages/edit', { heritage });
};

module.exports.updateHeritage = async (req, res) => {
    const { id } = req.params;
    const heritage = await Heritage.findByIdAndUpdate(
        id,
        { ...req.body.heritage }
    );
    const imgs = req.files.map(f => ({
        url: f.path,
        filename: f.filename
    }));
    heritage.images.push(...imgs);
    await heritage.save();
    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await heritage.updateOne({
            $pull: {
                images: {
                    filename: {
                        $in: req.body.deleteImages
                    }
                }
            }
        });
    }
    req.flash(
        'success',
        'Successfully updated heritage site!'
    );
    res.redirect(`/heritage/${heritage._id}`);
};

module.exports.deleteHeritage = async (req, res) => {
    const { id } = req.params;
    await Heritage.findByIdAndDelete(id);
    req.flash(
        'success',
        'Successfully deleted heritage site!'
    );
    res.redirect('/heritage');
};