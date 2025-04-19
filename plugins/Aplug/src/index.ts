import { logger } from "@vendetta";
import Setting from "./settings"

export default {
    onLoad: () => {
        logger.log("Hello world!");
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Setting
};
