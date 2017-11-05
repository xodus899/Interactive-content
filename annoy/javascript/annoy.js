let ask = prompt("Are we there yet?");

while (ask.indexOf("yes") === -1 && ask.indexOf("yeah") === -1) {
  ask = prompt("Are we there yet?");
}

alert("YAY!!, we finally made it.");

 