// define what the endpoints do

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { createJWT } = require("../utils/auth");

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

exports.signup = (req, res) => {
  let {email, userName, password, password_confirmation } = req.body;
  let errors = [];
  if (!userName) {
    errors.push({ userName: "required" });
  }
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (!password_confirmation) {
    errors.push({
     password_confirmation: "required",
    });
  }
  if (password != password_confirmation) {
    errors.push({ password: "mismatch" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }
  User.findOne({email: email})
    .then(user=>{
       if(user){
          return res.status(422).json({ errors: [{ user: "email already exists" }] });
        }else {
          const user = new User({
            email,
            userName,
            password
          });
          bcrypt.genSalt(10, function(err, salt) { bcrypt.hash(password, salt, function(err, hash) {
            if (err) throw err;
            user.password = hash;
            user.save()
              .then(response => {
                res.status(200).json({
                  success: true,
                  result: response
                })
              })
              .catch(err => {
                res.status(500).json({
                    errors: [{ error: err }]
                });
              });
          });
      });
     }
  }).catch(err =>{
      res.status(500).json({
        errors: [{ error: 'Something went wrong' }]
      });
  })
}

exports.signin = (req, res) => {
  let { email, password } = req.body;
  let errors = [];
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid email" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (errors.length > 0) {
  return res.status(422).json({ errors: errors });
  }
  User.findOne({ email: email }).then(user => {
    if (!user) {
      return res.status(404).json({
        errors: [{ user: "not found" }],
      });
    } else {
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch) {
          return res.status(400).json({ errors: [{ password: "incorrect" }]
          });
        }
        let access_token = createJWT(
          user.email,
          user._id,
          3600
        );
        jwt.verify(access_token, process.env.TOKEN_SECRET, (err, decoded) => {
          if (err) {
            res.status(500).json({ errors: err });
          }
          if (decoded) {
              return res.status(200).json({
                success: true,
                token: access_token,
                userName: user.userName,
                curGoals: user.curGoals,
                dreamTriggers: user.dreamTriggers
              });
            }
          });
      }).catch(err => {
        res.status(500).json({ erros2: err });
      });
    }
  }).catch(err => {
    res.status(500).json({ erros: err });
  });
}

exports.updateGoals = (req, res) => {
  console.log('we made it')
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
      let {updatedGoals} = req.body;
      console.log(updatedGoals);

      User.findOneAndUpdate(
        { _id: userId },
        { $set: {curGoals: updatedGoals} },
      )
        .then(updatedUser => {
          console.log('Goals updated:', updatedUser);
        })
        .catch(error => {
          console.error('Error updating goals:', error);
        });

    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.changeTriggers = (req, res) => {
  console.log('we made it')
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
      let {updatedTriggers} = req.body;
      console.log(updatedTriggers);

      User.findOneAndUpdate(
        { _id: userId },
        { $set: {dreamTriggers: updatedTriggers} },
      )
        .then(updatedUser => {
          console.log('Triggers updated:', updatedUser);
        })
        .catch(error => {
          console.error('Error updating triggers:', error);
        });

    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Add an Object with No Keys
exports.addGoal = (req, res) => {
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
      const { goal } = req.body; // Assuming the client sends the title of the goal
      const userId = decodedToken.userId;
      console.log(`kumquat ${goal}`)

      User.findByIdAndUpdate(
        userId,
        { $set: { [`curGoals.${goal}`]: {} } },
        { new: true } // This option returns the updated document
      )
        .then(updatedUser => {
          if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
          }
          res.status(200).json({
            message: 'Goal added successfully',
            updatedUser
          });
        })
        .catch(err => res.status(500).json({ errors: err }));
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Add a Key to an Existing Object
exports.addKeyToObject = (req, res) => {
  const { objectName, keyName, value } = req.body;
  User.findByIdAndUpdate(req.userId, { $set: { [`curGoals.${objectName}.${keyName}`]: value } })
    .then(() => res.status(200).json({ message: 'Key added successfully' }))
    .catch(err => res.status(500).json({ errors: err }));
};

// Delete a Key from an Object
exports.deleteKeyFromObject = (req, res) => {
  const { objectName, keyName } = req.body;
  User.findByIdAndUpdate(req.userId, { $unset: { [`curGoals.${objectName}.${keyName}`]: "" } })
    .then(() => res.status(200).json({ message: 'Key deleted successfully' }))
    .catch(err => res.status(500).json({ errors: err }));
};

// Delete an Entire Object
exports.deleteObject = (req, res) => {
  const { objectName } = req.body;
  User.findByIdAndUpdate(req.userId, { $unset: { [`curGoals.${objectName}`]: "" } })
    .then(() => res.status(200).json({ message: 'Object deleted successfully' }))
    .catch(err => res.status(500).json({ errors: err }));
};