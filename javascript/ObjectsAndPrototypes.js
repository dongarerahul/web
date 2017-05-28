console.log("Inside ObjectsAndPrototypes !");

function Player(name, rank) {
  console.log("Inside Player: ", name)
  this.name = name;
  this.rank = rank;
}

Player.prototype.logInfo = function() {
  console.log("I am ", this.name);
}

Player.prototype.promote = function() {
  this.rank++;
  console.log("My rank is " + this.rank)
}

var ram = new Player("Ram", 1)
ram.logInfo()
ram.promote()

var gopal = new Player("Gopal", 10)
gopal.logInfo()
gopal.promote()
