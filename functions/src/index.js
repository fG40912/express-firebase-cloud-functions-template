const functions = require("firebase-functions");
const { initializeApp } = require('firebase-admin/app');
const express = require('express')

initializeApp()
const app = express()

const { getAllChallenges } = require('./controllers/challenges')

// middleware
app.use(express.json())

// routes
app.get('/challenges',getAllChallenges)

module.exports.helloWorld = functions.https.onRequest(app);