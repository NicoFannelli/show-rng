module.exports = function showRNG(mod) {
    mod.hook('S_REGISTER_EVOLUTION_ITEM', 3, e => {
        e.hideSuccessChance = false;
        return true;
    });

    mod.hook('S_REGISTER_ENCHANT_ITEM', 3, e => {
        e.hideSuccessChance = false;
        return true;
    });
}
