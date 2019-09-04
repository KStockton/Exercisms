//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Anagram {
  constructor(word) {
    this.str = word
  }

  matches(arr) {
    const { str } = this
    let matchTest = []

   for(let words of arr){
    if(this.cleanString(str) === this.cleanString(words)){
      matchTest.push(words)
    }
  }
    return matchTest
  }
  
  cleanString(string){
    return string.toLowerCase().split('').sort().join('')
  }
}

