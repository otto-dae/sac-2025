export interface ScheduleItem {
    title: string
    place: string
    duration: number[]
}

export interface ScheduleRow {
    time: string
    items: ScheduleItem[]
}

export interface ScheduleDay {
    day: string
    events: ScheduleRow[]
}

export interface Error {
    code: number
    message: string
}