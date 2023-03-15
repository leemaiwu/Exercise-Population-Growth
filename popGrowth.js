function nbYear (pO, percentInt, inh, pS) {
    let years = 0
    let percentage = percentInt * .01
    while (pO < pS) {
        let newPO = (pO + pO * percentage + inh)
        pO = newPO
        years++
    }
    return years
}

console.log(nbYear(1500, 5, 100, 5000))
