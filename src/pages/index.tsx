import type { NextPage } from 'next'
import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { Button } from '../components/General/Buttons/Button'
import InputText from '../components/General/Inputs/InputText'
import Select from '../components/General/Inputs/Select'
import { Col, Grid } from '../components/General/Layouts/Grid'
import NoutFoundMenssage from '../components/General/Layouts/NoutFoundMenssage'
import Shimmer from '../components/General/Layouts/Shimmer'
import Paginations from '../components/General/Paginations'
import { DefaultsTemplate } from '../components/Templates/DefaultsTemplate'
import { ICardQueryParans, useCardInfo } from '../hooks/useCardInfo'
import { SearchTypeCardOptionsEnum, TypeCardOptionsEnum, typeCardValueOptionsEnum } from '../types/SearchTypeCardOptions';
import Figure from '../components/General/Figure'
import Checkbox from '../components/General/Inputs/Checkbox'
import { attributesCheckOptions, IAttributeCheck } from '../types/AttributesCheckOptions'
import { RaceCardEnum, TypeAttributeMonsterEnum, TypeCardEnum } from '../types/Card'
import { isNumber, isString } from '../utilts/isType'
import { IconCheck, iconsCheckOptions } from '../types/IconsCheckOptions'
import { TypeMonstersCheck, typesCheckOptions } from '../types/TypeMonstersCheckOptions'
import { TypeCardsCheck, typeCardsCheckOptions } from '../types/TypesCardsOptions'

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
  const [prevAttributesCheckeds, setPrevAttributesCheckeds] = useState<IAttributeCheck[]>(attributesCheckOptions);
  const [prevIconsCheckeds, setPrevIconsCheckeds] = useState<IconCheck[]>(iconsCheckOptions);
  const [prevTypesMonstersCheckeds, setPrevTypesMonstersCheckeds] = useState<TypeMonstersCheck[]>(typesCheckOptions);
  const [prevTypesCardsCheckeds, setPrevTypesCardsCheckeds] = useState<TypeCardsCheck[]>(typeCardsCheckOptions);
  const [prevIsNormalMonster, setPrevIsNormalMonster] = useState(false);
  const [prevIsEffectMonster, setPrevIsEffectMonster] = useState(false);

  const [keyWordCard, setKeyWordCard] = useState('');
  const [searchBy, setSearchBy] = useState<SearchTypeCardOptionsEnum>(SearchTypeCardOptionsEnum.SearchByName);
  const [typeCard, setTypeCard] = useState('');
  const [attributesCheckeds, setAttributesCheckeds] = useState('');
  const [iconsCheckeds, setIconsCheckeds] = useState('');
  const [typesMonstersCheckeds, setTypesMonstersCheckeds] = useState('');
  const [typesCardsCheckeds, setTypesCardsCheckeds] = useState('');
  const [isNormalMonster, setIsNormalMonster] = useState(false);
  const [isEffectMonster, setIsEffectMonster] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  const isDisableAttributesCheckeds = useMemo(() => {
    return prevTypeCard === TypeCardEnum.SpellCard || prevTypeCard === TypeCardEnum.TrapCard
  }, [prevTypeCard]);

  const isDisableIconsCheckeds = useMemo(() => {
    return prevTypeCard.includes('Monster');
  }, [prevTypeCard]);

  const isDisableTypeMonstersCheckeds = useMemo(() => {
    return isDisableAttributesCheckeds
  }, [isDisableAttributesCheckeds]);

  const isDisableTypeCardsCheckeds = useMemo(() => {
    return isDisableAttributesCheckeds;
  }, [isDisableAttributesCheckeds]);

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
    const attribute = prevAttributesCheckeds.filter(att => att.checked).map(att => att.attribute.toUpperCase()).join(',');
    const race = prevIconsCheckeds.filter(icons => icons.checked).map(icons => icons.icon.toUpperCase()).join(',');
    const typeMonster = prevTypesMonstersCheckeds.filter(typeMonster => typeMonster.checked).map(typeMonster => typeMonster.type.toUpperCase()).join(',');
    const typeMonsterCards = prevTypesCardsCheckeds.filter(typeMonster => typeMonster.checked).map(Typecard => Typecard.type.toUpperCase()).join(',');

    //key word
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
    }
    setKeyWordCard(prevKeyWordCard.trim());


    // card select type
    if (prevTypeCard) {
      cardsFilter.type = prevTypeCard;
      setTypeCard(prevTypeCard);
    }
    else {
      setTypeCard('');
    }

    //attribute
    if (attribute && !isDisableAttributesCheckeds) {
      cardsFilter.attribute = attribute;
      setAttributesCheckeds(attribute);
    }
    else {
      setAttributesCheckeds('');
    }

    //race
    if (race && !isDisableIconsCheckeds) {
      cardsFilter.race = race;
      setIconsCheckeds(race);
    }
    else {
      setIconsCheckeds('');
    }

    //typeMonsters
    if (typeMonster && !isDisableTypeMonstersCheckeds) {
      cardsFilter.race = typeMonster;
      setTypesMonstersCheckeds(typeMonster);
    }
    else {
      setTypesMonstersCheckeds('');
    }

    //typeCards
    if (prevIsNormalMonster && !prevIsEffectMonster) {
      cardsFilter.has_effect = false;
      setIsNormalMonster(true)
      setIsEffectMonster(false)
    }
    else if (!prevIsNormalMonster && prevIsEffectMonster) {
      cardsFilter.has_effect = true;
      setIsNormalMonster(false)
      setIsEffectMonster(true)
    }
    else {
      setIsNormalMonster(false)
      setIsEffectMonster(false)
    }

    if (typeMonsterCards && !isDisableTypeCardsCheckeds) {
      cardsFilter.type = typeMonsterCards;
      setTypesCardsCheckeds(typeMonsterCards)
    }
    else {
      setTypesCardsCheckeds('');
    }

    return cardsFilter;
  }, [
    prevKeyWordCard,
    prevSearchBy,
    prevTypeCard,
    prevAttributesCheckeds,
    prevTypesCardsCheckeds,
    prevTypesMonstersCheckeds,
    isDisableAttributesCheckeds,
    isDisableIconsCheckeds,
    isDisableTypeMonstersCheckeds,
    isDisableTypeCardsCheckeds,
    prevIconsCheckeds,
    prevIsNormalMonster,
    prevIsEffectMonster
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
    if (attributesCheckeds) {
      cardsFilter.attribute = attributesCheckeds;
    }
    if (iconsCheckeds) {
      cardsFilter.race = iconsCheckeds;
    }
    if (typesMonstersCheckeds) {
      cardsFilter.race = typesMonstersCheckeds;
    }
    if (isNormalMonster && !isEffectMonster) {
      cardsFilter.has_effect = false;
    }
    if (!isNormalMonster && isEffectMonster) {
      cardsFilter.has_effect = true;
    }
    if (typesCardsCheckeds) {
      cardsFilter.type = typesCardsCheckeds;
    }
    return cardsFilter;
  }, [
    keyWordCard,
    searchBy,
    typeCard,
    attributesCheckeds,
    typesMonstersCheckeds,
    typesCardsCheckeds,
    iconsCheckeds,
    isNormalMonster,
    isEffectMonster
  ]);

  const handlechangePage = useCallback((page) => {
    setCurrentPage(page)
    getCards({
      page,
      ...getCardsFilters()
    })
  }, [getCards, getCardsFilters])

  const handleCheckAttribute = useCallback(({ attribute, checked }: { attribute: TypeAttributeMonsterEnum, checked: boolean }) => {
    setPrevAttributesCheckeds(currentPrevAttributesCheckeds => {
      const currentPrevAttributesCheckedsTmp = [...currentPrevAttributesCheckeds]
      const indexAttribute = currentPrevAttributesCheckeds.findIndex(att => att.attribute === attribute)
      if (indexAttribute !== -1) {
        currentPrevAttributesCheckedsTmp[indexAttribute].checked = checked;
      }
      return currentPrevAttributesCheckedsTmp;
    })
  }, [])

  const handleCheckIcons = useCallback(({ icon, checked }: { icon: RaceCardEnum, checked: boolean }) => {
    setPrevIconsCheckeds(currentPrevIconsCheckeds => {
      const indexIcon = currentPrevIconsCheckeds.findIndex(iconCheck => iconCheck.icon === icon)
      const currentPrevIconsCheckedsTmp = [...currentPrevIconsCheckeds]
      if (indexIcon !== -1) {
        currentPrevIconsCheckedsTmp[indexIcon].checked = checked;
      }
      return currentPrevIconsCheckedsTmp;
    })
  }, [])

  const handleCheckTypesMonsters = useCallback(({ typeMonster, checked }: { typeMonster: RaceCardEnum, checked: boolean }) => {
    setPrevTypesMonstersCheckeds(currentPrevTypesCheckeds => {
      const indexTypeMonster = currentPrevTypesCheckeds.findIndex(typeMonsterCheck => typeMonsterCheck.type === typeMonster)
      const currentPrevTypesCheckedsTmp = [...currentPrevTypesCheckeds]
      if (indexTypeMonster !== -1) {
        currentPrevTypesCheckedsTmp[indexTypeMonster].checked = checked;
      }
      return currentPrevTypesCheckedsTmp;
    })
  }, [])

  const handleCheckTypesCards = useCallback(({ typeCard, checked }: { typeCard: string | TypeCardEnum, checked: boolean }) => {
    setPrevTypesCardsCheckeds(currentPrevTypesCardsCheckeds => {
      const indexTypeCards = currentPrevTypesCardsCheckeds.findIndex(typeCheck => typeCheck.type === typeCard)
      const currentPrevTypesCardsCheckedsTmp = [...currentPrevTypesCardsCheckeds]
      if (indexTypeCards !== -1) {
        currentPrevTypesCardsCheckedsTmp[indexTypeCards].checked = checked;
      }
      return currentPrevTypesCardsCheckedsTmp;
    })
  }, [])

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
            className='flex flex-col p-3 w-full space-y-1.5'
            onSubmit={handleSubmitFilter}
          >
             {/* space-x-0 md:space-x-5 space-y-3 md:space-y-0 */}
            <div className={`
              flex
             
              w-full border-b-1 border-gray-600 pb-3
            `}>
            <Grid columnGap={5} rowGap={3}>
              <Col xs={12} md={3}>
                <InputText
                  id='palavra-chave'
                  placeholder='Inserir Palavra-chave'
                  value={prevKeyWordCard}
                  onChange={event => setPrevKeyWordCard(event.target.value)}
                />
              </Col>
              <Col xs={12} md={3}>
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
              </Col>
              <Col xs={12} md={3}>
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
              </Col>
              <Col xs={12} md={3}>
                <Button
                  type='submit'
                  disabled={isLoadingsCards}
                >
                  Buscar
                </Button>
              </Col>
            </Grid>
        </div>

        <div className='flex flex-col  space-y-2'>

          <div className='flex flex-col sm:flex-row border-b-1 border-gray-600'>
            <span className='flex  pr-4 mr-4 h-full w-24 font-sans text-sm text-white mb-2 sm:mb-0 border-r-0 sm:border-r-1 border-gray-600'>
              Atributo:
            </span>
            <div className='flex flex-wrap'>
              {
                prevAttributesCheckeds.map(attributeCheck => (

                  <Checkbox
                    id={attributeCheck.attribute}
                    key={attributeCheck.attribute}
                    className='mr-3 mb-2'
                    checked={attributeCheck.checked}
                    disabled={isDisableAttributesCheckeds}
                    onChange={event => handleCheckAttribute({
                      attribute: attributeCheck.attribute,
                      checked: event.target.checked
                    })}
                  >
                    <Figure
                      className='mr-1'
                      imgProps={{
                        src: `/imgs/attribute_icon_${attributeCheck.attribute.toLowerCase()}.png`,
                        alt: attributeCheck.attribute,
                        width: 18,
                        height: 18,
                        loading: 'lazy'

                      }}
                    />
                    {attributeCheck.text}
                  </Checkbox>
                ))
              }
            </div>
          </div>

          <div className='flex flex-col sm:flex-row border-b-1 border-gray-600'>
            <span className='flex pr-4 mr-4 h-full w-24 font-sans text-sm text-white mb-2 sm:mb-0 border-r-0 sm:border-r-1 border-gray-600'>
              Ícone:
            </span>
            <div className='flex flex-wrap'>
              {
                prevIconsCheckeds.map(iconCheck => (

                  <Checkbox
                    id={iconCheck.icon}
                    key={iconCheck.icon}
                    className='mr-3 mb-2'
                    checked={iconCheck.checked}
                    disabled={isDisableIconsCheckeds}
                    onChange={event => handleCheckIcons({
                      icon: iconCheck.icon,
                      checked: event.target.checked
                    })}
                  >
                    {
                      iconCheck?.icon !== RaceCardEnum.Normal && (
                        <Figure
                          className='mr-1'
                          imgProps={{
                            src: `/imgs/effect_icon_${iconCheck?.icon?.toLowerCase()}.png`,
                            alt: iconCheck?.icon,
                            width: 18,
                            height: 18,
                            loading: 'lazy'
                          }}
                        />
                      )
                    }
                    {iconCheck.text}
                  </Checkbox>
                ))
              }
            </div>
          </div>

          <div className='flex flex-col sm:flex-row border-b-1 border-gray-600'>
            <span className='flex pr-4 mr-4 h-full w-auto sm:w-24 font-sans text-sm text-white mb-2 sm:mb-0 border-r-0 sm:border-r-1 border-gray-600'>
              Tipo de Monstro:
            </span>
            <div className='flex flex-wrap'>
              {
                prevTypesMonstersCheckeds.map(typeCheck => (
                  <Checkbox
                    id={typeCheck.type}
                    key={typeCheck.type}
                    className='mr-2 mb-2'
                    checked={typeCheck.checked}
                    disabled={isDisableTypeMonstersCheckeds}
                    onChange={event => handleCheckTypesMonsters({
                      typeMonster: typeCheck.type,
                      checked: event.target.checked
                    })}
                  >
                    <span className='capitalize'>
                      {typeCheck.text}
                    </span>
                  </Checkbox>
                ))
              }
            </div>
          </div>

          <div className='flex flex-col sm:flex-row'>
            <span className='flex pr-4 mr-4 h-full w-auto sm:w-40 font-sans text-sm text-white mb-2 sm:mb-0 border-r-0 sm:border-r-1 border-gray-600'>
              Tipo de Card:
            </span>
            <div className='flex flex-wrap'>
              <Checkbox
                id='normal'
                className='mr-2 mb-2'
                checked={prevIsNormalMonster}
                disabled={isDisableTypeCardsCheckeds}
                onChange={event => setPrevIsNormalMonster(event.target.checked)}
              >
                <span className='capitalize'>Normal </span>
              </Checkbox>
              <Checkbox
                id='effect'
                className='mr-2 mb-2'
                checked={prevIsEffectMonster}
                disabled={isDisableTypeCardsCheckeds}
                onChange={event => setPrevIsEffectMonster(event.target.checked)}
              >
                <span className='capitalize'>Efeito </span>
              </Checkbox>
              {
                prevTypesCardsCheckeds.map(typeCardCheck => (
                  <Checkbox
                    id={typeCardCheck.type}
                    key={typeCardCheck.type}
                    className='mr-2 mb-2'
                    checked={typeCardCheck.checked}
                    disabled={isDisableTypeCardsCheckeds}
                    onChange={event => handleCheckTypesCards({
                      typeCard: typeCardCheck.type,
                      checked: event.target.checked
                    })}
                  >
                    <span className='capitalize'>
                      {typeCardCheck.text}
                    </span>
                  </Checkbox>
                ))
              }
            </div>
          </div>

        </div>
      </form >
    </div>

        {
    isNotFoundCards ? (
      <NoutFoundMenssage />
    ) : (
      <>
        <Paginations
          className='mb-4 sm:items-end'
          // className='mb-4 items-end'
          currentPage={currentPage}
          totalPages={totalPages}
          totalRecords={totalRecords}
          onChangePage={toPage => handlechangePage(toPage)}
          disabled={isLoadingsCards}
        />
        <div className='w-full bg-black-800 rounded-md border-gray-600 border-2 mb-4 overflow-hidden'>
          <ul className='flex w-full flex-col p-4'>
            {
              isLoadingsCards ? (
                Array.from(Array(10).keys()).map(i => (
                  <li
                    key={i + 'schimmer'}
                    className={`flex w-full border-gray-600 border-b-2 ${i > 0 ? 'pt-4' : 'pt-0'}`}
                  >
                    <Shimmer className='w-24 mb-4 h-sm-card' />
                    <div className='flex flex-col w-full h-full ml-3'>
                      <div className='flex pb-1 border-gray-600 border-b-1'>
                        <Shimmer className='mb-3 w-52 h-3 rounded-lg' />
                      </div>
                      <div className='flex flex-col py-4 space-y-4 '>
                        <Shimmer className='w-full h-2 rounded-lg' />
                        <Shimmer className='w-full h-2 rounded-lg' />
                        <Shimmer className='w-full h-2 rounded-lg' />
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                cardsRecoreds?.cards?.map((card, i) => (
                  <li
                    key={card?.id}
                    className={`flex flex-col sm:flex-row  w-full border-gray-600 border-b-2 ${i > 0 ? 'pt-4' : 'pt-0'}`}
                  >
                    <Figure
                      imgProps={{
                        src: String(card.card_images?.[0].image_url_small),
                        alt: card?.name,
                        width: 96,
                        height: 140.57,
                        loading: 'eager',
                        quality: 0.2,
                      }}
                    />
                    <div className='flex flex-col w-full h-full ml-0 sm:ml-3'>

                      <div className='flex pb-1 border-gray-600 border-b-1'>
                        <span className='text-white font-sans text-sm sm:text-base font-bold'>
                          {card?.name}
                        </span>
                      </div>

                      <div className='flex flex-col sm:flex-row py-1 border-gray-600 border-b-1'>
                        <div className='flex mb-1 sm:mb-0'>
                          {
                            card?.attribute && (
                              <span className='flex items-center text-white font-sans text-xs sm:text-sm pr-3 border-gray-600 border-r-1'>
                                {
                                  <Figure
                                    className='mr-1'
                                    imgProps={{
                                      src: `/imgs/attribute_icon_${card?.attribute?.toLowerCase()}.png`,
                                      alt: card?.attribute,
                                      width: 18,
                                      height: 18,
                                      loading: 'lazy'
                                    }}
                                  />
                                }
                                {card?.attribute}
                              </span>
                            )
                          }

                          {
                            !isMonster(card?.type) && (
                              <span className='flex items-center text-white font-sans text-xs sm:text-sm pr-3 border-gray-600 border-r-1'>
                                <Figure
                                  className='mr-1'
                                  imgProps={{
                                    src: `/imgs/attribute_icon_${isSpell(card?.type) ? 'spell' : isTrap(card?.type) ? 'spell' : ''}.png`,
                                    alt: card?.type,
                                    width: 18,
                                    height: 18,
                                    loading: 'lazy'
                                  }}
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
                              <span className='flex items-center text-white font-sans text-xs sm:text-sm px-3 border-gray-600 border-r-1'>
                                {
                                  card?.race !== RaceCardEnum.Normal && (
                                    <Figure
                                      className='mr-1'
                                      imgProps={{
                                        src: `/imgs/effect_icon_${card?.race?.toLowerCase()}.png`,
                                        alt: 'race',
                                        width: 18,
                                        height: 18,
                                        loading: 'lazy'
                                      }}
                                    />
                                  )
                                }
                                {card?.race}
                              </span>
                            )
                          }

                          {
                            card?.level && (
                              <span className='flex items-center text-white font-sans text-xs sm:text-sm px-3 border-gray-600 border-r-1'>
                                <Figure
                                  className='mr-1'
                                  imgProps={{
                                    src: `/imgs/icon_level.png`,
                                    alt: card?.attribute,
                                    width: 18,
                                    height: 18,
                                    loading: 'lazy'
                                  }}
                                />

                                Nível {card?.level}
                              </span>
                            )
                          }
                        </div>
                        <div className='flex mb-1 sm:mb-0'>
                          {
                            isMonster(card?.type) && (
                              <span className='text-white font-sans text-xs sm:text-sm px-0 sm:px-3 border-gray-600 border-r-0 sm:border-r-1'>
                                [ {card?.race} / {card?.type?.replace('Monster', '')?.trim()?.split(' ')?.join(' / ')} ]
                              </span>
                            )
                          }
                        </div>
                        <div className='flex mb-1 sm:mb-0'>
                          {
                            (isNumber(card?.atk) || isString(card?.atk)) && (
                              <span className='text-white font-sans text-xs sm:text-sm px-0 sm:px-3 border-gray-600 border-r-0 sm:border-r-1'>
                                ATK {card?.atk}
                              </span>
                            )
                          }

                          {
                            (isNumber(card?.atk) || isString(card?.atk)) && (
                              <span className='text-white font-sans text-xs sm:text-sm px-3 border-gray-600 border-r-0 sm:border-r-1'>
                                DEF {card?.def}
                              </span>
                            )
                          }
                        </div>

                      </div>

                      <div className='flex flex-col py-1'>
                        <p className='text-white font-sans text-xs'>
                          {card?.desc}
                        </p>
                      </div>

                    </div>
                  </li>
                ))
              )
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
      </div >
    </DefaultsTemplate >
  )
}

export default Home
