import { RaceCardEnum } from "./Card";

export interface IconCheck {
    icon: RaceCardEnum,
    text: string;
    checked: boolean;
}

export const iconsCheckOptions: IconCheck[] = [
    {
        icon: RaceCardEnum.Equip,
        text: 'Equipamento',
        checked: false,
    },
    {
        icon: RaceCardEnum.Field,
        text: 'Campo',
        checked: false,
    },
    {
        icon: RaceCardEnum.QuickPlay,
        text: 'Rápida',
        checked: false,
    },
    {
        icon: RaceCardEnum.Ritual,
        text: 'Ritual',
        checked: false,
    },
    {
        icon: RaceCardEnum.Continuous,
        text: 'Contínua',
        checked: false,
    },
    {
        icon: RaceCardEnum.Counter,
        text: 'Marcador',
        checked: false,
    },
    {
        icon: RaceCardEnum.Normal,
        text: 'Normal',
        checked: false,
    },

]