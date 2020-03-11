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

  //O(M), M is the word length.
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
  // O(M), is this a whole word in the trie.
  contains(word) {
    var currentNode = this.root;
    var wordList = word.split('');

    for (let i = 0; i < wordList.length; i++) {
      if (currentNode.children[wordList[i]]) {
        // the word may be exist, lets continue.
        currentNode = currentNode.children[wordList[i]];
      } else {
        return false; //not found
      }
    }
    return true; //exist
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

  // O(M)
  getWord(lastChar) {
    var currentNode = lastChar;
    var word = [];
    while (currentNode) {
      word.unshift(currentNode.value);
      currentNode = currentNode.parent;
    }
    return word.join('');
  }

  // O(Alphabet size * M * M)
  getAllWords(currentNode, words) {
    if (currentNode.isEnd) {
      words.push(this.getWord(currentNode));
    }
    // iterate for all children.
    for (let key in currentNode.children) {
      this.getAllWords(currentNode.children[key], words);
    }
  }

  // O(M)
  // Remove the word and all its partials if not shared with other words.
  removeWord(word) {
    var currentNode = this.root;
    var wordList = word.split('');
    for (let i = 0; i < wordList.length; i++) {
      if (currentNode.children[wordList[i]]) {
        // the word may be exist, lets continue.
        currentNode = currentNode.children[wordList[i]];

        if (i == wordList.length - 1) {
          this.remove(currentNode);
        }

      } else {
        return false; //not found
      }
    }

    return true; //exist
  }

  remove(node) {

    if (node) {
      if (Object.keys(node.children).length == 0) {
        delete node.parent.children[node.value];
        this.remove(node.parent);
      }
    }

  }


  // TODO: better way for printing a Trie
  print(root) {
    var currentNode = root;
    if (currentNode.value != null) console.log(currentNode.value);
    for (let key in currentNode.children) {
      // console.log(`child: ${child}`);
      this.print(currentNode.children[key]);
    }
  }


}

var myTrie = new Trie();
myTrie.insert('Zizo');
myTrie.insert('Zamalek');
myTrie.insert('Mido');
myTrie.insert('Zero');
myTrie.insert('Zero1');
myTrie.insert('Zero2');
myTrie.insert('Zero3');
myTrie.insert('Smsm');
myTrie.insert('Smsm2');

myTrie.removeWord('Zero1')

console.log(myTrie.find('Z'));

// // console.log(myTrie.contains('zero'));
// myTrie.print(myTrie.root);
// console.log(myTrie.find('mido'));