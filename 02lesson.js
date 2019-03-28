import { inherits } from "util";

const fs = require( id: 'fs' )

// --------- event-loop
/* setImmediate(() => {
    console.log('setImmediate')
})

process.nextTick( callback: () => {
    console.log('nextTick')
})
 */

fs.readFile(__, () => {
    setTimeout( handler: () => {
        console.log('setTimeout')
    }, timeout: 0)
    setImmediate(() => {
        console.log('setImmediate')
    })
    process.nextTick(callback: () => {
        console.log('nextTick')
    })
})

// ----------- promisify
// always asynchronous



// emitter
class TaskProcesor extends EventEmitter {
    run(task) {
    .
    .
    .
    }
}

// ------- require
const customMath = require( id: './custom-math') //folder
const constants = require( id: './custom-math/constants') //load single file

console.log('1+1 =', customMath.add(a:1,b:1))
console.log('2*10=', customMath.multiply(a:2, b:10))

console.log('PI is', constants.PI)
console.log('E is', constants.E)

//search paths for modules if you do not provide relative path
console.log(module.paths)

// -------- NPM ---- require
/* in terminal
npm init
test command: 
git repository:
-> generate json file with this description -> package.json

npm -g || --global //global installation
npm i //install
npm install request
-> create folder 'node_modules'

npm audit -> security report, finding vulnerabilities
nom audit fix

*lodash library* (zero dependencies)
*sequelize*

package.json >> "dependencies": {"request": "^2.88.0" } //or tilde ~

npm i --save-dev mocha
*mocha* - test framework

*/