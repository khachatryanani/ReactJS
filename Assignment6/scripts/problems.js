///////Problem 1///////
let word = "listen";
let words = ["google", "banana", "netsil", "javascript","inlets"];
const SortWord = (word)=>
{
    return [...word].sort().join("");
}

const FindAnagrams = (word, words)=>
{
    let sortedWord = SortWord(word);
    const sortedWords = words.map(SortWord);
    const anagrams=[];
    for(let i = 0; i<sortedWords.length; i++)
    {
        if(sortedWords[i] ==sortedWord )
        {
            anagrams.push(words[i]);
        }
    }

    return anagrams;

}

let anagrams = FindAnagrams(word, words);
for(let i = 0; i<anagrams.length; i++)
{
    console.log(anagrams[i]);
}

///////Problem 2///////
let pattern = "is";
let sentence = "This is some text.";

const RemoveOccurances = (pattern, sentence) =>{
    let pos = 0;
    while(sentence.indexOf(pattern,pos)!== -1)
    {
        let len = sentence.length;
        let index = sentence.indexOf(pattern);
        sentence = sentence.slice(0,index) +sentence.slice(index + pattern.length); 
     
    }

    return sentence;
}

sentence = RemoveOccurances(pattern, sentence);
console.log(sentence);

///////Problem 3///////
// let incompleteSentence = "_, we have a _.";
// let missingWords = ["Houston", "problem"];

let incompleteSentence = "May _ _ _ _ _.";
let missingWords = ["the", "Force", "be", "with", "you"];

const CompleteTheSentece =(incompleteSentence, missingWords)=>
{
    for(let i = 0; i<missingWords.length; i++)
    {
        incompleteSentence = incompleteSentence.replace("_", missingWords[i]);
    }

    return incompleteSentence;
}

let completeSentece = CompleteTheSentece(incompleteSentence, missingWords);
console.log(completeSentece);

///////Problem 4///////
//let longSentence = "A revolution without dancing, is a revolution not worth having.";
let longSentence = "Which will be worse - to live as a monster, or to die as a man.";

const FindTheLongestWord = (longSentence) =>
{
    let arrayOfWords = longSentence.split(/[-,.\s]/);;
    let maxLength = 0;
    let maxLengthIndex = 0;
    for(let i = 0; i<arrayOfWords.length; i++)
    {
        if(arrayOfWords[i].length > maxLength)
        {
            maxLength = arrayOfWords[i].length;
            maxLengthIndex = i;
        }
    }

    return arrayOfWords[maxLengthIndex];
}

console.log(FindTheLongestWord(longSentence));