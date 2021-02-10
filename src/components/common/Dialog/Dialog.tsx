import { useState, useEffect, useCallback } from 'react';
import moment, { Moment } from 'moment'

import Button from 'components/ui/Button'
import Dialog from 'components/ui/Dialog'
import DialogActions from 'components/ui/DialogActions';
import DialogContent from 'components/ui/DialogContent';
import DialogTitle from 'components/ui/DialogTitle';
import TextField from 'components/ui/TextField'
import { TypesOfCalendar, TIME_ZONE } from 'invariants'
import { Events } from 'typedefs'

import TimePicker from './TimePicker'

type AlertDialogSlideProps = {
  typeOfPicker: string
  open: boolean
  handleClose: () => void
  date: Moment
  handleAddEvent: (event: Events.Event) => void
  isEditMode: boolean
  event: Events.Event | null
}

export default function AlertDialogSlide(props: AlertDialogSlideProps) {
  const {
    open,
    date,
    event,
    isEditMode,
    typeOfPicker,
    handleClose,
    handleAddEvent,
  } = props

  const [startDate, setStartDate] = useState<Moment>(date)
  const [endDate, setEndDate] = useState<Moment | null>(null)
  const [task, setTask] = useState<string>('')

  const handleSubmit = useCallback(
    () => {
      try {
        handleAddEvent({
          id: event?.id || moment().valueOf(),
          dateStart: startDate,
          dateEnd: endDate,
          task: task
        })

        handleClose()
      } catch (e) {
        console.error(e)
      }
    },
    [handleAddEvent, handleClose, startDate, endDate, task, event],
  )

  const setValuesToPicker = useCallback(() => {
    const timeFrom = `${moment(startDate).startOf('hour').format('HH')}:00`
    const index = TIME_ZONE.findIndex((t) => t === timeFrom)

    return [...(TIME_ZONE.slice(index + 1)), "00:00"]
  }, [startDate])


  useEffect(() => {
    if (isEditMode) {
      setStartDate(event?.dateStart || moment())
      setEndDate(event?.dateEnd || null)
      setTask(event?.task || '')
    } else {
      setStartDate(date)
      setEndDate(null)
      setTask('')
    }
  }, [isEditMode, event, date])



  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title" TypographyProps={{ variant: 'h5' }}>
        {isEditMode ? "Edit your task on this day" : "Create your task on this day"}
      </DialogTitle>
      <DialogContent>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {
            typeOfPicker === TypesOfCalendar.month
              ? (
                <TextField
                  id="date"
                  label="Date picker"
                  type="date"
                  value={moment(startDate).format('YYYY-MM-DD')}
                  onChange={(e: React.ChangeEvent<HTMLDataElement>) => setStartDate(moment(e.target.value))}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />)
              : (
                <div style={{
                  display: 'flex',
                }}>
                  <TimePicker
                    title="from"
                    data={TIME_ZONE}
                    value={`${moment(startDate).startOf('hour').format('HH')}:00`}
                    handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const date = moment(startDate).format('YYYY-MM-DD')
                      setStartDate(moment(`${date} ${e.target.value}`))
                    }}
                  />
                  <TimePicker
                    title="to"
                    data={setValuesToPicker()}
                    value={`${moment(endDate).startOf('hour').format('HH')}:00`}
                    handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const date = moment(startDate).format('YYYY-MM-DD')
                      setEndDate(moment(`${date} ${e.target.value}`))
                    }}
                  />
                </div>
              )
          }

          <TextField
            label="label"
            value={task}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
            type="text"
          />
        </div>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
          </Button>
        <Button onClick={handleSubmit} color="primary">
          {isEditMode ? "Save" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}