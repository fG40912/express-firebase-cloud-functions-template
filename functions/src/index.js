const functions = require("firebase-functions");
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore')

const admin = initializeApp(
    // {
    //     credential: admin.credential.cert(serviceAccount),
    //     // The database URL depends on the location of the database
    //     databaseURL: "https://DATABASE_NAME.firebaseio.com"
    // }
)
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