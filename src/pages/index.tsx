/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { Button } from '../components/General/Buttons/Button'
import InputText from '../components/General/Inputs/InputText'
import Select from '../components/General/Inputs/Select'
import { Col, Grid } from '../components/General/Layouts/Grid'
import NoutFoundMenssage from '../components/General/Layouts/NoutFoundMenssage'
import Paginations from '../components/General/Paginations'

import { DefaultsTemplate } from '../components/Templates/DefaultsTemplate'
import { ICardQueryParans, useCardInfo } from '../hooks/useCardInfo'
import { SearchTypeCardOptionsEnum, TypeCardOptionsEnum, typeCardValueOptionsEnum } from '../types/SearchTypeCardOptions';


const Home: NextPage = () => {


  const {
    cardsRecoreds,
    isLoadingsCards,
    isNotFoundCards,
    isMonster,
    isSpell,
    isTrap,
    getCards
  } = useCardInfo();

  const [prevKeyWordCard, setPrevKeyWordCard] = useState('');
  const [prevSearchBy, setPrevSearchBy] = useState<SearchTypeCardOptionsEnum>(SearchTypeCardOptionsEnum.SearchByName);
  const [prevTypeCard, setPrevTypeCard] = useState('');

  const [keyWordCard, setKeyWordCard] = useState('');
  const [searchBy, setSearchBy] = useState<SearchTypeCardOptionsEnum>(SearchTypeCardOptionsEnum.SearchByName);
  const [typeCard, setTypeCard] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    getCards({ page: 1 });
  }, [getCards]);

  useEffect(() => {
    if (cardsRecoreds) {
      setTotalPages(cardsRecoreds.totalPages)
      setTotalRecords(cardsRecoreds.totalRecords)
    }
  }, [cardsRecoreds])

  const getCardsPrevFilters = useCallback(() => {
    const cardsFilter: ICardQueryParans = {}
    if (prevKeyWordCard?.trim()) {
      if (prevSearchBy === SearchTypeCardOptionsEnum.SearchByName) {
        cardsFilter.fname = prevKeyWordCard.trim();
      }
      else if (prevSearchBy === SearchTypeCardOptionsEnum.SearchByDesc) {
        cardsFilter.desc = prevKeyWordCard.trim();
      }
      else if (prevSearchBy === SearchTypeCardOptionsEnum.SearchByPendulumEffect) {
        cardsFilter.scale = prevKeyWordCard.trim();
      }
      else if (prevSearchBy === SearchTypeCardOptionsEnum.SearchById) {
        cardsFilter.id = prevKeyWordCard.trim();
      }
      setSearchBy(prevSearchBy)
      setKeyWordCard(prevKeyWordCard.trim());
    }

    if (prevTypeCard) {
      cardsFilter.type = prevTypeCard;
      setTypeCard(prevTypeCard);
    }
    else {
      setTypeCard('');
    }

    return cardsFilter;
  }, [
    prevKeyWordCard,
    prevSearchBy,
    prevTypeCard
  ]);

  const getCardsFilters = useCallback(() => {
    const cardsFilter: ICardQueryParans = {}
    if (keyWordCard?.trim()) {
      if (searchBy === SearchTypeCardOptionsEnum.SearchByName) {
        cardsFilter.fname = keyWordCard.trim();
      }
      else if (searchBy === SearchTypeCardOptionsEnum.SearchByDesc) {
        cardsFilter.desc = keyWordCard.trim();
      }
      else if (searchBy === SearchTypeCardOptionsEnum.SearchByPendulumEffect) {
        cardsFilter.scale = keyWordCard.trim();
      }
      else if (searchBy === SearchTypeCardOptionsEnum.SearchById) {
        cardsFilter.id = keyWordCard.trim();
      }
    }
    if (typeCard) {
      cardsFilter.type = typeCard;
    }
    return cardsFilter;
  }, [
    keyWordCard,
    searchBy,
    typeCard
  ]);

  useEffect(() => {
    console.log('typeCard: ', typeCard)
  }, [typeCard])

  const handlechangePage = useCallback((page) => {
    setCurrentPage(page)
    getCards({
      page,
      ...getCardsFilters()
    })
  }, [getCards, getCardsFilters])

  const handleSubmitFilter = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentPage(1);
    getCards({
      page: 1,
      ...getCardsPrevFilters()
    })
  }, [getCardsPrevFilters, getCards])

  return (
    <DefaultsTemplate>
      <div className='flex flex-col max-w-5xl w-full mx-auto'>

        <div className='w-full bg-black-800 my-6'>
          <form
            className='flex w-full'
            onSubmit={handleSubmitFilter}
          >
            <div className='flex py-3 px-3 space-x-5 w-full'>
              {/* <Grid columnGap={5}>
            <Col xs={3}> */}
              <InputText
                id='palavra-chave'
                placeholder='Inserir Palavra-chave'
                value={prevKeyWordCard}
                onChange={event => setPrevKeyWordCard(event.target.value)}
              />
              {/* </Col>
            <Col> */}
              <Select
                id='tipo-busca-carta-yu-gi-oh'
                value={prevSearchBy}
                onChange={event => setPrevSearchBy(event.target.value as SearchTypeCardOptionsEnum)}
              >
                <option value={SearchTypeCardOptionsEnum.SearchByName}>{SearchTypeCardOptionsEnum.SearchByName}</option>
                <option value={SearchTypeCardOptionsEnum.SearchByDesc}>{SearchTypeCardOptionsEnum.SearchByDesc}</option>
                <option value={SearchTypeCardOptionsEnum.SearchByPendulumEffect}>{SearchTypeCardOptionsEnum.SearchByPendulumEffect}</option>
                <option value={SearchTypeCardOptionsEnum.SearchById}>{SearchTypeCardOptionsEnum.SearchById}</option>
              </Select>
              {/* </Col>
            <Col xs={3}> */}
              <Select
                id='tipo-carta-yu-gi-oh'
                value={prevTypeCard}
                onChange={event => setPrevTypeCard(event.target.value)}
              >
                <option value={typeCardValueOptionsEnum[TypeCardOptionsEnum.AllCards]}>{TypeCardOptionsEnum.AllCards}</option>
                <option value={typeCardValueOptionsEnum[TypeCardOptionsEnum.MonterCards]}>{TypeCardOptionsEnum.MonterCards}</option>
                <option value={typeCardValueOptionsEnum[TypeCardOptionsEnum.SpellCards]}>{TypeCardOptionsEnum.SpellCards}</option>
                <option value={typeCardValueOptionsEnum[TypeCardOptionsEnum.TrapCards]}>{TypeCardOptionsEnum.TrapCards}</option>
              </Select>
              {/* </Col>
            <Col xs={3}> */}
              <Button
                type='submit'
                disabled={isLoadingsCards}
              >
                Buscar
              </Button>
              {/* </Col>
          </Grid> */}
            </div>
          </form >
        </div>

        {
          isNotFoundCards ?(
            <NoutFoundMenssage />
          ): (
              <>
                <Paginations
                  className='mb-4 items-end'
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalRecords={totalRecords}
                  onChangePage={toPage => handlechangePage(toPage)}
                  disabled={isLoadingsCards}
                />
                <div className='w-full bg-black-800 rounded-md border-gray-600 border-2 mb-4'>
                  <ul className='flex w-full flex-col p-4'>
                    {
                      cardsRecoreds?.cards?.map((card, i) => (
                        <li
                          key={card?.id}
                          className={`flex w-full border-gray-600 border-b-2 p${i ? 'y' : 'b'}-4`}
                        >
                          <img
                            src={card.card_images?.[0].image_url_small}
                            alt={card?.name}
                            width={96}
                            height={14.57}
                            loading='lazy'

                          />
                          <div className='flex flex-col w-full h-full ml-3'>

                            <div className='flex pb-1 border-gray-600 border-b-1'>
                              <span className='text-white font-sans text-base font-bold'>
                                {card?.name}
                              </span>
                            </div>

                            <div className='flex py-1 border-gray-600 border-b-1'>
                              {
                                card?.attribute && (
                                  <span className='flex items-center text-white font-sans text-sm pr-3 border-gray-600 border-r-1'>
                                    {
                                      <img
                                        className='mr-1'
                                        src={`/imgs/attribute_icon_${card?.attribute}.png`}
                                        alt={card?.attribute}
                                        width={18}
                                        height={18}
                                      />
                                    }
                                    {card?.attribute}
                                  </span>
                                )
                              }

                              {
                                !isMonster(card?.type) && (
                                  <span className='flex items-center text-white font-sans text-sm pr-3 border-gray-600 border-r-1'>
                                    <img
                                      className='mr-1'
                                      src={`/imgs/attribute_icon_${isSpell(card?.type) ? 'spell' : isTrap(card?.type) ? 'spell' : ''}.png`}
                                      alt={card?.type}
                                      width={18}
                                      height={18}
                                    />
                                    {
                                      isSpell(card?.type) ? (
                                        'Spell'
                                      ) : isTrap(card?.type) ? (
                                        'Trap'
                                      ) : (
                                        <></>
                                      )
                                    }
                                  </span>
                                )
                              }

                              {
                                !isMonster(card?.type) && (
                                  <span className='text-white font-sans text-sm px-3 border-gray-600 border-r-1'>
                                    {card?.race}
                                  </span>
                                )
                              }

                              {
                                card?.level && (
                                  <span className='text-white font-sans text-sm px-3 border-gray-600 border-r-1'>
                                    Nível {card?.level}
                                  </span>
                                )
                              }

                              {
                                isMonster(card?.type) && (
                                  <span className='text-white font-sans text-sm px-3 border-gray-600 border-r-1'>
                                    [ {card?.race} / {card?.type?.replace('Monster', '')?.trim()?.split(' ')?.join(' / ')} ]
                                  </span>
                                )
                              }
                              {
                                card?.atk && (
                                  <span className='text-white font-sans text-sm px-3 border-gray-600 border-r-1'>
                                    ATK {card?.atk}
                                  </span>
                                )
                              }

                              {
                                card?.def && (
                                  <span className='text-white font-sans text-sm px-3 border-gray-600 border-r-1'>
                                    DEF {card?.def}
                                  </span>
                                )
                              }

                            </div>

                            <div className='flex py-1'>
                              <p className='text-white font-sans text-xs'>
                                {card?.desc}
                              </p>
                            </div>

                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <Paginations
                  className='mb-14 items-start'
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalRecords={totalRecords}
                  onChangePage={toPage => handlechangePage(toPage)}
                  disabled={isLoadingsCards}
                />
              </>
            )
        }
      </div>
    </DefaultsTemplate>
  )
}

export default Home
