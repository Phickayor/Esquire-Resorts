const Slideshow = (info, callback) => {
  var i = 0;
  const timerId = setInterval(() => {
    callback(info[i]);
    i < info.length - 1 ? i++ : (i = 0);
  }, 5000);
  return () => {
    clearInterval(timerId);
  };
};

export default Slideshow;
