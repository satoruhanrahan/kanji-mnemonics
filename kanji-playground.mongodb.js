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
    { "character": "人", "kunyomi": ["ひと"], "meaning": "Person", "mnemonic": "I saw a <b>person</b> and it was a <b>nin</b>ja wearing a pair of <b>jean</b>s.", "onyomi": ["ジン", "ニン"] },
    { "character": "一", "kunyomi": ["ひとつ"], "meaning": "One", "mnemonic": "It's <b>itchy</b>, so I gave it <b>one</b> scratch in a straight line.", "onyomi": ["イチ", "イツ"] },
    { "character": "日", "kunyomi": ["ひ"], "meaning": "Sun/Day", "mnemonic": "<b>Nietzche</b> looked out the window one <b>sun</b>ny day and started <b>jitt</b>ering.", "onyomi": ["ニチ", "ジツ"] },
    { "character": "大", "kunyomi": ["おおきい"], "meaning": "Big", "mnemonic": "A <b>big</b> <b>Thai</b> person died with his arms and legs spread out.", "onyomi": ["ダイ", "タイ"], "components": ["人", "一"] },
    { "character": "年", "kunyomi": ["とし"], "meaning": "Year", "mnemonic": "To signal a new <b>year</b>, my <b>nan</b> whacked the clothes line at <b>noon</b>.", "onyomi": ["ネン"], "components": ["午"] },
    { "character": "出", "kunyomi": ["だす", "でる"], "meaning": "Go Out", "mnemonic": "I went <b>out</b> to the <b>mountains</b> to go <b>shoot</b>ing.", "onyomi": ["シュツ"], "components": ["山"] },
    { "character": "本", "kunyomi": ["もと"], "meaning": "Book", "mnemonic": "I stuck <b>one</b> <b>book</b> on a <b>tree</b> using <b>hon</b>ey.", "onyomi": ["ホン"], "components": ["木", "一"] },
    { "character": "中", "kunyomi": ["なか"], "meaning": "Middle", "mnemonic": "I put the <b>jui</b>cy <b>chew</b>ing gum right in the <b>middle</b> of my <b>mouth</b>.", "onyomi": ["チュウ", "ジュウ"], "components": ["口"] },
    { "character": "子", "kunyomi": ["こ"], "meaning": "Child", "mnemonic": "After <b>completing</b> giving birth <b>she</b> said <b>one</b> <b>child</b> is enough.", "onyomi": ["シ", "ス"], "components": ["一", "了"] },
    { "character": "見", "kunyomi": ["みる", "みえる", "みせる"], "meaning": "See", "mnemonic": "<b>Ken</b> said \"<b>look</b> at me running with my <b>eyes</b> closed!\"", "onyomi": ["ケン"], "components": ["目", "儿"] },
    { "character": "上", "kunyomi": ["うえ", "あがる", "かみ", "のぼる"], "meaning": "Above", "mnemonic": "<b>Geor</b>ge said \"<b>sure</b>, I'll <b>climb</b> <b>up</b> <b>above</b> there!\"", "onyomi": ["ジョウ", "ショウ"], "components": [] },
    { "character": "生", "kunyomi": ["なま", "いきる", "うむ", "はえる"], "meaning": "Life", "mnemonic": "Some <b>ce</b>lery grew to <b>life</b> from the <b>ground</b> near the <b>shore</b>.", "onyomi": ["セイ", "ショウ"], "components": ["土"] },
    { "character": "手", "kunyomi": ["て"], "meaning": "Hand", "mnemonic": "He <b>shoo</b>ed away 3 flies with his <b>hand</b>.", "onyomi": ["シュ"], "components": [] },
    { "character": "ニ", "kunyomi": ["ふたつ"], "meaning": "Two", "mnemonic": "We all have <b>two</b> <b>knee</b>s", "onyomi": ["二"], "components": ["一"] },
    { "character": "気", "kunyomi": ["いき"], "meaning": "Spirit", "mnemonic": "The <b>ki</b>ng is the only man with enough <b>spirit</b> to <b>ki</b>ll.", "onyomi": ["キ", "ケ"], "components": ["𠂉", "一", "⺄", "㐅"] },
    { "character": "十", "kunyomi": ["とお"], "meaning": "Ten", "mnemonic": "I have <b>ten</b> <b>jew</b>el rings on all <b>ten</b> of my fingers", "onyomi": ["ジュウ"], "components": ["一", "丨"] },
    { "character": "女", "kunyomi": ["おんな", "め"], "meaning": "Woman", "mnemonic": "The <b>women</b> from <b>New York</b> can't take a <b>jo</b>ke.", "onyomi": ["ジョ", "ニョ", "ニョウ"], "components": [] },
    { "character": "三", "kunyomi": ["みっつ"], "meaning": "Three", "mnemonic": "I have <b>three</b> <b>son</b>s.", "onyomi": ["サン"], "components": ["一"] },
    { "character": "入", "kunyomi": ["はいる", "いれる"], "meaning": "Enter", "mnemonic": "The <b>new</b> guy didn't know how to <b>enter</b> the building.", "onyomi": ["ニュウ"], "components": [] },
    { "character": "小", "kunyomi": ["ちいさい"], "meaning": "Small", "mnemonic": "<b>Small</b> people are <b>shor</b>t.", "onyomi": ["ショウ"], "components": ["亅", "ハ"] },
    { "character": "目", "kunyomi": ["め"], "meaning": "Eye", "mnemonic": "He was <b>mock</b>ed because he had no <b>eyes</b>.", "onyomi": ["モク"], "components": [] },
    { "character": "下", "kunyomi": ["した", "しも", "さがる", "くだる"], "meaning": "Below", "mnemonic": "<b>Gue</b>ss where the <b>ca</b>t is, <b>under</b> the <b>car</b>!", "onyomi": ["カ", "ゲ"], "components": [] },
    { "character": "立", "kunyomi": ["たつ"], "meaning": "Stand", "mnemonic": "There was a doorman <b>standing</b> at the <b>Ritz</b> hotel.", "onyomi": ["リツ"], "components": ["亠", "䒑"] },
    { "character": "学", "kunyomi": ["まなぶ"], "meaning": "Learn", "mnemonic": "The <b>child</b> was at class to <b>learn</b> but he just <b>gawk</b>ed at the teacher instead.", "onyomi": ["ガク"], "components": ["龸", "子"] },
    { "character": "月", "kunyomi": ["つき"], "meaning": "Moon", "mnemonic": "You need <b>guts</b> to <b>get</b> to the <b>moon</b>.", "onyomi": ["ガツ", "ゲツ"], "components": [] },
    { "character": "田", "kunyomi": ["た"], "meaning": "Rice Field", "mnemonic": "I'd rather go to <b>Denn</b>y's then plant rice in the <b>rice field</b>.", "onyomi": ["デン"], "components": [] },
    { "character": "山", "kunyomi": ["やま"], "meaning": "Mountain", "mnemonic": "My three <b>son</b>s said it was <b>sun</b>ny on the <b>mountains</b>.", "onyomi": ["サン"], "components": [] },
    { "character": "五", "kunyomi": ["いつつ"], "meaning": "Five", "mnemonic": "<b>Go</b>d gave me <b>five</b> fingers on each hand.", "onyomi": ["ゴ"], "components": [] },
    { "character": "力", "kunyomi": ["ちから"], "meaning": "Power", "mnemonic": "<b>Ricky</b> has the <b>power</b> to pick up heavy <b>rock</b>s.", "onyomi": ["リョク", "リキ"], "components": [] },
    { "character": "名", "kunyomi": ["な"], "meaning": "Name", "mnemonic": "One <b>night</b> in <b>May</b>, I heard someone say my <b>name</b> with their <b>mouth</b>.", "onyomi": ["メイ", "ミョウ"], "components": ["夕", "口"] },
    { "character": "金", "kunyomi": ["かね"], "meaning": "Gold/Money", "mnemonic": "The <b>king</b> kept his <b>gold</b> under the roof.", "onyomi": ["キン"], "components": ["𠆢", "丷", "王"] },
    { "character": "男", "kunyomi": ["おとこ"], "meaning": "Male", "mnemonic": "<b>None</b> of the <b>men</b> had any <b>power</b> after they were <b>done</b> in the <b>rice field</b>.", "onyomi": ["ダン", "ナン"], "components": ["田", "力"] },
    { "character": "文", "kunyomi": ["ふみ"], "meaning": "Literature", "mnemonic": "The <b>mon</b>key read <b>literature</b> to learn how to make <b>bun</b>s.", "onyomi": ["ブン", "モン"], "components": [] },
    { "character": "四", "kunyomi": ["よっつ"], "meaning": "Four", "mnemonic": "<b>She</b> only has <b>four</b> teeth in her <b>mouth</b>.", "onyomi": ["シ"], "components": ["囗", "儿"] },
    { "character": "先", "kunyomi": ["さき"], "meaning": "Ahead", "mnemonic": "<b>Send</b> that man <b>ahead</b>.", "onyomi": ["セン"], "components": ["⺧", "儿"] },
    { "character": "口", "kunyomi": ["くち"], "meaning": "Mouth", "mnemonic": "It's <b>cool</b> how you can <b>call</b> people's names with your <b>mouth</b>?", "onyomi": ["コウ", "ク"], "components": [] },
    { "character": "川", "kunyomi": ["かわ"], "meaning": "River", "mnemonic": "I <b>sense</b> there is a <b>river</b> nearby.", "onyomi": ["セン"], "components": ["ノ", "丨"] },
    { "character": "正", "kunyomi": ["ただしい", "まさしく"], "meaning": "Correct", "mnemonic": "They <b>stopped</b> me at the <b>shore</b> and they <b>say</b> you can only pass if you answer <b>correctly</b>.", "onyomi": ["セイ", "ショウ"], "components": ["一", "止"] },
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
