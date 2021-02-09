import React, { useState, useContext, useMemo } from 'react'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import moment, { Moment } from 'moment'
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom'

import AlertDialogSlide from 'components/common/Dialog'
import Context from 'Context'
import { TIME_ZONE, DAYS } from 'invariants'
import { Events } from 'typedefs'

import Header from './Header'

import './style.scss'

function Times() {
  const renderItem = (item: string, index: number) => {
    return (
      <div className='time-zone'
        key={`${index} + ${item}`}
      >
        {item}
      </div>
    );
  };

  return (
    <section style={{ width: "64px" }}>
      <div style={{ width: '100%', height: '49px' }}></div>
      {TIME_ZONE.map(renderItem)}
    </section>
  );
}

const Weekly: React.FC = () => {
  const {
    eventList,
    selectedDate,
    openDialog,
    handleOpenDialog,
    handleCloseDialog,
    handleChangeDay,
    changeMonth,
    changeYear,
    handleAddEvent,
    handleEditEvent,
    handledeleteEvent,
  } = useContext(Context)
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const monthCalendar = useMemo(() => pathname.replace('/', ''), [pathname])
  const [event, setEditEvent] = useState<Events.Event | null>(null)

  const onCloseDialog = () => {
    setEditEvent(null)
    handleCloseDialog()
  }

  const renderHours = (time: Date, index: number) => {
    return (
      <div
        className="daily-time"
        key={index}
        onClick={() => {
          handleChangeDay(time)
          handleOpenDialog()
        }
        }
      />
    );
  };

  const renderTaskForDay = (d: Events.Event, length: number, index: number) => {
    const start = Number(moment(d.dateStart).format("H"))
    const end = Number(moment(d.dateEnd).format("H"))
    const diferent: number = end - start

    const width: number = 100 / length

    return (
      <div
        key={index}
        className="daily-task"
        style={{
          width: `${width}%`,
          height: end ? `${25 * diferent}px` : "100%",
          top: `${25 * start}px`,
          left: `${width * (index + 1)}%`,
          backgroundColor: index % 2 === 0 ? "#7986cb" : "#a1b2c3"
        }}
        onClick={(e) => {
          e.stopPropagation()
          setEditEvent(d)
          handleOpenDialog()
        }}
      >
        <p>
          {d.task}
        </p>
        <div className="remove-event">
          <IconButton edge="end" size='small' aria-label="delete"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
              handledeleteEvent(d.id)
            }}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  };

  const renderGrid = (date: Date) => {
    const tasksForDay = eventList.filter((item: Events.Event) =>
      moment(date).format('YYYY-MM-DD') === moment(item.dateStart).format('YYYY-MM-DD')
    );

    const hours: any[] = []
    const start = moment(date).startOf('day');
    const end = moment(date).endOf('day');

    const diff: number = end.diff(start, 'hours')

    for (let i = 0; i <= diff; i++) {
      //if i add one day for moment, it will change my start date of week.
      //it is the main reason why i get start of week in loop
      const startOfDay = moment(date).startOf('day')
      hours.push(startOfDay.add(i, 'hours'))
    }


    return (
      <section className='calendar-week-grid'>
        {hours.map((time: Date, index: number) => renderHours(time, index))}
        <div className='testClass'>
          {tasksForDay.map((task: Events.Event, index: number) => renderTaskForDay(task, tasksForDay.length, index))}
        </div>
      </section>
    );
  };

  const renderDay = ({ dayName, date }: any, index: number) => {
    const cls = clsx("calendar-day", {
      highlight: moment(date).format('DD-MM-YYYY') === moment(selectedDate).format('DD-MM-YYYY'),
    });

    return (
      <div className="weekly-day-wrapper" key={dayName}>
        <div
          className={cls}
          onClick={() => {
            handleChangeDay(date)
            changeYear(moment(date).year())
            changeMonth(moment(date).month())
          }}
        >
          {dayName}
        </div>
        {renderGrid(date)}
      </div>
    );
  };

  const renderDays = () => {
    const start = moment(selectedDate).startOf('week')
    const end = moment(selectedDate).endOf('week')
    const diff: number = end.diff(start, 'days')
    let weeks: Moment[] = []

    for (let i = 0; i <= diff; i++) {
      //if i add one day for moment, it will change my start date of week.
      //it is the main reason why i get start of week in loop
      const startOfWeek = moment(selectedDate).startOf('week')
      weeks.push(startOfWeek.add(i, 'days'))
    }

    const updatedDays = weeks.map((day: Moment, i: number) => {
      const format = day.format('DD/MM');

      return {
        dayName: `${t(`days.${DAYS[i]}`)} (${format})`,
        date: day,
      };
    });


    return (
      <div className="calendar-days">
        {updatedDays.map((day: any, index) => renderDay(day, index))}
      </div>
    );
  };

  return (
    <>
      <Header />
      <main className="board">
        <Times />
        <article className="calendar">{renderDays()}</article>

        <AlertDialogSlide
          open={openDialog}
          handleClose={onCloseDialog}
          date={selectedDate}
          handleAddEvent={!!event ? handleEditEvent : handleAddEvent}
          isEditMode={!!event}
          event={event}
          typeOfPicker={monthCalendar}
        />
      </main>
    </>
  )
}

export default Weekly