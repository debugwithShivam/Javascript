# How Typescript works

Developer
    │
    ▼
Write TypeScript (.ts)
    │
    ▼
TypeScript Compiler (tsc)
    │
    ├── Scanner (Tokenization)
    │
    ├── Parser (Create AST)
    │
    ├── Binder (Create Symbol Table)
    │
    ├── Type Checker
    │      │
    │      ├── Error → Stop / Show Errors
    │      └── Success
    │
    ├── Transformer
    │
    ├── Emitter
    │
    ▼
JavaScript (.js)
    │
    ▼
Node.js / Browser
    │
    ▼
JavaScript Engine (V8 etc.)
    │
    ▼
Machine Code


Example :- 
TS Code --> lexer ---> parser --> Binder --> Checker --> Emmiter --> .js

1) Lexer (Scanner)
The Lexer (called the Scanner inside the TypeScript compiler) is the first phase of compilation. Its job is to read the source code character by character and convert it into tokens. A token is the smallest meaningful piece of code.

Example:- let age = 20;

Keyword(let)
Identifier(age)
Operator(=)
String(20)
Semicolon(;)

| Text | Token               |
| ---- | ------------------- |
| let  | Keyword             |
| age  | Identifier          |
| =    | Assignment Operator |
| 20   | Numeric Literal     |
| ;    | Semicolon           |

What the Lexer Does
Reads characters from left to right.
Ignores spaces and comments.
Detects keywords.
Detects identifiers.
Detects operators.
Detects strings.
Detects numbers.
Detects punctuation.
Produces a stream of tokens.

2) Parser
The parser receives the tokens from the lexer and converts them into an Abstract Syntax Tree (AST). An AST is a tree representation of the program structure.

Example :-
__Input__
Keyword(let)
Identifier(age)
=
20
;
__Output__
VariableDeclaration
├── Name
│     age
└── Initializer
      20

What the Parser Does
Checks syntax.
Matches brackets.
Matches parentheses.
Understands expressions.
Understands functions.
Understands classes.
Builds the AST.

3) Binder
The binder walks through the AST and creates a Symbol Table.
A Symbol Table stores every declared name in the program.

Example
__Input__
AST
__OutPut__
Symbol Table

x → Variable
print → Function
Person → Class
User → Interface

4) Type Checker
The Type Checker is the smartest part of the compiler.
It verifies that the program is type-safe.

__Input__
AST + Symbol Table
__Output__
Either :- No Error OR Type Error

5) Emitter
The emitter converts the checked AST into JavaScript.
This is the final compiler stage.

__Input__
Type-checked AST
__Output__
JavaScript (.js)