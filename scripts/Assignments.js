import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cityy = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findPetWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

const findTheCity = (currentPetWalker, cities) => {
    let theCity = null 
     
    for (const city of cities) {
        if (currentPetWalker.CityId === city.id) {
            theCity = city.name
        }
    } return theCity
}

export const Assignments = () => {
    let assignmentHTML = "<ul>"
    

    for (const currentPet of pets) {
        const currentPetWalker = findPetWalker(currentPet, walkers)
        const currentPetCity = findTheCity(currentPetWalker, cityy)
        
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetCity}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}



 // const currentWalkerCity = findCity(cityy, walkers)
// const findCity = (cityy, walkers) => {
//     let walkerCity = null

//     for (const walker of walkers) {
//         for (const city of cityy) {
//             if (walker.CityId === city.id) {
//                 walkerCity = city.name
//             }
//         }
//     } return walkerCity
// }