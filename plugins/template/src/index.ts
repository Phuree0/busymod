import { logger } from "@vendetta";
import Settings from "./settings"

export const settings: {
    source_lang?: string // ???
    target_lang?: string
    translator?: number
} = storage

settings.target_lang ??= "en"
settings.translator ??= 1

export default {
    onLoad: () => {
        logger.log("Hello world!");
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings
};
