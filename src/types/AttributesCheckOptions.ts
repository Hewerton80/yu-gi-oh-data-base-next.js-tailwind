import { TypeAttributeMonsterEnum } from "./Card";

export interface IAttributeCheck {
    attribute:TypeAttributeMonsterEnum,
    text: string;
    checked: boolean;
}

export const attributesCheckOptions: IAttributeCheck[] = [
    {
        attribute: TypeAttributeMonsterEnum.Dark,
        text: 'Trevas',
        checked: false,
    },
    {
        attribute: TypeAttributeMonsterEnum.Light,
        text: 'Luz',
        checked: false,
    },
    {
        attribute: TypeAttributeMonsterEnum.Earth,
        text: 'Terra',
        checked: false,
    },
    {
        attribute: TypeAttributeMonsterEnum.Water,
        text: 'Água',
        checked: false,
    },
    {
        attribute: TypeAttributeMonsterEnum.Fire,
        text: 'Fogo',
        checked: false,
    },
    {
        attribute: TypeAttributeMonsterEnum.Wind,
        text: 'Vento',
        checked: false,
    },
    {
        attribute: TypeAttributeMonsterEnum.Divine,
        text: 'Divino',
        checked: false,
    },
]