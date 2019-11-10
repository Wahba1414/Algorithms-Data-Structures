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

    var isPrefix = true;

    // iterating on all word characters.
    for (let i = 0; i < wordList.length; i++) {

      if (!currentNode.children[wordList[i]]) {
        isPrefix = false;
        currentNode.children[wordList[i]] = new TrieNode(wordList[i], currentNode);

      } else {
        // some custom code for the challenge.

        if (currentNode.children[wordList[i]].isEnd) return false;

      }


      // Need to go for the next char in the word.
      currentNode = currentNode.children[wordList[i]];


      if (i == wordList.length - 1) {
        currentNode.isEnd = true;
      }


    }


    return !isPrefix;

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



function processData(input) {
  var lines = input.split('\n');
  var myTrie = new Trie();

  var isOkay;

  for (let i = 1; i < lines.length; i++) {
    let newWord = lines[i];

    isOkay = myTrie.insert(newWord);

    if (!isOkay) {
      console.log('BAD SET');
      console.log(newWord);
      return;
    }

  }

  console.log('GOOD SET')

}


var input = `100
hgiiccfchbeadgebc
biiga
edchgb
ccfdbeajaeid
ijgbeecjbj
bcfbbacfbfcfbhcbfjafibfhffac
ebechbfhfcijcjbcehbgbdgbh
ijbfifdbfifaidje
acgffegiihcddcdfjhhgadfjb
ggbdfdhaffhghbdh
dcjaichjejgheiaie
d
jeedfch
ahabicdffbedcbdeceed
fehgdfhdiffhegafaaaiijceijdgbb
beieebbjdgdhfjhj
ehg
fdhiibhcbecddgijdb
jgcgafgjjbg
c
fiedahb
bhfhjgcdbjdcjjhaebejaecdheh
gbfbbhdaecdjaebadcggbhbchfjg
jdjejjg
dbeedfdjaghbhgdhcedcj
decjacchhaciafafdgha
a
hcfibighgfggefghjh
ccgcgjgaghj
bfhjgehecgjchcgj
bjbhcjcbbhf
daheaggjgfdcjehidfaedjfccdafg
efejicdecgfieef
ciidfbibegfca
jfhcdhbagchjdadcfahdii
i
abjfjgaghbc
bddeejeeedjdcfcjcieceieaei
cijdgbddbceheaeececeeiebafgi
haejgebjfcfgjfifhihdbddbacefd
bhhjbhchdiffb
jbbdhcbgdefifhafhf
ajhdeahcjjfie
idjajdjaebfhhaacecb
bhiehhcggjai
bjjfjhiice
aif
gbbfjedbhhhjfegeeieig
fefdhdaiadefifjhedaieaefc
hgaejbhdebaacbgbgfbbcad
heghcb
eggadagajjgjgaihjdigihfhfbijbh
jadeehcciedcbjhdeca
ghgbhhjjgghgie
ibhihfaeeihdffjgddcj
hiedaegjcdai
bjcdcafgfjdejgiafdhfed
fgdgjaihdjaeefejbbijdbfabeie
aeefgiehgjbfgidcedjhfdaaeigj
bhbiaeihhdafgaciecb
igicjdajjdegbceibgebedghihihh
baeeeehcbffd
ajfbfhhecgaghgfdadbfbb
ahgaccehbgajcdfjihicihhc
bbjhih
a
cdfcdejacaicgibghgddd
afeffehfcfiefhcagg
ajhebffeh
e
hhahehjfgcj
ageaccdcbbcfidjfc
gfcjahbbhcbggadcaebae
gi
edheggceegiedghhdfgabgcd
hejdjjbfacggdccgahiai
ffgeiadgjfgecdbaebagij
dgaiahge
hdbaifh
gbhccajcdebcig
ejdcbbeiiebjcagfhjfdahbif
g
ededbjaaigdhb
ahhhcibdjhidbgefggdjebfcf
bdigjaehfchebiedajcjdh
fjehjgbdbaiifi
fbgigbdcbcgffdicfcidfdafghajc
ccajeeijhhb
gaaagfacgiddfahejhbgdfcfbfeedh
gdajaigfbjcdegeidgaccjfi
fghechfchjbaebcghfcfbdicgaic
cfhigaciaehacdjhfcgajgbhhgj
edhjdbdjccbfihiaddij
cbbhagjbcadegicgifgghai
hgdcdhieji
fbifgbhdhagch
cbgcdjea
dggjafcajhbbbaja
bejihed
eeahhcggaaidifdigcfjbficcfhjj`;


var input2 = `4
aab
a
aacghgh
aabghgh`;

var input3 = `2
zizo
zero
zizo`

processData(input);