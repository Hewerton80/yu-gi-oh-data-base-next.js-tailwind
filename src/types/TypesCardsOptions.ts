import { TypeCardEnum } from "./Card";

export interface TypeCardsCheck {
    type: TypeCardEnum | string,
    text: string;
    checked: boolean;
    hasEffect?: boolean;
}

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
    {
        type: `${TypeCardEnum.SynchroMonster},${TypeCardEnum.SynchroPendulumEffectMonster},${TypeCardEnum.SynchroTunerMonster}`,
        text: 'Sincro',
        checked: false,
    },
    {
        type: `${TypeCardEnum.XYZMonster},${TypeCardEnum.XYZPendulumEffectMonster}`,
        text: 'Xyz',
        checked: false,
    },
    {
        type: TypeCardEnum.ToonMonster,
        text: 'Toon',
        checked: false,
    },
    {
        type: TypeCardEnum.SpiritMonster,
        text: 'Espírito',
        checked: false,
    },
    {
        type: TypeCardEnum.UnionEffectMonster,
        text: 'Union',
        checked: false,
    },
    {
        type: TypeCardEnum.GeminiMonster,
        text: 'Gêmeos',
        checked: false,
    },
    {
        type: TypeCardEnum.TunerMonster,
        text: 'Regulador',
        checked: false,
    },
    {
        type: `${TypeCardEnum.FlipEffectMonster},${TypeCardEnum.FlipTunerEffectMonster}`,
        text: 'Virar',
        checked: false,
    },
    {
        type: `${TypeCardEnum.PendulumEffectMonster},${TypeCardEnum.PendulumFlipEffectMonster},${TypeCardEnum.PendulumNormalMonster},${TypeCardEnum.PendulumTunerEffectMonster}`,
        text: 'Pêndulo',
        checked: false,
    },
    {
        type: TypeCardEnum.LinkMonster,
        text: 'Link',
        checked: false,
    },
]