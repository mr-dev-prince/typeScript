// keywords to declare variables in typescript - let, var, const


let message : string = "Hello World";

message = "Hello There" // variables declared with 'let' keywords can be changed.

var count : number = 4;

count = 5; // variables declared with 'var' keywords can be changed.

//In modern TypeScript and JavaScript development, let is generally preferred over var due to its more predictable scoping behavior and prevention of common issues like unintentional variable re-declaration.

const password : number = 3452676;


// password = 45; // variales declared with 'const' keyword can not be changes or reassigned;

console.log(message);
console.log(password);
console.log(message);