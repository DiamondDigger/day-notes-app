import React from 'react'
import styles from './Calendar.module.css'

const week = [1,2,3,4,5,6,7]

const Calendar = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.root}>
                    {
                    week.map((day) => (
                        <div key={day} className={styles.dayCell}>
                            {day}
                        </div>
                        ))
                    }
                </div>
                <div className={styles.root}>
                    {
                    week.map((day) => (
                        <div key={day} className={styles.dayCell}>
                            {day}
                        </div>
                        ))
                    }
                </div>
                <div className={styles.root}>
                    {
                    week.map((day) => (
                        <div key={day} className={styles.dayCell}>
                            {day}
                        </div>
                        ))
                    }
                </div>
                <div className={styles.root}>
                    {
                    week.map((day) => (
                        <div key={day} className={styles.dayCell}>
                            {day}
                        </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Calendar
