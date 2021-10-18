import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const cityArray = getCities()
const walkers = getWalkers()


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cityArray) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

