import { EPIC, RARE } from "../../constants/constants";

export const getRarityTextColor = (rarity) => {
    switch (rarity) {
        case EPIC: return "text-primary";
        case RARE: return "text-warning";
        default: return "";
    }
}