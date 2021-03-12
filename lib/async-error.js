module.exports = function asyncErrorCatcher(fn) {
  if (!(fn instanceof Function)) {
    throw new Error('Must supply a function');
  }

  return (req, res, next) => {
    const promise = fn(req, res, next);
    if (!promise.catch) return;
    promise.catch(err => next(err));
  };
};

/*
사실 이 부분 어떻게 돌아가는지 이해가 안 되는데
그 부분은 내가 공부를 안 해서 그런 것 같다..
꼭 다시 보고 이해하기! 
*/