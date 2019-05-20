module.exports = {
  getImg: () => {
    const arr = ['https://s3-us-west-1.amazonaws.com/homes-pic/0.jpg',
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
    return arr[Math.floor(Math.random() * arr.length)];
  },
};
