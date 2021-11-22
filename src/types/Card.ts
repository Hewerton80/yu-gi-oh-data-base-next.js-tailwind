export enum TypeCardEnum {
    EffectMonster = "Effect Monster",
    FlipEffectMonster = "Flip Effect Monster",
    FlipTunerEffectMonster = "Flip Tuner Effect Monster",
    GeminiMonster = "Gemini Monster",
    NormalMonster = "Normal Monster",
    NormalTunerMonster = "Normal Tuner Monster",
    PendulumEffectMonster = "Pendulum Effect Monster",
    PendulumFlipEffectMonster = "Pendulum Flip Effect Monster",
    PendulumNormalMonster = "Pendulum Normal Monster",
    PendulumTunerEffectMonster = "Pendulum Tuner Effect Monster",
    RitualEffectMonster = "Ritual Effect Monster",
    RitualMonster = "Ritual Monster",
    SkillCard = "Skill Card",
    SpiritMonster = "Spirit Monster",
    ToonMonster = "Toon Monster",
    TunerMonster = "Tuner Monster",
    UnionEffectMonster = "Union Effect Monster",
    SpellCard = "Spell Card",
    TrapCard = "Trap Card",
}

enum RaceCardEnum {
    //monster card
    Aqua = "Aqua",
    Beast = "Beast",
    BeastWarrior = "Beast-Warrior",
    CreatorGod = "Creator-God",
    Cyberse = "Cyberse",
    Dinosaur = "Dinosaur",
    DivineBeast = "Divine-Beast",
    Dragon = "Dragon",
    Fairy = "Fairy",
    Fiend = "Fiend",
    Fish = "Fish",
    Insect = "Insect",
    Machine = "Machine",
    Plant = "Plant",
    Psychic = "Psychic",
    Pyro = "Pyro",
    Reptile = "Reptile",
    Rock = "Rock",
    SeaSerpent = "Sea Serpent",
    Spellcaster = "Spellcaster",
    Thunder = "Thunder",
    Warrior = "Warrior",
    WingedBeast = "Winged Beast",
    // spell and traps cards
    Normal = "Normal",
    Field = "Field",
    Equip = "Equip",
    Continuous = "Continuous",
    QuickPlay = "Quick-Play",
    Ritual = "Ritual",
    Counter = "Counter"
}

enum TypeAttributeMonsterEnum {
    Dark = 'dark',
    Earth = 'earth',
    Fire = 'fire',
    Light = 'light',
    Water = 'water',
    Wind = 'wind',
    Divine = 'divine'
}

export interface cardSet {
    set_name: string;
    set_code: string;
    set_rarity: string;
    set_rarity_code: string;
    set_price: string;
}

export interface cardImage {
    id: number,
    image_url: string;
    image_url_small: string;
}

export interface ICard {
    id?: number | string;
    name?: string;
    fname?: string; // queryparan
    type?: TypeCardEnum | string;
    desc?: string;
    atk?: number | string;
    def?: number | string;
    level?: number | string;
    scale?: string;
    race?: RaceCardEnum;
    attribute?: TypeAttributeMonsterEnum;
    archetype?: string;
    card_sets?: cardSet[];
    card_images?: cardImage[];
}
// {
//     "data": [
//       {
//         "id": 6983839,
//         "name": "Tornado Dragon",
//         "type": "XYZ Monster",
//         "desc": "2 Level 4 monsters\nOnce per turn (Quick Effect): You can detach 1 material from this card, then target 1 Spell/Trap on the field; destroy it.",
//         "atk": 2100,
//         "def": 2000,
//         "level": 4,
//         "race": "Wyrm",
//         "attribute": "WIND",
//         "card_sets": [
//           {
//             "set_name": "Battles of Legend: Relentless Revenge",
//             "set_code": "BLRR-EN084",
//             "set_rarity": "Secret Rare",
//             "set_rarity_code": "(ScR)",
//             "set_price": "4.08"
//           },
//           {
//             "set_name": "Duel Devastator",
//             "set_code": "DUDE-EN019",
//             "set_rarity": "Ultra Rare",
//             "set_rarity_code": "(UR)",
//             "set_price": "1.4"
//           },
//           {
//             "set_name": "Maximum Crisis",
//             "set_code": "MACR-EN081",
//             "set_rarity": "Secret Rare",
//             "set_rarity_code": "(ScR)",
//             "set_price": "4.32"
//           }
//         ],
//         "card_images": [
//           {
//             "id": 6983839,
//             "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg",
//             "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg"
//           }
//         ],
//         "card_prices": [
//           {
//             "cardmarket_price": "0.42",
//             "tcgplayer_price": "0.48",
//             "ebay_price": "2.99",
//             "amazon_price": "0.77",
//             "coolstuffinc_price": "0.99"
//           }
//         ]
//       }
//     ]
//   }