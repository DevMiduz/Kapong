import k from '../game';

// Define the main menu scene
k.scene('mainMenu', () => {

    // reset cursor to default on frame start for easier cursor management
    k.onUpdate(() => k.setCursor("default"));

    // Function that adds a button to the game with a given text, position and function
    function addButton(
        txt = "start game",
        p = k.vec2(200, 100),
        f = () => k.debug.log("hello"),
    ) {
        // add a parent background object
        const btn = k.add([
            k.rect(240, 80, { radius: 8 }),
            k.pos(p),
            k.area(),
            k.scale(1),
            k.anchor("center"),
            k.outline(4),
            k.color(k.rgb()),
        ]);

        // add a child object that displays the text
        btn.add([
            k.text(txt),
            k.anchor("center"),
            k.color(0, 0, 0),
        ]);

        // onHoverUpdate() comes from area() component
        // it runs every frame when the object is being hovered
        btn.onHoverUpdate(() => {
            const t = k.time() * 10;
            btn.color = k.hsl2rgb((t / 10) % 1, 0.6, 0.7);
            btn.scale = k.vec2(1.2);
            k.setCursor("pointer");
        });

        // onHoverEnd() comes from area() component
        // it runs once when the object stopped being hovered
        btn.onHoverEnd(() => {
            btn.scale = k.vec2(1);
            btn.color = k.rgb();
        });

        // onClick() comes from area() component
        // it runs once when the object is clicked
        btn.onClick(f);

        return btn;
    }

    // Adds the buttons with the function we added
    addButton("Start", k.vec2(200, 100), () => k.debug.log("oh hi"));
    addButton("Quit", k.vec2(200, 200), () => k.debug.log("bye"));
});