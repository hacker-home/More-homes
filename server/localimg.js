module.exports = {
  getImg: () => {
    const arr = ['/images/0.jpg', '/images/1.jpg', '/images/2.jpg', '/images/3.jpg',
      '/images/4.jpg', '/images/5.jpg', '/images/6.jpg', '/images/7.jpg',
      '/images/8.jpg', '/images/9.jpg', '/images/10.jpg', '/images/11.jpg'];
    return arr[Math.floor(Math.random() * arr.length)];
  },
};
