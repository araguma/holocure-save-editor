export type HoloData = {
    achievements: Partial<Record<Achievement, {
        unlocked: 0 | 1;
        flags: Record<string, any>;
    }>>;
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

export enum ACHIEVEMENT {
    ROBOCO_CLEAR = 'robocoClear',
    TIME_TO_UPGRADE = 'timeToUpgrade',
    KRONII_CLEAR = 'kroniiClear',
    CALLI_CLEAR = 'calliClear',
    AQUA_CLEAR = 'aquaClear',
    MIO_GACHIKOI = 'mioGachikoi',
    FAUNA_CLEAR = 'faunaClear',
    FLESH_WOUND = 'fleshWound',
    KORONE_CLEAR = 'koroneClear',
    FIRED = 'fired',
    INA_CLEAR = 'inaClear',
    HARD_1 = '1hard',
    SUISEI_CLEAR = 'suiseiClear',
    KRONII_GACHIKOI = 'kroniiGachikoi',
    FULLY_LOADED = 'fullyLoaded',
    MIKO_CLEAR = 'mikoClear',
    KIARA_10 = 'kiara10',
    KIARA_CLEAR = 'kiaraClear',
    POWER_LEVELLING = 'powerLevelling',
    AKI_GACHIKOI = 'akiGachikoi',
    SORA_CLEAR = 'soraClear',
    SECONDBOSS = 'secondboss',
    AZKI_GACHIKOI = 'azkiGachikoi',
    THANK_YOU = 'thankYou',
    BUYING_POWER = 'buyingPower',
    FIFTY_HAMBURGERS = '50hamburgers',
    OKAYU_CLEAR = 'okayuClear',
    I_DID_IT = 'iDidIt',
    DELUSIONAL = 'delusional',
    FAUNA_GACHIKOI = 'faunaGachikoi',
    CHOCO_GACHIKOI = 'chocoGachikoi',
    IDOL_POWER = 'idolPower',
    SHION_10 = 'shion10',
    IRYS_10 = 'irys10',
    SAFE_I_SWEAR = 'safeISwear',
    IDOL_GROUP = 'idolgroup',
    MEL_CLEAR = 'melClear',
    LOOK_IM_ON_TV = 'lookImOnTV',
    ROBOCO_GACHIKOI = 'robocoGachikoi',
    FUBUKI_GACHIKOI = 'fubukiGachikoi',
    FUBUKI_CLEAR = 'fubukiClear',
    CALLI_GACHIKOI = 'calliGachikoi',
    AME_CLEAR = 'ameClear',
    DONT_FAIL = 'dontFail',
    TOO_HALU = 'toohalu',
    YAGOO_STATUE = 'yagoostatue',
    NOT_TAKING_ANY_CHANCES = 'notTakingAnyChances',
    TRUE_RNG = 'trueRNG',
    BAE_GACHIKOI = 'baeGachikoi',
    AKI_CLEAR = 'akiClear',
    WAMY = 'wamy',
    FULL_COLLAB = 'fullCollab',
    LUCKY_DAY = 'luckyDay',
    AME_GACHIKOI = 'ameGachikoi',
    GURA_CLEAR = 'guraClear',
    CEO_NOW = 'CEOnow',
    KORONE_10 = 'korone10',
    HALLUCINATED = 'hallucinated',
    LV_100 = 'lv100',
    HAATO_CLEAR = 'haatoClear',
    JUST_RNG = 'justRNG',
    THIRDBOSS = 'thirdboss',
    PAY_TO_WIN = 'payToWin',
    PAY_DAY = 'payDay',
    INA_GACHIKOI = 'inaGachikoi',
    SPEEDRUNNER = 'speedrunner',
    SHION_CLEAR = 'shionClear',
    IRYS_GACHIKOI = 'irysGachikoi',
    HAATO_GACHIKOI = 'haatoGachikoi',
    SANA_CLEAR = 'sanaClear',
    DONT_NEED = 'dontNeed',
    PACIFIST = 'pacifist',
    BOING = 'boing',
    MIDBOSS = 'midboss',
    LV_50 = 'lv50',
    OKAYU_GACHIKOI = 'okayuGachikoi',
    SOLO_BEATER = 'soloBeater',
    SUISEI_GACHIKOI = 'suiseiGachikoi',
    AYAME_CLEAR = 'ayameClear',
    MUMEI_CLEAR = 'mumeiClear',
    CALLI_10 = 'calli10',
    AYAME_GACHIKOI = 'ayameGachikoi',
    BAE_CLEAR = 'baeClear',
    AQUA_GACHIKOI = 'aquaGachikoi',
    OBLITERATED = 'obliterated',
    SCT = 'SCT',
    KIARA_GACHIKOI = 'kiaraGachikoi',
    MATSURI_CLEAR = 'matsuriClear',
    FIRST_CLEAR = 'firstclear',
    HARDCORE_GAMER = 'hardcoreGamer',
    PAIN_PEKO = 'painPeko',
    FREE_STICKERS = 'freeStickers',
    FIRSTBOSS = 'firstboss',
    SANA_10 = 'sana10',
    KORONE_GACHIKOI = 'koroneGachikoi',
    HARD_2 = '2hard',
    SANA_GACHIKOI = 'sanaGachikoi',
    CHOCO_CLEAR = 'chocoClear',
    COUCH_POTATO = 'couchPotato',
    MATSURI_GACHIKOI = 'matsuriGachikoi',
    MEL_GACHIKOI = 'melGachikoi',
    DAMAGE_1000 = '1000damage',
    MIO_CLEAR = 'mioClear',
    MIKO_GACHIKOI = 'mikoGachikoi',
    GURA_GACHIKOI = 'guraGachikoi',
    IRYS_CLEAR = 'irysClear',
    SHION_GACHIKOI = 'shionGachikoi',
    AZKI_CLEAR = 'azkiClear',
    MILLIONAIRE = 'millionaire',
    MUMEI_GACHIKOI = 'mumeiGachikoi',
    GRIND = 'grind',
    ALL_COMPLETE = 'allcomplete',
    SORA_GACHIKOI = 'soraGachikoi',
    SUBARU_CLEAR = 'subaruClear',
    MUSCLE = 'muscle',
    PET_DOG = 'petDog',
    INA_10 = 'ina10',
    DAMAGE_10000 = '10000damage',
    BAE_10 = 'bae10',
    SUBARU_GACHIKOI = 'subaruGachikoi',
}
export type Achievement = `${ACHIEVEMENT}`;

export enum GENERATION {
    MYTH = 'myth',
    COUNCIL_HOPE = 'councilHope',
    GAMERS = 'gamers',
    GEN_0 = 'gen0',
    GEN_1 = 'gen1',
    GEN_2 = 'gen2',
}
export type Generation = `${GENERATION}`;

export enum CHARACTER {
    KRONII = 'kronii',
    FUBUKI = 'fubuki',
    CALLI = 'calli',
    MEL = 'mel',
    SUISEI = 'suisei',
    MATSURI = 'matsuri',
    CHOCO = 'choco',
    AYAME = 'ayame',
    HAATO = 'haato',
    ROBOCO = 'roboco',
    FAUNA = 'fauna',
    SORA = 'sora',
    MIKO = 'miko',
    GURA = 'gura',
    SANA = 'sana',
    OKAYU = 'okayu',
    AKI = 'aki',
    IRYS = 'irys',
    SHION = 'shion',
    BAE = 'bae',
    AZKI = 'azki',
    KIARA = 'kiara',
    AQUA = 'aqua',
    INA = 'ina',
    KORONE = 'korone',
    MIO = 'mio',
    AME = 'ame',
    SUBARU = 'subaru',
    MUMEI = 'mumei',
}
export type Character = `${CHARACTER}`;

export enum OUTFIT {
    DEFAULT = 'default',
    AME_ALT_1 = 'ameAlt1',
    AME_ALT_2 = 'ameAlt2',
    INA_ALT_1 = 'inaAlt1',
    INA_ALT_2 = 'inaAlt2',
    GURA_ALT_1 = 'guraAlt1',
    GURA_ALT_2 = 'guraAlt2',
    CALLI_ALT_1 = 'calliAlt1',
    CALLI_ALT_2 = 'calliAlt2',
    KIARA_ALT_2 = 'kiaraAlt2',
    KIARA_ALT_1 = 'kiaraAlt1',
    IRYS_ALT_2 = 'irysAlt2',
    IRYS_ALT_1 = 'irysAlt1',
    BAE_ALT_1 = 'baeAlt1',
    SANA_ALT_1 = 'sanaAlt1',
    FAUNA_ALT_2 = 'faunaAlt2',
    FAUNA_ALT_1 = 'faunaAlt1',
    MUMEI_ALT_1 = 'mumeiAlt1',
    KRONII_ALT_2 = 'kroniiAlt2',
    KRONII_ALT_1 = 'kroniiAlt1',
    FUBUKI_ALT_1 = 'fubukiAlt1',
    KUROKAMI = 'kurokami',
    MIO_ALT_1 = 'mioAlt1',
    KORONE_ALT_1 = 'koroneAlt1',
    OKAYU_ALT_1 = 'okayuAlt1',
    SORA_ALT_1 = 'soraAlt1',
    AZKI_ALT_1 = 'azkiAlt1',
    ROBOCO_ALT_1 = 'robocoAlt1',
    SUISEI_ALT_1 = 'suiseiAlt1',
    MIKO_ALT_1 = 'mikoAlt1',
}
export type Outfit = `${OUTFIT}`;

export enum STAGE {
    STAGE_1 = 'STAGE 1',
    STAGE_2 = 'STAGE 2',
    STAGE_3 = 'STAGE 3',
    STAGE_1_HARD = 'STAGE 1 (HARD)',
    STAGE_2_HARD = 'STAGE 2 (HARD)',
    TIMED_STAGE_1 = 'TIME STAGE 1',
}
export type Stage = `${STAGE}`;

export enum TIMED_STAGE {
    TIMED_STAGE_1 = 'TIME STAGE 1',
}
export type TimedStage = `${TIMED_STAGE}`;

export enum WEAPON {
    PSYCHO_AXE = 'PsychoAxe',
    GLOWSTICK = 'Glowstick',
    SPIDER_COOKING = 'SpiderCooking',
    TAILPLUG = 'Tailplug',
    BL_BOOK = 'BLBook',
    ELITE_LAVA = 'EliteLava',
    HOLO_BOMB = 'HoloBomb',
    HOLO_LASER = 'HoloLaser',
    IDOL_SONG = 'IdolSong',
    WAMY_WATER = 'WamyWater',
    CUTTING_BOARD = 'CuttingBoard',
    CEO_TEARS = 'CEOTears',
    X_POTATO = 'XPotato',
    EN_CURSE = 'ENCurse',
    BOUNCE_BALL = 'BounceBall',
}
export type Weapon = `${WEAPON}`;

export enum COLLAB {
    MI_COMET = 'MiComet',
    DRAGON_BEAM = 'DragonBeam',
    ELITE_COOKING = 'EliteCooking',
    SNOW_SAKE = 'SnowSake',
    BL_LOVER = 'BLLover',
    IDOL_CONCERT = 'IdolConcert',
    MARI_LAMY = 'MariLamy',
    FLAT_BOARD = 'FlatBoard',
    STREAM_OF_TEARS = 'StreamOfTears',
    BONE_BROS = 'BoneBros',
    BROKEN_DREAMS = 'BrokenDreams',
    IM_DIE = 'ImDie',
    MI_KORONE = 'MiKorone',
    ELDRITCH_HORROR = 'EldritchHorror',
    RING_OF_FITNESS = 'RingOfFitness',
    RAP_DOG = 'RapDog',
    BREATHE_IN_ASACOCO = 'BreatheInAsacoco',
    ABSOLUTE_WALL = 'AbsoluteWall',
    LIGHT_BEAM = 'LightBeam',
}
export type Collab = `${COLLAB}`;

export enum ITEM {
    BODY_PILLOW = 'BodyPillow',
    FULL_MEAL = 'FullMeal',
    PIKI_PIKI_PIMAN = 'PikiPikiPiman',
    SUCCUBUS_HORN = 'SuccubusHorn',
    HEADPHONES = 'Headphones',
    UBER_SHEEP = 'UberSheep',
    HOLY_MILK = 'HolyMilk',
    SAKE = 'Sake',
    FACE_MASK = 'FaceMask',
    SUPER_CHATTO_TIME = 'SuperChattoTime',
    IDOL_COSTUME = 'IdolCostume',
    PIGGY_BANK = 'PiggyBank',
    CREDIT_CARD = 'CreditCard',
    LIMITER = 'Limiter',
    PLUSHIE = 'Plushie',
    CHICKENS_FEATHER = 'ChickensFeather',
    DEVIL_HAT = 'DevilHat',
    ENERGY_DRINK = 'EnergyDrink',
    STUDY_GLASSES = 'StudyGlasses',
    BREASTPLATE = 'Breastplate',
    GORILLAS_PAW = 'GorillasPaw',
    HALU = 'Halu',
    MEMBERSHIP = 'Membership',
    HOPE_SODA = 'HopeSoda',
    BLACKSMITHS_GEAR = 'BlacksmithsGear',
    SHACKLESSS = 'Shacklesss',
    BANDAID = 'Bandaid',
    GWS_PILL = 'GWSPill',
    INJECTION_ASACOCO = 'InjectionAsacoco',
}
export type Item = `${ITEM}`;