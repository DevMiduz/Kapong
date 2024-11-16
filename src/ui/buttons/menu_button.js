import { button } from "./button"
import { menu_button_style } from "../styles/button_styles";

export function menu_button(props) {
    return button({
        ...props,
        button_style: menu_button_style
    });
};

export default menu_button