import { TypeCardEnum } from "./Card";

export enum SearchTypeCardOptionsEnum {
    SearchByName = 'Buscar por Nome do Card',
    SearchByDesc = 'Buscar por Texto do Card',
    SearchByPendulumEffect = 'Buscar por Efeito do Pêndulo',
    SearchById = 'Buscar por Número do Card',
}

export enum TypeCardOptionsEnum {
    AllCards = 'Todos os Cards',
    MonterCards = 'Cards de Monstro',
    SpellCards = 'Cards de Magia',
    TrapCards = 'Cards de Armadilha',
}

const arrayTypeMonsterCards = Object.values((TypeCardEnum))
    .filter(typeCard => typeCard.includes('Monster'))
    .join(',')

export const typeCardValueOptionsEnum = {
    'Todos os Cards' : '',
    'Cards de Monstro' : arrayTypeMonsterCards,
    'Cards de Magia' : TypeCardEnum.SpellCard,
    'Cards de Armadilha' : TypeCardEnum.TrapCard,
}

