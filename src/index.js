import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import save from "./save";
import Edit from "./edit";

import "./style.scss";

registerBlockType(metadata.name, {
	icon: "laptop",
	edit: Edit,
	save,
});
