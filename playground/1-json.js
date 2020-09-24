const fs = require('fs')

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json-read.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title)

// console.log(dataBuffer.toString())

// console.log(bookJSON)
//
// const parsedData = JSON.parse(bookJSON)
//
// console.log(parsedData);
// console.log(parsedData.author);

// Chanllenge Time

const challengeDataBuffer = fs.readFileSync('1-json-read2.json')
console.log('challengeDataBuffer', challengeDataBuffer)
const challengeDataJSON = challengeDataBuffer.toString()
console.log('challengeDataJSON', challengeDataJSON)
const challengeData = JSON.parse(challengeDataJSON)
console.log('challengeData', challengeData)

challengeData.name = 'William'
challengeData.age = 28

challengeJSON = JSON.stringify(challengeData)

fs.writeFileSync('1-json-read2.json', challengeJSON)



/*
 original JSON
{
  "name": "Andrew",
  "planet": "Earth",
  "age": 27
}

*/
