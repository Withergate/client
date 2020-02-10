import { GOLD } from "../../constants/constants";

export function checkPremium(premiumType, requiredType) {
    if (premiumType === GOLD) {
        return true;
    }
    if (premiumType === requiredType) {
        return true;
    }
    return false;
}