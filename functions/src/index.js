const functions = require("firebase-functions");
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore')

const app = initializeApp()
const db = getFirestore()

exports.helloWorld = functions.https.onRequest(async (request, response) => {
    let challengesRef = db.collection("challenges");
    let snapshot = await challengesRef.get();

    let result = [];
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        result.push(doc.data())
    });
    response.send(JSON.stringify(result));
});