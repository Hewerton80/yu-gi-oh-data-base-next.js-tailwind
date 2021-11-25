import { RaceCardEnum } from "./Card";

export interface TypeMonstersCheck {
    type: RaceCardEnum,
    text: string;
    checked: boolean;
}

export const typesCheckOptions: TypeMonstersCheck[] = [
    {
        type: RaceCardEnum.Spellcaster,
        text: 'Mago',
        checked: false,
    },
    {
        type: RaceCardEnum.Dragon,
        text: 'Dragão',
        checked: false,
    },
    {
        type: RaceCardEnum.Zombie,
        text: 'Zumbi',
        checked: false,
    },
    {
        type: RaceCardEnum.Warrior,
        text: 'Guerreiro',
        checked: false,
    },
    {
        type: RaceCardEnum.BeastWarrior,
        text: 'Besta-Guerreira',
        checked: false,
    },
    {
        type: RaceCardEnum.Beast,
        text: 'Besta',
        checked: false,
    },
    {
        type: RaceCardEnum.WingedBeast,
        text: 'Besta Alada',
        checked: false,
    },
    {
        type: RaceCardEnum.Field,
        text: 'Demônio',
        checked: false,
    },
    {
        type: RaceCardEnum.Fairy,
        text: 'Fada',
        checked: false,
    },
    {
        type: RaceCardEnum.Insect,
        text: 'Inseto',
        checked: false,
    },
    {
        type: RaceCardEnum.Dinosaur,
        text: 'Dinossauro',
        checked: false,
    },
    {
        type: RaceCardEnum.Reptile,
        text: 'Réptil',
        checked: false,
    },
    {
        type: RaceCardEnum.Fish,
        text: 'Peixe',
        checked: false,
    },
    {
        type: RaceCardEnum.SeaSerpent,
        text: 'Serpente Marinha',
        checked: false,
    },
    {
        type: RaceCardEnum.Aqua,
        text: 'Água',
        checked: false,
    },
    {
        type: RaceCardEnum.Pyro,
        text: 'Piro',
        checked: false,
    },
    {
        type: RaceCardEnum.Thunder,
        text: 'Trovão',
        checked: false,
    },
    {
        type: RaceCardEnum.Rock,
        text: 'Rocha',
        checked: false,
    },
    {
        type: RaceCardEnum.Plant,
        text: 'Planta',
        checked: false,
    },
    {
        type: RaceCardEnum.Machine,
        text: 'Máquina',
        checked: false,
    },
    {
        type: RaceCardEnum.Psychic,
        text: 'Psíquico',
        checked: false,
    },
    {
        type: RaceCardEnum.DivineBeast,
        text: 'Besta Divina',
        checked: false,
    },
    {
        type: RaceCardEnum.Wyrm,
        text: 'Wyrm',
        checked: false,
    },
    {
        type: RaceCardEnum.Cyberse,
        text: 'Cyberse',
        checked: false,
    },
]