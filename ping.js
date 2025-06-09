const emailBox = document.getElementById('emailBox');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const submitButton = document.getElementById('submitButton');
const errorMsg = document.getElementById('error');
const emailBorder = document.querySelector('input[type="email"]')
submitButton.addEventListener( 'click', () => {
    if(!emailRegex.test(emailBox.value)){
        errorMsg.classList.remove('hide');
        emailBorder.style.borderColor = 'hsl(354, 100%, 66%)';
    }else{
        location.reload();
    }
})

//a liitle bit of RegEx
//testing
const string = 'all your are belong to us';
const regex = /belong/;
const isExsisting = regex.test(string);
console.log(isExsisting);
//^Caret sign: this is used to specify that the start of the string 
//matches the register expression
//$base sign: asserts position at the end of the string, or nefore the line terminator
//right at the end of the string(if any)
const string1 = ' all of us belong';
const regex1 = /belong$/;
const isExsisting1 = regex1.test(string1);
console.log(isExsisting1);
//ex2
//[a-z]character classes: Match a single character present 
//+ : One or More and *: Zero or more

const string2 = 'My name is cody and my age is 24';
const regex2 = /name is [a-z]+/;
const isExsisting2 = regex2.test(string2);
console.log(isExsisting2);

const string3 = 'My name is cody and my age is 123';
const regex3 = /age is [123]+/;
const isExsisting3 = regex3.test(string3);
console.log(isExsisting3);

const string4 = 'My name is Co99dy and my age is 123';
const regex4 = /name is [a-zA-Z0-9]+/;
const isExsisting4 = regex4.test(string4);
console.log(isExsisting4);
//?: means Zero or one of the preceeding character set
const string5 = 'My name is Cody and my age is 123';
const regex5= /name is Co?/;
const isExsisting5 = regex5.test(string5);
console.log(isExsisting5);

const string6 = 'My name is Cody and my age is 12 e';
const regex6= /age is [0-9]{1,3}$/;
const isExsisting6 = regex6.test(string6);
console.log(isExsisting6);

const string7 = 'My name is 999';
const regex7 = /name is ([a-z]+)/;
const match = regex7.exec(string7);
if (match) {
    const name = match[1];
    console.log(name);
} else{
    console.log('no match')
}


const string8 = 'filea.mp3 file_01.mp3 file_02.mp3 test.csv other.txt';
const regex8 = /(\w+)\.mp3/g;
let match2 = regex8.exec(string8);
while (match2) {
    const filename = match2[1]; // <-- use match2 here, not match
    console.log(filename);
    match2 = regex8.exec(string8);
}


