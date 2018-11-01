const Mutations = {
  createDog(obj, args) {
    global.dogs = global.dogs || []
    const newDog = args
    global.dogs.push(newDog)
    return newDog
  }
}

module.exports = Mutations
