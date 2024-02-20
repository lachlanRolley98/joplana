
const jwt = require('jsonwebtoken');
const Month = require('../models/Month');
const { dateSplitter } = require('../helpers/controllerHelpers');

exports.submit = (req, res) => {

  try {
    /* AUTHORISATION CHECK --  AUTHORISATION CHECK */
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }
    // Check if the authorization header is in the correct format
    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ message: "Invalid authorization header format" });
    }
    const token = tokenParts[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
      /* AUTHORISATION VALID LOGIC --  AUTHORISATION VALID LOGIC */
      const userId = decodedToken.userId;
      let {recap, tplan, dream, date} = req.body;
      //console.log(userId, recap, tplan, dream, goals, date)
      // need to strip month into day DD and month YYYY-MM
      const [day, month] = dateSplitter(date);
      // query the database and insert new day recap in
      // If doesnt exist create month and insert new day recap
      const goals2 = {
        gym: 5,
        smoking: 1,
        tennis: 8,
        Yeeting: 4
        // Add more goals here dynamically if needed
      };

      Month.findOneAndUpdate(
        { user_id: userId, month: month },
        {
          $push: {
            days: {
              day: day,
              recap,
              tplan,
              dream,
              goals: goals2
            }
          }
        },
        { new: true, upsert: true } // To return the updated document and create if it doesn't exist
      )
        .then(updatedMonth => {
          console.log('Month updated:', updatedMonth);
        })
        .catch(error => {
          console.error('Error updating month:', error);
        });

    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
