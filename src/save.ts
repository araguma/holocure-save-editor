export type HoloData = {
    achievements: Record<Achievement, {
        unlocked: boolean | 0 | 1;
        flags: Record<string, any>;
    }>;
    food: number;
    growth: number;
    specUnlock: number;
    GROff: number;
    haste: number;
    holoCoins: number;
    mobUp: number;
    unlockedItems: Item[];
    tears: [Generation, number][];
    completedStages: [Stage, Character[]][];
    ATK: number;
    stamps: number;
    unlockedStages: Stage[];
    unlockedWeapons: Weapon[];
    regen: number;
    specCDR: number;
    enhanceUp: number;
    EXP: number;
    moneyGain: number;
    reroll: number;
    weaponLimit: number;
    timeStageScores: [TimedStage, [Character, [number, number, number, number]][]][];
    seenCollabs: Collab[];
    enchantments: number;
    fandom: number;
    challenge: number;
    timeModeUnlocked: number;
    unlockedCharacters: number;
    unlockedOutfits: Outfit[];
    eliminate: number;
    randomMoneyKey: number;
    pickupRange: number;
    SPD: number;
    DR: number;
    characters: [Character, number][];
    characterClears: [Character, number][];
    HP: number;
    crit: number;
}

export const achievements = [
    'robocoClear', 'timeToUpgrade', 'kroniiClear',
    'calliClear', 'aquaClear', 'mioGachikoi',
    'faunaClear', 'fleshWound', 'koroneClear',
    'fired', 'inaClear', '1hard',
    'suiseiClear', 'kroniiGachikoi', 'fullyLoaded',
    'mikoClear', 'kiara10', 'kiaraClear',
    'powerLevelling', 'akiGachikoi', 'soraClear',
    'secondboss', 'azkiGachikoi', 'thankYou',
    'buyingPower', '50hamburgers', 'okayuClear',
    'iDidIt', 'delusional', 'faunaGachikoi',
    'chocoGachikoi', 'idolPower', 'shion10',
    'irys10', 'safeISwear', 'idolgroup',
    'melClear', 'lookImOnTV', 'robocoGachikoi',
    'fubukiGachikoi', 'fubukiClear', 'calliGachikoi',
    'ameClear', 'dontFail', 'toohalu',
    'yagoostatue', 'notTakingAnyChances', 'trueRNG',
    'baeGachikoi', 'akiClear', 'wamy',
    'fullCollab', 'luckyDay', 'ameGachikoi',
    'guraClear', 'CEOnow', 'korone10',
    'hallucinated', 'lv100', 'haatoClear',
    'justRNG', 'thirdboss', 'payToWin',
    'payDay', 'inaGachikoi', 'speedrunner',
    'shionClear', 'irysGachikoi', 'haatoGachikoi',
    'sanaClear', 'dontNeed', 'pacifist',
    'boing', 'midboss', 'lv50',
    'okayuGachikoi', 'soloBeater', 'suiseiGachikoi',
    'ayameClear', 'mumeiClear', 'calli10',
    'ayameGachikoi', 'baeClear', 'aquaGachikoi',
    'obliterated', 'SCT', 'kiaraGachikoi',
    'matsuriClear', 'firstclear', 'hardcoreGamer',
    'painPeko', 'freeStickers', 'firstboss',
    'sana10', 'koroneGachikoi', '2hard',
    'sanaGachikoi', 'chocoClear', 'couchPotato',
    'matsuriGachikoi', 'melGachikoi', '1000damage',
    'mioClear', 'mikoGachikoi', 'guraGachikoi',
    'irysClear', 'shionGachikoi', 'azkiClear',
    'millionaire', 'mumeiGachikoi', 'grind',
    'allcomplete', 'soraGachikoi', 'subaruClear',
    'muscle', 'petDog', 'ina10',
    '10000damage', 'bae10', 'subaruGachikoi',
] as const;
export type Achievement = typeof achievements[number];

export const generations = [
    'myth', 'councilHope', 'gamers',
    'gen0', 'gen1', 'gen2',
] as const;
export type Generation = typeof generations[number];

export const characters = [
    'kronii', 'fubuki', 'calli',
    'mel', 'suisei', 'matsuri',
    'choco', 'ayame', 'haato',
    'roboco', 'fauna', 'sora',
    'miko', 'gura', 'sana',
    'okayu', 'aki', 'irys',
    'shion', 'bae', 'azki',
    'kiara', 'aqua', 'ina',
    'korone', 'mio', 'ame',
    'subaru', 'mumei',
] as const;
export type Character = typeof characters[number];

export const outfits = [
    'default', 'ameAlt1', 'ameAlt2',
    'inaAlt1', 'inaAlt2', 'guraAlt1',
    'guraAlt2', 'calliAlt1', 'calliAlt2',
    'kiaraAlt2', 'kiaraAlt1', 'irysAlt2',
    'irysAlt1', 'baeAlt1', 'sanaAlt1',
    'faunaAlt2', 'faunaAlt1', 'mumeiAlt1',
    'kroniiAlt2', 'kroniiAlt1', 'fubukiAlt1',
    'kurokami', 'mioAlt1', 'koroneAlt1',
    'okayuAlt1', 'soraAlt1', 'azkiAlt1',
    'robocoAlt1', 'suiseiAlt1', 'mikoAlt1',
] as const;
export type Outfit = typeof outfits[number];

export const stages = [
    'STAGE 1', 'STAGE 2', 'STAGE 3',
    'STAGE 1 (HARD)', 'STAGE 2 (HARD)', 'TIME STAGE 1',
] as const;
export type Stage = typeof stages[number];

export const timedStages = [
    'TIME STAGE 1',
] as const;
export type TimedStage = typeof timedStages[number];

export const weapons = [
    'PsychoAxe', 'Glowstick', 'SpiderCooking',
    'Tailplug', 'BLBook', 'EliteLava',
    'HoloBomb', 'HoloLaser', 'IdolSong',
    'WamyWater', 'CuttingBoard', 'CEOTears',
    'XPotato', 'ENCurse', 'BounceBall',
] as const;
export type Weapon = typeof weapons[number];

export const collabs = [
    'MiComet', 'DragonBeam', 'EliteCooking',
    'SnowSake', 'BLLover', 'IdolConcert',
    'MariLamy', 'FlatBoard', 'StreamOfTears',
    'BoneBros', 'BrokenDreams', 'ImDie',
    'MiKorone', 'EldritchHorror', 'RingOfFitness',
    'RapDog', 'BreatheInAsacoco', 'AbsoluteWall',
    'LightBeam',
] as const;
export type Collab = typeof collabs[number];

export const items = [
    'BodyPillow', 'FullMeal', 'PikiPikiPiman',
    'SuccubusHorn', 'Headphones', 'UberSheep',
    'HolyMilk', 'Sake', 'FaceMask',
    'SuperChattoTime', 'IdolCostume', 'PiggyBank',
    'CreditCard', 'Limiter', 'Plushie',
    'ChickensFeather', 'DevilHat', 'EnergyDrink',
    'StudyGlasses', 'Breastplate', 'GorillasPaw',
    'Halu', 'Membership', 'HopeSoda',
    'BlacksmithsGear', 'Shacklesss', 'Bandaid',
    'GWSPill', 'InjectionAsacoco'
] as const;
export type Item = typeof items[number];