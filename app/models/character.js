export class Character {
  constructor(name, weapon, favFood) {
    if (!name || !weapon || !favFood) {
      this.name = name
      this.weapon = weapon
      this.favFood = favFood
    }
  }
  eat() {
    console.log(`${this.name} is eating ${this.favFood}`)
  }
}

let characters = [
  new Character("Leo", "Katana", "pizza"),
  new Character("Donny", "Bo Staff", "pizza"),
  new Character("Shredder", "armor", "soup")
]

for (let i = 0; i < characters.length; i++) {
  const character = characters[i]
  character.eat()
}
