// import the pre setup kaplay instance.
import k from "./game";

// import scenes
import "./scenes/mainmenu";

console.log(k);

// Load the main menu scene at the start.
k.go('mainMenu');


/*
k.loadSprite("bean", "sprites/bean.png")

k.add([
	k.pos(120, 80),
	k.sprite("bean"),
])

k.onClick(() => k.addKaboom(k.mousePos()))
*/