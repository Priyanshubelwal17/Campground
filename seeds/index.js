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
            author: '676e57c12c7cb02f381b966b',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: `https://picsum.photos/400?random=0.8488659029878216`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae odio error doloremque vitae.Ducimus iste, iure maxime accusantium ipsum culpa amet? Aspernatur eos totam officiis nihil eum non, omnis consectetur.',
            price

        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})