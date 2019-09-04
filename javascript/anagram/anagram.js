//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Anagram {
  constructor(word) {
    this.str = word
  }

  matches(arr) {
    // destructure this
    const { str } = this
    // setup a empty array for later return
    const matchTest = []
    // Itterate through the array of possible matches

   for(let words of arr){
     //clean string and compare
    if(this.cleanString(str) === this.cleanString(words)){
      //
      matchTest.push(words)
    }
  }
    return matchTest
  }
  
  cleanString(string){
    return string.toLowerCase().split('').sort().join('')
  }
}

