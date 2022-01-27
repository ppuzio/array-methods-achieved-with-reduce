# array-methods-achieved-with-reduce

Repository with examples used in my Medium article *How to use Reduce in Javascript*

## Installation

1. Clone this project.
2. Install all dependencies by opening this project in terminal and running 

```sh
yarn
```

or

```sh
npm install
```

3. Launch already existing tests or write new/edit them according to your needs.

## Tests

I'm using `Jest` as a testing framework.
To launch tests, simply run

```sh
yarn test
```

or

```sh
npm run jest
```

## Methods

### **Already in the repo**

* filter
* flat
* Object.fromEntries
* map

### Ones that should be doable quickly (easy and popular ones) and I might implement them soon

* every()
* some()
* find()
* findIndex()
* includes() - find with Boolean(result)
* lastIndexOf()
* indexOf()
* slice()

### Focus on later (if ever)

* toString()
* push()
* join() - NodeLists though
* reduceRight() - reverse the input?
* reverse()
* splice()
* copyWithin()
* fill()
* flatMap()

### Experimental

* at()

### Problematic

* entries() - will have to create an iterator
* keys() - iterator
* values()

* Array.from() - sets

* pop() - two operations - might be a freebie but needs time to think
* shift() - as above
* unshift() - aa + a bit overkill to use reduce here

* sort()
* toLocaleString()

### No point implementing

* toSource() - out of use
* forEach() - forEach is found in almost every language
* Array.isArray() - reduce is an *Array.prototype* method
* reduce() - :)
* concat()
* Array.of()
