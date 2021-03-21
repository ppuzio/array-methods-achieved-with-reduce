# array-methods-achieved-with-reduce

## Already in the repo

* filter
* flat
* Object.fromEntries
* map

## Focus on first (easy and popular ones)

* every()
* some()
* filter()
* find()
* findIndex()
* includes() - find with Boolean(result)
* lastIndexOf()
* indexOf()
* slice()

## Focus on later (if ever)

* toString()
* push()
* join() - NodeLists though
* reduceRight() - reverse the input?
* reverse()
* splice()
* copyWithin()
* fill()
* flatMap()

## Experimental

* at()

## Problematic

* entries() - will have to create an iterator
* keys() - iterator
* values()

* Array.from() - sets

* pop() - two operations - might be a freebie but needs time to think
* shift() - as above
* unshift() - aa + a bit overkill to use reduce here

* sort()
* toLocaleString()

## No point implementing

* toSource() - out of use
* forEach() - forEach is found in almost every language
* Array.isArray()
* reduce()
* concat()
* Array.of()
