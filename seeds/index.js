const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 500) + 10
        const camp = new Campground({
            author: '676e8698e4dc6e47b854ff94',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: `https://source.unsplash.com/random/100x100?camping,${i}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae odio error doloremque vitae.Ducimus iste, iure maxime accusantium ipsum culpa amet? Aspernatur eos totam officiis nihil eum non, omnis consectetur.',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/da0mdmqzz/image/upload/v1736162057/YelpCamp/tk4fninp1pivavnge9pu.png',
                    filename: 'YelpCamp/tk4fninp1pivavnge9pu',
                },
                {
                    url: 'https://res.cloudinary.com/da0mdmqzz/image/upload/v1736162061/YelpCamp/aivl9dw720v9vytlm2wg.png',
                    filename: 'YelpCamp/aivl9dw720v9vytlm2wg',
                }
            ],



        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})