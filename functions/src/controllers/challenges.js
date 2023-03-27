const { getFirestore } = require('firebase-admin/firestore')
const db = getFirestore()

const getAllChallenges = async (req, res) => {
    let challengesRef = db.collection("challenges");
    let snapshot = await challengesRef.get();

    let result = [];
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        result.push(doc.data())
    });
    res.send(JSON.stringify(result));
}

module.exports = { getAllChallenges }