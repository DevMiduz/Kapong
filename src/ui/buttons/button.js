import k from "../../game";

export function button(props) {
    const {
        x, y, w, h, text, button_style, onClickAction
    } = props;

    const button = k.add([
        k.rect(w, h, { radius: 8 }),
        k.pos(x, y),
        k.area(),
        k.scale(1),
        k.anchor(button_style.anchor),
        k.outline(button_style.outline),
        k.color(button_style.color),
    ]);

    
    if(text) {
        const {
            text_style
        } = button_style;

        button.add([
            k.text(text, text_style),
            k.anchor(text_style.anchor),
            k.color(text_style.color),
        ]);
    }

    button.onClick(onClickAction);

    return button;
};

export default button