const questions = [
  {
    title: "Which operator returns true if the two compared values are not equal?",
    choices: ["<>", "==!", "~", "!=="],
    answer: "!==",
  },
  {
    title: "Which statement is the correct way to create a variable called rate and assign it the value 100?",
    choices: ["var rate = 100;", "var 100 = rate;", "100 = var rate;", "rate = 100;"],
    answer: "var rate = 100;",
  },
  {
    title: "How does a function create a closure?",
    choices: [
      "It reloads the document whenever the value changes",
      "It returns a reference to a variable in its parent scope",
      "It completes execution without returning",
      "It copies a local variable to the global scope",
    ],
    answer: "It returns a reference to a variable in its parent scope",
  },
  {
    title: "Which property references the DOM object that dispatched an event?",
    choices: ["self", "object", "target", "source"],
    answer: "target",
  },
  {
    title: "Which method converts JSON data to a JavaScript object?",
    choices: ["JSON.fromString()", "JSON.parse()", "JSON.toObject()", "JSON.stringify()"],
    answer: "JSON.parse()",
  },
  {
    title: "When would you use a conditional statement?",
    choices: [
      "When you want to reuse a set of statements multiple times",
      "When you want your code to choose between multiple options",
      "When you want to group data together",
      "When you want to loop through a group of statement",
    ],
    answer: "When you want your code to choose between multiple options",
  },
  {
    title: "Which Object method returns an iterable that can be used to iterate over the properties of an object?",
    choices: ["Object.get()", "Object.loop()", "Object.each()", "Object.keys()"],
    answer: "Object.keys()",
  },
  {
    title: "How does the forEach() method differ from a for statement?",
    choices: [
      "forEach allows you to specify your own iterator, whereas for does not",
      "forEach can be used only with strings, whereas for can be used with additional data types",
      "forEach can be used only with an array, whereas for can be used with additional data types",
      "for loops can be nested; whereas forEach loops cannot",
    ],
    answer: "forEach can be used only with an array, whereas for can be used with additional data types",
  },
  {
    title: "Which expression evaluates to true?",
    choices: ["[3] == [3]", "3 == '3'", "3 != '3'", "3 === '3'"],
    answer: "3 == '3'",
  },
  {
    title: "Which method cancels event default behavior?",
    choices: ["cancel()", "stop()", "preventDefault()", "prevent()"],
    answer: "preventDefault()",
  },
  {
    title: "Which method do you use to attach one DOM node to another?",
    choices: ["attachNode()", "getNode()", "querySelector()", "appendChild()"],
    answer: "appendChild()",
  },
  {
    title:
      "If you attempt to call a value as a function but the value is not a function, what kind of error would you get?",
    choices: ["TypeError", "SystemError", "SyntaxError", "LogicError"],
    answer: "TypeError",
  },
  {
    title: "Which statement selects all img elements in the DOM tree?",
    choices: [
      "Document.querySelector('img')",
      "Document.querySelectorAll('<img>')",
      "Document.querySelectorAll('img')",
      "Document.querySelector('<img>')",
    ],
    answer: "Document.querySelectorAll('img')",
  },
  {
    title: "Which JavaScript loop ensures that at least a singular iteration will happen?",
    choices: ["do...while", "forEach", "while", "for"],
    answer: "do...while",
  },
  {
    title: "Which of the following methods can be used to display data in some form using Javascript?",
    choices: ["document.write()", "console.log()", "window.alert()", "All of the above"],
    answer: "All of the above",
  },
  {
    title: "How to stop an interval timer in Javascript?",
    choices: ["clearTimer", "clearInterval", "intervalOver", "None of the above"],
    answer: "clearInterval",
  },
  {
    title: "What does … operator do in JS?",
    choices: [
      "Used to spread iterables to individual elements",
      "Describe datatype of undefined",
      "No such operator exsists",
      "None of the above",
    ],
    answer: "Used to spread iterables to individual elements",
  },
  {
    title: "Which of these evaluate to true?",
    choices: ["Boolean('false')", "Boolean('')", "Boolean(0)", "Boolean(NaN)"],
    answer: "Boolean('false')",
  },
  {
    title: "What will this code log to the console: console.log(typeof 41.1)",
    choices: ["Nothing. It results in a ReferenceError", "decimal", "float", "number"],
    answer: "number",
  },
  {
    title: "Which value is not falsey?",
    choices: ["[ ]", "undefined", "0", "null"],
    answer: "[ ]",
  },
  {
    title: "What will be logged to the console: console.log(typeof 'blueberry'); ",
    choices: ["array", "string", "Boolean", "object"],
    answer: "string",
  },
  {
    title: "Which choice is NOT an array method?",
    choices: ["array.slice()", "array.shift()", "array.push()", "array.replace()"],
    answer: "array.replace()",
  },
  {
    title: "Which choice is a valid example of an arrow function, assuming c is defined in the outer scope?",
    choices: ["a, b => { return c; }", "a, b => c", "{ a, b } => c", "(a,b) => c"],
    answer: "(a,b) => c",
  },
  {
    title:
      "Which statement can take a single expression as input and then look through a number of choices until one that matches that value is found?",
    choices: ["else", "when", "if", "switch"],
    answer: "switch",
  },
  {
    title: "What is the output of this code: var x = 6 + 3 + '3'",
    choices: ["93", "12", "66", "633"],
    answer: "93",
  },
  {
    title: "Which tag pair is used in HTML to embed JavaScript?",
    choices: ["<js></js>", "<script></script>", "<javascript></javascript>", "<style></style>"],
    answer: "<script></script>",
  },
  {
    title: "Which event is fired on a text field within a form when a user tabs to it, or clicks or touches it?",
    choices: ["focus", "blur", "hover", "enter"],
    answer: "focus",
  },
  {
    title: "Which method is called automatically when an object is initialized?",
    choices: ["create()", "new()", "constructor()", "init()"],
    answer: "constructor()",
  },
  {
    title: "How do you add a comment to JavaScript code?",
    choices: ["! This is a comment", "# This is a comment", "*/ This is a comment", "// This is a comment"],
    answer: "// This is a comment",
  },
  {
    title: "What statement can be used to skip an iteration in a loop?",
    choices: ["break", "pass", "skip", "continue"],
    answer: "continue",
  },
  {
    title: "Which of these is a valid variable name?",
    choices: ["5thItem", "firstName", "grand total", "function"],
    answer: "firstName",
  },
  {
    title:
      "Your code is producing the error: \"TypeError: Cannot read property 'reduce' of undefined.\" What does that mean?",
    choices: [
      "You are calling a method named reduce on an object that's declared but has no value",
      "You are calling a method named reduce on an object that does not exist",
      "You are calling a method named reduce on an empty array",
      "You are calling a method named reduce on an object that's has a null value",
    ],
    answer: "You are calling a method named reduce on an object that's declared but has no value",
  },
  {
    title: "What does the following expression evaluate to: [] == [];",
    choices: ["true", "undefined", "[ ]", "false"],
    answer: "false",
  },
  {
    title: "Why is it usually better to work with Objects instead of Arrays to store a collection of records?",
    choices: [
      "Objects are more efficient in terms of storage",
      "Adding a record to an object is significantly faster than pushing a record into an array",
      "Most operations involve looking up a record, and objects can do that better than arrays",
      "Working with objects makes the code more readable",
    ],
    answer: "Most operations involve looking up a record, and objects can do that better than arrays",
  },
  {
    title: "Which of the following is not a keyword in JavaScript?",
    choices: ["this", "catch", "function", "array"],
    answer: "array",
  },
  {
    title:
      "Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?",
    choices: ["All of them", "const", "var", "let"],
    answer: "var",
  },
  {
    title: "Which of the following operators can be used to do a short-circuit evaluation?",
    choices: ["++", "--", "==", "||"],
    answer: "||",
  },
  {
    title: "What will be logged to the console: console.log(typeof 42);",
    choices: ["'float'", "'value'", "'number'", "'integer'"],
    answer: "'number'",
  },
  {
    title: "Reference 'avenue' in: var roadTypes = ['steet', 'road', 'avenue']",
    choices: ["roadTypes.2", "roadTypes[3]", "roadTypes.3", "roadTypes[2]"],
    answer: "roadTypes[2]",
  },
];
