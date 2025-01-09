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
            author: '677e8a34f8b320b9fb385d76',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: `https://picsum.photos/400?random=0.8488659029878216`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae odio error doloremque vitae.Ducimus iste, iure maxime accusantium ipsum culpa amet? Aspernatur eos totam officiis nihil eum non, omnis consectetur.',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/da0mdmqzz/image/upload/v1736355197/YelpCamp/c9bh9yiemtfjq2krzp1h.jpg',
                    filename: 'YelpCamp/c9bh9yiemtfjq2krzp1h',
                }
                
            ],



        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})