const router = require("express").Router()
const bcrypt = require('bcryptjs')
const User = require("../models/User.model")
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('./../middleware/jwt.middleware')



router.post('/signup', (req, res, next) => {

  const { email, password, username, profileImg } = req.body

  User
    .create({ email, password, username, profileImg })
    .then((createdUser) => {
      const { email, username, _id } = createdUser
      const user = { email, username, _id }

      res.status(201).json({ user })
    })
    .catch(err => next(err))
})

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    res.status(400).json({ message: "Provide email and password." });
    return;
  }

  User
    .findOne({ email })
    .then((foundUser) => {
      console.log(foundUser)
      if (!foundUser) {
        res.status(401).json({ errorMessages: "User not found." })
        return;
      }

      if (bcrypt.compareSync(password, foundUser.password)) {

        const { _id, email, username, role } = foundUser;

        const payload = { _id, email, username, role }

        const authToken = jwt.sign(
          payload,
          process.env.TOKEN_SECRET,
          { algorithm: 'HS256', expiresIn: "6h" }
        )

        res.status(200).json({ authToken });
      }
      else {
        res.status(401).json({ errorMessages: "Unable to authenticate the user" });
      }

    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Internal Server Error" })
    });
});

router.get('/verify', isAuthenticated, (req, res) => {
  res.status(200).json(req.payload)
})


module.exports = router