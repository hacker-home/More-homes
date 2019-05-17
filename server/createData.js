/* eslint-disable no-console */
const faker = require('faker');

function create() {
  const result = [];
  const photos = ['https://s3-us-west-1.amazonaws.com/homes-pic/0.jpg',
    'https://s3-us-west-1.amazonaws.com/homes-pic/1.jpg',
    'https://s3-us-west-1.amazonaws.com/homes-pic/2.jpg',
    'https://s3-us-west-1.amazonaws.com/homes-pic/3.jpg',
    'https://s3-us-west-1.amazonaws.com/homes-pic/4.jpg',
    'https://s3-us-west-1.amazonaws.com/homes-pic/5.jpg',
    'https://s3-us-west-1.amazonaws.com/homes-pic/6.jpg',
    'https://s3-us-west-1.amazonaws.com/homes-pic/7.jpg',
    'https://s3-us-west-1.amazonaws.com/homes-pic/8.jpg',
    'https://s3-us-west-1.amazonaws.com/homes-pic/9.jpg',
    'https://s3-us-west-1.amazonaws.com/homes-pic/10.jpg',
    'https://s3-us-west-1.amazonaws.com/homes-pic/11.jpg'];
  const houseType = ['ENTIRE HOUSE', 'ENTIRE APARTMENT', 'PRIVATE ROOM', 'SHARED ROOM'];
  const description = ['Cozy house in friendly neiborhood', 'Spacious apartment', 'Sunny, Modern room', 'Penthouse Studio', 'Perfect Weekender'];
  for (let i = 0; i < 100; i += 1) {
    const obj = [
      photos[Math.floor(Math.random() * photos.length)],
      houseType[Math.floor(Math.random() * houseType.length)],
      faker.address.city(),
      description[Math.floor(Math.random() * description.length)],
      faker.random.number({ min: 35, max: 7500 }),
      (Math.random() * (5 - 0) + 0).toFixed(2),
      faker.random.number({ min: 0, max: 3500 }),
    ];
    result.push(obj);
  }
  return result;
}

module.exports = {
  create,
};
