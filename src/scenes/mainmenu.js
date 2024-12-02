import k from '../game';

import { menu_button } from "../ui/buttons/menu_button";
import { title_text_style } from "../ui/styles/text_styles";

// Define the main menu scene
k.scene('mainMenu', () => {

    // reset cursor to default on frame start for easier cursor management
    k.onUpdate(() => k.setCursor("default"));

    // Add Title KAPONG!
    const title = k.add([
        k.pos(k.width() / 2, k.height() / 4),
        k.text("KAPONG", title_text_style),
        k.anchor(title_text_style.anchor)
    ]);

    // Underline it!
    k.onDraw(() => {
        k.drawLine({
            p1: k.vec2(title.pos.x - title.width / 2, title.pos.y + title.height / 2 + 2),
            p2: k.vec2(title.pos.x + title.width / 2, title.pos.y + title.height / 2 + 2),
            width: 8,
            color: k.rgb(255, 255, 255),
        });
    });

    // Adds the buttons with the function we added
    menu_button(
        {
            x: k.width() / 2,
            y: k.height() / 2,
            w: 250,
            h: 75,
            text: "PLAY",
            onClickAction: () => k.go("game")
        });


});