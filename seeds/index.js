const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');
const campgroundImages = require('./campgroundImages');

const randomImage = () => {
    return campgroundImages[
        Math.floor(Math.random() * campgroundImages.length)
    ];
};

mongoose.connect('mongodb://localhost:27017/yelp-camp')
.then(() => {
    console.log("MONGO CONNECTION OPEN");
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 100; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            author: '6a1ad1b4f443cb8143a5f587',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            geometry: { 
              type: 'Point', 
              coordinates: [ 
                cities[random1000].longitude, 
                cities[random1000].latitude 
              ] 
            },
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptatem molestiae quam, commodi sequi consequuntur voluptatum expedita nam officiis, cumque quo fuga obcaecati praesentium! Voluptatem fugiat dignissimos omnis eius est.',
            price: 30,
            images: [randomImage()]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})