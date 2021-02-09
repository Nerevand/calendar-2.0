import { Moment } from 'moment' 
 
 export namespace Events {
  
  export type Event = {
    id: number
    dateStart: Moment 
    dateEnd?: Moment | null
    task: string
  }

}