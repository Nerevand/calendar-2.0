import React, { useState, useMemo, useEffect, useContext } from 'react'
import clsx from 'clsx'
import moment from 'moment'
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import AlertDialogSlide from 'components/common/Dialog'
import { DAYS } from 'invariants'
import { Events } from 'typedefs'

import Context from '../../Context'
import Header from './MonthlyHeader'

import './style.scss'

type DatesOptions = {
  inMonth: boolean
  date: Date
}

const MonthlyCalendar: React.FC = () => {
  const {
    eventList,
    selectedDate,
    selectedMonth,
    selectedYear,
    changeMonth,
    changeYear,
    openDialog,
    handleOpenDialog,
    handleCloseDialog,
    handleChangeDay,
    handleAddEvent,
    handleEditEvent,
    handledeleteEvent,
  } = useContext(Context)
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const monthCalendar = useMemo(() => pathname.replace('/', ''), [pathname])
  const [dates, setDates] = useState<DatesOptions[]>([])
  const [event, setEditEvent] = useState<Events.Event | null>(null)

  let weeks = 4;
  if (dates.length > 0) {
    weeks = moment(dates[dates.length - 1].date).diff(
      dates[0].date, 'week');
  }

  const onCloseDialog = () => {
    setEditEvent(null)
    handleCloseDialog()
  }

  const cls = clsx("calendar", `calendar-${weeks}-weeks`);

  useEffect(() => {
    const month = moment().month(selectedMonth).year(selectedYear).format()
    const preDays: DatesOptions[] = []
    const dates: DatesOptions[] = []
    const nextDates: DatesOptions[] = []

    const dateFrom = moment(month).subtract(1, 'months').endOf('month');
    let preMonthDayOffset: number = dateFrom.day()

    while (preMonthDayOffset >= 0 && preMonthDayOffset < 7) {
      preDays.push({
        inMonth: false,
        date: new Date(
          `${moment(dateFrom).year()}-${moment(dateFrom).month() + 1
          }-${moment(dateFrom).date() - preMonthDayOffset}`
        ),
      });
      preMonthDayOffset--;
    }

    const totalDaysInCurrentMonth = moment(month).daysInMonth()

    for (let day = 1; day <= totalDaysInCurrentMonth; day++) {
      dates.push({
        inMonth: true,
        date: new Date(`${selectedYear}-${selectedMonth + 1}-${day}`),
      });
    }

    const dateFromNextMonth = moment(month).add(1, 'months').startOf('month').format('YYYY-MM-DD');
    const nextMonthDayOffset: number = 7 - moment(dateFromNextMonth).day()

    const nextMonthFirstDate = moment(month).add(1, 'M').startOf('month').format('YYYY-MM-DD hh:mm:ss')

    for (let i = 0; i < nextMonthDayOffset; i++) {
      nextDates.push({
        inMonth: false,
        date: new Date(
          `${moment(nextMonthFirstDate).year()}-${moment(nextMonthFirstDate).month() + 1
          }-${moment(nextMonthFirstDate).date() + i}`
        ),
      });
    }

    setDates([...preDays, ...dates, ...nextDates])
  }, [selectedMonth, selectedYear])

  const renderDay = (day: string) => {
    return (
      <div className="calendar-day" key={day}>
        {day}
      </div>
    );
  }

  const renderDays = () => {
    const updatedDAys = DAYS.map((d) => `${t(`days.${d}`)}`);
    return (
      <header className="calendar-grid">
        {updatedDAys.map((day) => renderDay(day))}
      </header>
    );
  }

  const renderDate = (dateObj: DatesOptions, ind: number) => {
    const { date, inMonth } = dateObj;
    const cls = clsx("calendar-date", {
      "in-month": inMonth,
      highlight: moment(date).format('DD-MM-YYYY') === moment(selectedDate).format('DD-MM-YYYY'),
    });

    const currentTasks = eventList.filter((item: Events.Event) =>
      moment(date).format('YYYY-MM-DD') === moment(item.dateStart).format('YYYY-MM-DD')
    );


    return (
      <div
        className={cls}
        key={ind}
        style={{
          overflowY: currentTasks.length ? "auto" : "hidden"
        }}
        onClick={() => {
          handleChangeDay(date)
          changeYear(moment(date).year())
          changeMonth(moment(date).month())
          handleOpenDialog()
        }}
      >
        {moment(date).format('DD')}
        <br />
        <br />
        < >
          {
            currentTasks.map((item: Events.Event) => {
              return (
                <div
                  key={item.id}
                  className="month-event"
                  onClick={(e) => {
                    e.stopPropagation()
                    setEditEvent(item)
                    handleOpenDialog()
                  }}
                  style={{
                    marginBottom: '5px',
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: 'center',
                    backgroundColor: "#cdcdcd",
                  }} >
                  {item.task}
                  <div className="delete-event">
                    <IconButton edge="end" size='small' aria-label="delete"
                      onClick={(e) => {
                        e.stopPropagation()
                        handledeleteEvent(item.id)
                      }}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              )
            })
          }
        </>
      </div>
    );
  }

  const renderGrid = () => {
    return (
      <section className="calendar-grid">
        {dates.map((date: DatesOptions, ind: number) => renderDate(date, ind))}
      </section>
    );
  }

  return (
    <>
      <Header />
      <article className={cls}>
        {renderDays()}
        {renderGrid()}

        <AlertDialogSlide
          open={openDialog}
          handleClose={onCloseDialog}
          date={selectedDate}
          handleAddEvent={!!event ? handleEditEvent : handleAddEvent}
          isEditMode={!!event}
          event={event}
          typeOfPicker={monthCalendar}
        />
      </article>
    </>
  )
}

export default MonthlyCalendar