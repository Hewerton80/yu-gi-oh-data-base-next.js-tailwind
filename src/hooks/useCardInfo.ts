import { useState, useCallback } from "react";
import { yugiohApi } from "../services/yugiohApi";
import { ICard, TypeCardEnum } from "../types/Card";

export interface ICardRecords {
    cards: ICard[];
    rowsPerPage: number
    totalPages: number
    totalRecords: number
}

export interface ICardQueryParans extends ICard {
    page?: number;
    num?: number;
}
export function useCardInfo() {
    const [cardsRecoreds, setCardsRecoreds] = useState<ICardRecords | undefined>(undefined);
    const [isLoadingsCards, setIsLoadingsCards] = useState(false);
    const [isNotFoundCards, setIsNotFoundCards] = useState(false);


    const getCards = useCallback(async (cardQueryParans: ICardQueryParans) => {
        setIsLoadingsCards(true)
        setIsNotFoundCards(false)
        const rowPerPage = cardQueryParans?.num || 15;
        try {
            const response = await yugiohApi.get('', {
                params: {
                    ...cardQueryParans,
                    num: rowPerPage,
                    offset: (Number(cardQueryParans?.page) - 1) * rowPerPage
                }
            });
            setCardsRecoreds({
                cards: response?.data?.data,
                rowsPerPage: response?.data?.meta?.current_rows,
                totalPages: response?.data?.meta?.total_pages,
                totalRecords: response?.data?.meta?.total_rows,
            })
        }
        catch (err: any) {
            if(err?.response?.status === 400){
                console.log(err?.response?.data?.error)
                if(err?.response?.data?.error === 'No card matching your query was found in the database. Please see https://db.ygoprodeck.com/api-guide/ for syntax usage.'){
                    setIsNotFoundCards(true);
                }
            }
        }
        setIsLoadingsCards(false);
    }, [])

    const isSpell = useCallback((typeCard: TypeCardEnum | undefined | string) => {
        return typeCard === TypeCardEnum.SpellCard;
    }, [])

    const isTrap = useCallback((typeCard: TypeCardEnum | undefined | string) => {
        return typeCard === TypeCardEnum.TrapCard;
    }, [])

    const isMonster = useCallback((typeCard: TypeCardEnum | undefined | string) => {
        return typeCard?.includes('Monster');
    }, [])

    return {
        cardsRecoreds,
        isLoadingsCards,
        isNotFoundCards,
        isMonster,
        isSpell,
        isTrap,
        getCards
    }
}