import ReactDOM from "react-dom";
import App from "./App";
import "src/App.css";
import { register } from "./utils/loader/components-loader";
import { image } from "./modules/image";
import { richText } from "./modules/text";
import { blank } from "./modules/blank";

register(image, blank, richText);
ReactDOM.render(<App />, document.getElementById("root"));
