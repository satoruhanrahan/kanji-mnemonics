/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('test');

// delete all documents from the collection
db.getCollection('kanjis').deleteMany({})

// Insert documents into the collection.
db.getCollection('kanjis').insertMany([
    { "character": "人", "kunyomi": "ひと", "meaning": "Person", "mnemonic": "I saw a person and it was a ninja wearing a pair of jeans.", "onyomi": "ジン、ニン" },
    { "character": "一", "kunyomi": "ひとつ", "meaning": "One", "mnemonic": "It's itchy, so I gave it one scratch in a straight line.", "onyomi": "イチ、イツ" },
    { "character": "日", "kunyomi": "ひ", "meaning": "Sun/Day", "mnemonic": "Nietzche looked out the window one sunny day and started jittering.", "onyomi": "ニチ、ジツ" },
    { "character": "大", "kunyomi": "おおきい", "meaning": "Big", "mnemonic": "A big Thai person died with his arms and legs spread out.", "onyomi": "ダイ、タイ", "components": ["人", "一"] },
    { "character": "年", "kunyomi": "とし", "meaning": "Year", "mnemonic": "To signal a new year, my nan whacked the clothes line at noon.", "onyomi": "ネン", "components": ["午"] },
    { "character": "出", "kunyomi": "だす、でる", "meaning": "Go Out", "mnemonic": "I went out to the mountains to go shooting.", "onyomi": "シュツ", "components": ["山"] },
    { "character": "本", "kunyomi": "もと", "meaning": "Book", "mnemonic": "I stuck one book on a tree using honey.", "onyomi": "ホン", "components": ["木", "一"] },
    { "character": "中", "kunyomi": "なか", "meaning": "Middle", "mnemonic": "I put the juicy chewing gum right in the middle of my mouth.", "onyomi": "チュウ、ジュウ", "components": ["口"] }
]);

// Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);
