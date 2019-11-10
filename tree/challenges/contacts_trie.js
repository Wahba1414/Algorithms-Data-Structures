class TrieNode {
  constructor(value, parent) {
    this.value = value;

    // reference to the parent.
    this.parent = parent; //will be set later.

    this.children = {};

    this.isEnd = false; //an end of some word.

  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null); //Used to as a start only.
  }

  insert(word) {
    var currentNode = this.root;

    var wordList = word.split('');

    // iterating on all word characters.
    for (let i = 0; i < wordList.length; i++) {

      if (!currentNode.children[wordList[i]]) {

        currentNode.children[wordList[i]] = new TrieNode(wordList[i], currentNode);

      }


      // Need to go for the next char in the word.
      currentNode = currentNode.children[wordList[i]];


      if (i == wordList.length - 1) {
        currentNode.isEnd = true;
      }


    }


    return this;

  }



  // is this a whole word in the trie.
  contains(word) {
    var currentNode = this.root;

    var wordList = word.split('');


    for (let i = 0; i < wordList.length; i++) {
      if (currentNode.children[wordList[i]]) {
        // the word may be exist, lets continue.
        currentNode = currentNode.children[wordList[i]];

        if (i == wordList.length - 1) {

          // test
          console.log(this.getWord(currentNode));
          //last char in the word.
          return currentNode.isEnd;
        }

      } else {
        return false;
      }
    }


  }

  // find all words with this prefix.
  find(prefix) {

    var currentNode = this.root;
    var words = [];

    var prefixList = prefix.split('');

    for (let i = 0; i < prefixList.length; i++) {
      if (currentNode.children[prefixList[i]]) {
        currentNode = currentNode.children[prefixList[i]];
      } else {
        // no words found.
        return words;
      }
    }

    // get all words for this prefix.
    this.getAllWords(currentNode, words);

    return words;

  }

  getWord(lastChar) {
    var currentNode = lastChar;
    var word = [];

    while (currentNode) {
      word.unshift(currentNode.value);

      currentNode = currentNode.parent;
    }

    return word.join('');

  }

  getAllWords(currentNode, words) {
    if (currentNode.isEnd) {
      words.push(this.getWord(currentNode));
    }

    // iterate for all children.
    for (let key in currentNode.children) {
      this.getAllWords(currentNode.children[key], words);
    }

  }

  print(root) {
    var currentNode = root;
    if (currentNode.value != null) console.log(currentNode.value);
    for (let key in currentNode.children) {
      // console.log(`child: ${child}`);
      this.print(currentNode.children[key]);
    }
  }


}

function contacts(queries) {
  var myTrie = new Trie();

  for (let i = 0; i < queries.length; i++) {
    var action = queries[i][0];
    var param = queries[i][1];

    switch (action) {
      case 'add':
        myTrie.insert(param);
        break;

      case 'find':
        console.log(myTrie.find(param).length);
        break;
    }

  }

}

var queries = [['add', 'hack'],
['add', 'hackerrank'],
['find', 'hac'],
['find', 'hak']];
contacts(queries);