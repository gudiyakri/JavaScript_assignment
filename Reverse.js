function reverseWords(sentence) {
    const words = sentence.split(' '); // Split the sentence into words
    let reversedSentence = '';
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const reversedWord = word.split('').reverse().join('');
      
      // Add the reversed word to the reversed sentence
      if (i === 0) {
        reversedSentence += reversedWord;
      } else {
        reversedSentence += ' ' + reversedWord;
      }
    }
  
    return reversedSentence;
  }
  
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWords(inputSentence);
  
  console.log(reversedSentence);
  