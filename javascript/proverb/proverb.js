//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...words) => {
  // const words = [...str1]
let text = words.slice(0, -1)

let sentence = text.map((word, i) => {
 return `For want of a ${word} the ${words[i + 1 ]} was lost.\n`

}).join('')
console.log('sentence', sentence)
// }

 const result = sentence+`And all for the want of a ${words[0]}.`
return result

};

