'use strict'
const request = require('request-promise')
const BASE_URL = 'http://swapi.co/api'

/* ------ Callback style ------------------------------------------------------
function callApi(url, callback) {
  setTimeout(() => {
    callback(null, `Result: ${url}`)
  }, 1000)
}

callApi('swapi.co/api/people/1', (err, data) => {
  console.log(data)
})

console.log('mamamamama')
*/

function callApiDumb(url) {
    try {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Result: ${url}`)
        }, 1000)
        })
    } catch (error) {
        console.error(error)
      }
    }

async function callApi({path, fullUrl}) {
  const url = fullUrl || `${BASE_URL}/${path}`
  const result = JSON.parse(await request(url))
//   const vehicles = await request(`${BASE_URL}/vehicles/`)
  return result
  // console.log(vehicle
}

async function getVehicles(personID) {
    const person = await callApi({ path: `people/${personID}` })
    const vehicles = person.vehicles
    const promises = []
    vehicles.forEach(element => {
        promises.push(callApi({ fullUrl: element }))
    })

    return Promise.all(promises)
}


getVehicles(1).then(res => console.log(res.map(vehicle => vehicle.name))).catch(err => console.log(err))

//run().then(res => console.log(res.vehicles)).catch(err => console.log(err))


//var new_array = arr.map(function callback(result))