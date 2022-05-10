//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge=  '30 Days Of JavaScript';
//Print the string on the browser console using console.log()
console.log(challenge)
//Print the length of the string on the browser console using console.log()
console.log(challenge.length)
//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())
//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())
//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0,1))
console.log(challenge.substring(0,3))
//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr(2,17))
//Check if the string contains a word Script using includes() method
console.log(challenge.includes('script'));
//Split the string into an array using split() method
console.log(challenge.split())
//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let string='facebook,google,microsoft,apple,ibm,oracle,amazon';
console.log(string.split(','))
//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('javascript','python'))
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt('15'))
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('j'))
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = "you cannot end a sentence with because because because is a conjuntion"
console.log(sentence.indexof('because'))
//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'))
//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'))
//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim())
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'))
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('javascript'))
//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));
//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let con='30 days of';
console.log(con.concat('javascript'));
//Use repeat() method to print 30 Da
//Exercise: Level 2
//Using console.log() print out the following statement:
let quote1='There is no exercise better for the heart than reaching down and lifting people up.';
console.log(quote1.print())
//Using console.log() print out the following quote by Mother Teresa:
let quote2="Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote2.print())
//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num='10'
console.log(typeof '10')
let numInt=parseInt(num)
console.log(numInt)
//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num='9.81'
let numInt=parseInt(num)
console.log(numInt) //10
//Check if 'on' is found in both python and jargon
 let float = '9.8'
let numFloat = parseFloat(float)
console.log(numFloat)
console.log(Math.round(numFloat))

console.log('python'.includes('on')&& 'jargon'.includes('on'))

let randomNum = Math.random()
let numBtn0And100 = randomNum * 101
console.log(numBtn0And100)
let numBtn0And100RoundToFloor = Math.floor(numBtn0And100)
console.log(numBtn0And100RoundToFloor)

 console.log('i hope this course is not full ofjargon'.includes('jargon'))

console.log(sentence.substr(31,54))
//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
console.log('Love is the best thing in ths world. some found their love and some are still looking for their love.'.match('love'))
//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction
console.log(sentence.match('because'))
//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income = (5000 + 10000 + 15000)
console.log(income)

