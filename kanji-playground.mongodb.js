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
    { "character": "人", "kunyomi": "ひと", "meaning": "Person", "mnemonic": "I saw a <b>person</b> and it was a <b>nin</b>ja wearing a pair of <b>jean</b>s.", "onyomi": "ジン、ニン" },
    { "character": "一", "kunyomi": "ひとつ", "meaning": "One", "mnemonic": "It's <b>itchy</b>, so I gave it <b>one</b> scratch in a straight line.", "onyomi": "イチ、イツ" },
    { "character": "日", "kunyomi": "ひ", "meaning": "Sun/Day", "mnemonic": "<b>Nietzche</b> looked out the window one <b>sun</b>ny day and started <b>jitt</b>ering.", "onyomi": "ニチ、ジツ" },
    { "character": "大", "kunyomi": "おおきい", "meaning": "Big", "mnemonic": "A <b>big</b> <b>Thai</b> person died with his arms and legs spread out.", "onyomi": "ダイ、タイ", "components": ["人", "一"] },
    { "character": "年", "kunyomi": "とし", "meaning": "Year", "mnemonic": "To signal a new <b>year</b>, my <b>nan</b> whacked the clothes line at <b>noon</b>.", "onyomi": "ネン", "components": ["午"] },
    { "character": "出", "kunyomi": "だす、でる", "meaning": "Go Out", "mnemonic": "I went <b>out</b> to the <b>mountains</b> to go <b>shoot</b>ing.", "onyomi": "シュツ", "components": ["山"] },
    { "character": "本", "kunyomi": "もと", "meaning": "Book", "mnemonic": "I stuck <b>one</b> <b>book</b> on a <b>tree</b> using <b>hon</b>ey.", "onyomi": "ホン", "components": ["木", "一"] },
    { "character": "中", "kunyomi": "なか", "meaning": "Middle", "mnemonic": "I put the <b>jui</b>cy <b>chew</b>ing gum right in the <b>middle</b> of my <b>mouth</b>.", "onyomi": "チュウ、ジュウ", "components": ["口"] },
    { "character": "子", "kunyomi": "こ", "meaning": "Child", "mnemonic": "After <b>completing</b> giving birth <b>she</b> said <b>one</b> <b>child</b> is enough.", "onyomi": "シ、ス", "components": ["一", "了"] }
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
