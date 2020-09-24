// const square = function (x) {
//   return x * x
// }

const square = x => x * x;

console.log('Square is ', square(3))

const event = {
  name: 'Birthday Party',
  guestList: ['will', 'isa', 'tupa'],
  printGuestList: function () {
    console.log('Guest list for ' + this.name);
    this.guestList.forEach(guest => console.log(guest + ' is attending ' + this.name))
  }
}

const eventTwo = {
  name: 'Birthday Party',
  printGuestList: () => console.log('Guest list for ' + this.name)
  // not working
}

const eventThree = {
  name: 'Birthday Party',
  printGuestList() {
    console.log('Guest list for ' + this.name);
  }
}

event.printGuestList()
eventTwo.printGuestList()
eventThree.printGuestList()