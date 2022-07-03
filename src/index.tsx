import ReactDOM from "react-dom";
import App from "./App";
import "src/App.css";
import { register } from "./utils/components-loader";
import { image } from "./components/image";

register(image);
ReactDOM.render(<App />, document.getElementById("root"));
