import ReactDOM from "react-dom";
import App from "./App";
import "src/App.css";
import { register } from "./utils/components-loader";
import { image } from "./components/image";
import { richText } from "./components/text";
import { blank } from "./components/blank";

register(image, richText, blank);
ReactDOM.render(<App />, document.getElementById("root"));
