import React from 'react'
import styles from './Calendar.module.css'

const days = [1,2,3,4,5]

const Calendar = () => {
    return (
        <div className={styles.root}>
            {days.map((day) => (
                <div key={day} className={styles.dayCell}>
                    {day}
                </div>
            ))}
        </div>
    )
}

export default Calendar
