module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '79b600b4aa7ead4921492f8473f97300'),
  },
});
