
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
      let {recap, tplan, dream, date, goals} = req.body;
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
              goals,
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

exports.getMonth = (req, res) => {

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
      let {date} = req.query;
      //console.log(userId, recap, tplan, dream, goals, date)
      // need to strip month into day DD and month MM-YYYY
      console.log(date);
      const [day, month] = dateSplitter(date);

      Month.findOne(
        { user_id: userId, month: month },
        { month: 1, days: 1 }, // Specify fields to return
        { new: true, upsert: true } // To return the updated document and create if it doesn't exist
      )
        .then(monthFound => {
          console.log('Month Found:', monthFound);
          res.status(200).json(monthFound)
        })
        .catch(error => {
          console.error('Error finding Month:', error);
        });
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// THIS THE TEMPLATE
// TRY FIND THE DAY AND UPDATE WHAT YOU SPECIFICALLY WANT
// IF IT DOESNT EXIST, CREATE THE DAY, IF THE MONTH DOESNT EXIST CREATE THE MONTH AND DAY
exports.submitDream = (req, res) => {
  try {
    /* AUTHORISATION CHECK */
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }
    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ message: "Invalid authorization header format" });
    }
    const token = tokenParts[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
      /* AUTHORISATION VALID LOGIC */
      const userId = decodedToken.userId;
      const { dream, date } = req.body;
      // Use the dateSplitter to get the day and month from the date
      const [day, month] = dateSplitter(date); // Adjusted to use your dateSplitter function

      // First attempt to update the dream for the existing day
      Month.findOneAndUpdate(
        { user_id: userId, month: month, "days.day": day },
        // Update the dream for the matched day
        { $set: {"days.$.dream": dream} },
        // Returns the modified document rather than the original
        { new: true }
      ).then(updatedMonth => {
        if (updatedMonth) {
          // If the document was found and updated, return success response
          console.log('Month updated:', updatedMonth);
          return res.json({ message: "Dream updated successfully", updatedMonth });
        } else {
          // If the document or day wasn't found, add a new day with the dream
          Month.findOneAndUpdate(
            { user_id: userId, month: month },
            {
              $push: {
                days: {
                  day: day,
                  recap: "",
                  tplan: "",
                  dream: dream,
                  goals: {} // Assuming an empty object if not provided
                }
              }
            },
            { new: true, upsert: true } // Upsert to true to create a new document if none matches
          ).then(newMonth => {
            console.log('New day added or Month created:', newMonth);
            return res.json({ message: "New day added or Month created", newMonth });
          }).catch(error => {
            console.error('Error adding new day or creating Month:', error);
            return res.status(500).json({ message: "Error adding new day or creating Month" });
          });
        }
      }).catch(error => {
        console.error('Error updating Month:', error);
        return res.status(500).json({ message: "Error updating Month" });
      });
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};