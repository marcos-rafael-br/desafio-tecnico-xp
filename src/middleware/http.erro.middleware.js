
const httpErrorMiddleware = (err, req, res, _next) => {
  const { status, message } = err;
  res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;