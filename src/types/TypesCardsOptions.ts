import { TypeCardEnum } from "./Card";

export interface TypeCardsCheck {
    type: TypeCardEnum | string,
    text: string;
    checked: boolean;
    hasEffect?: boolean;
}
// const arrayTypeNormalMonstersCards = Object.values((TypeCardEnum))
//     .filter(typeCard => typeCard.includes('Normal'))
//     .join(',')

// const arrayTypeEffectMonstersCards = Object.values((TypeCardEnum))
//     .filter(typeCard => !typeCard.includes('Normal'))
//     .join(',')

export const typeCardsCheckOptions: TypeCardsCheck[] = [
    {
        type: `${TypeCardEnum.RitualMonster},${TypeCardEnum.RitualEffectMonster}`,
        text: 'Ritual',
        checked: false,
    },
    {
        type: `${TypeCardEnum.FusionMonster},${TypeCardEnum.PendulumEffectFusionMonster}`,
        text: 'Fusão',
        checked: false,
    },
]