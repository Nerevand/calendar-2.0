import React, { useMemo, useCallback, useState } from 'react'
import moment, { Moment } from 'moment'
import { useTranslation } from "react-i18next";
import { useMount } from 'react-use'

import { Events } from 'typedefs'

type CalendarProviderOptions = {
  activeLang: string
  eventList: Events.Event[]
  selectedDate: Moment
  selectedMonth: number
  selectedYear: number
  openDialog: boolean
  handleOpenDialog: () => void
  handleCloseDialog: () => void
  changeMonth: (m: number) => void
  changeYear: (y: number) => void
  handleChangeDay: (d: Date) => void
  handleToday: () => void
  handlePrevMonth: () => void
  handleNextMonth: () => void
  handlePrevWeek: () => void
  handleNextWeek: () => void
  handleAddEvent: (e: Events.Event) => void
  handleEditEvent: (e: Events.Event) => void
  handledeleteEvent: (id: number) => void
  setLanguage: (l: string) => void
}

const CalendarContext = React.createContext<CalendarProviderOptions>(null as any)

export const CalendarProvider: React.FC = ({ children }) => {
  const { i18n } = useTranslation()
  const [eventList, setEventList] = useState<Events.Event[]>([])
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState<moment.Moment>(moment())
  const [selectedMonth, setSelectedMonth] = useState<number>(moment().month())
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const handleSetLanguage = useCallback((lang: string) => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  }, [i18n])

  const handleOpenDialog = useCallback(() => {
    setOpenDialog(true)
  }, [setOpenDialog])

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false)
  }, [setOpenDialog])



  const handleToday = useCallback(() => {
    const today = moment()
    setSelectedDate(today)
    setSelectedMonth(today.month())
    setSelectedYear(today.year())
  }, [setSelectedDate, setSelectedMonth, setSelectedYear])

  const handlePrevMonth = useCallback(() => {
    const data = moment(selectedDate).subtract(1, 'months')
    setSelectedDate(data)
    setSelectedMonth(data.month())
    setSelectedYear(data.year())
  }, [selectedDate, setSelectedDate, setSelectedMonth, setSelectedYear])

  const handleNextMonth = useCallback(() => {
    const data = moment(selectedDate).add(1, 'months')
    setSelectedDate(data)
    setSelectedMonth(data.month())
    setSelectedYear(data.year())
  }, [selectedDate, setSelectedDate, setSelectedMonth, setSelectedYear])

  const handlePrevWeek = useCallback(() => {
    const data = moment(selectedDate).subtract(1, 'weeks')
    setSelectedDate(data)
    setSelectedMonth(data.month())
    setSelectedYear(data.year())
  }, [selectedDate, setSelectedDate, setSelectedMonth, setSelectedYear])

  const handleNextWeek = useCallback(() => {
    const data = moment(selectedDate).add(1, 'weeks')
    setSelectedDate(data)
    setSelectedMonth(data.month())
    setSelectedYear(data.year())
  }, [selectedDate, setSelectedDate, setSelectedMonth, setSelectedYear])

  const handleChangeDay = useCallback((date: Date) => {
    setSelectedDate(moment(date))
  }, [setSelectedDate])

  const changeMonth = useCallback((month: number) => {
    setSelectedMonth(month)
  }, [setSelectedMonth])

  const changeYear = useCallback((year: number) => {
    setSelectedYear(year)
  }, [setSelectedYear])

  const handleAddEvent = useCallback((newEvent) => {
    const currentEvents = [...eventList, newEvent]
    setEventList(currentEvents)
    console.log({ newEvent })
    localStorage.setItem('events', JSON.stringify(currentEvents))
  }, [eventList, setEventList])

  const handleEditEvent = useCallback((event) => {
    const currentEvents = eventList.map((e) => e.id === event.id ? event : e)
    setEventList(currentEvents)
    localStorage.setItem('events', JSON.stringify(currentEvents))
  }, [eventList, setEventList])

  const handledeleteEvent = useCallback((id: number) => {
    const currentEvents = eventList.filter((e) => e.id !== id)
    setEventList(currentEvents)
    localStorage.setItem('events', JSON.stringify(currentEvents))
  }, [eventList, setEventList])

  const contextValue = useMemo<CalendarProviderOptions>(() => ({
    eventList,
    activeLang: i18n.language,
    selectedDate,
    selectedMonth,
    selectedYear,
    openDialog,
    handleOpenDialog,
    handleCloseDialog,
    changeMonth,
    changeYear,
    handleToday,
    handleChangeDay,
    handlePrevMonth,
    handlePrevWeek,
    handleNextWeek,
    handleNextMonth,
    handleAddEvent,
    handleEditEvent,
    handledeleteEvent,
    setLanguage: handleSetLanguage,
  }), [
    eventList,
    i18n.language,
    selectedDate,
    selectedMonth,
    selectedYear,
    openDialog,
    handleOpenDialog,
    handleCloseDialog,
    changeMonth,
    changeYear,
    handleToday,
    handleChangeDay,
    handlePrevMonth,
    handleNextMonth,
    handlePrevWeek,
    handleNextWeek,
    handleAddEvent,
    handleEditEvent,
    handledeleteEvent,
    handleSetLanguage,
  ])

  useMount(() => {
    const savedEvents = localStorage.getItem('events') || JSON.stringify([])
    setEventList(JSON.parse(savedEvents))
  })

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  )
}

export default CalendarContext