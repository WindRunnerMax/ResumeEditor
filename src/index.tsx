import ReactDOM from "react-dom";
import App from "./App";
import "src/App.css";
import { register } from "./utils/components-loader";
import { image } from "./modules/image";
import { richText } from "./modules/text";
import { blank } from "./modules/blank";

register(image, richText, blank);
ReactDOM.render(<App />, document.getElementById("root"));
