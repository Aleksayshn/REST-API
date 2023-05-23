const {
  changeSubscription,
} = require("../../services/userServices/user");

const updateSubscription = async (req, res, _) => {
  const { _id } = req.user;
  const result = await changeSubscription(_id, req.body);

  res.status(200)
      .json({
        status: "success",
        code: 200,
        data: {
            user: {
                email: result.email,
                subscription: result.subscription,
            }
        }
    });
};

module.exports = updateSubscription;