const httpError = require('./httpError')

exports.handleError = (error, req, res, next) => {
    if (error instanceof httpError) {
      return res.status(error.statusCode).json({message:error.message});
    }
    return res.status(500).json({message:error.message});
  };