import React from 'react'
import styles from './GridCalendar.module.css'

const week = [1,2,3,4,5,6,7]

const GridCalendar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.month}>
                <div className={styles.weekCounter}></div>
                <div className={styles.weekDays}>
                    <div className={styles.weekDay}>Sunday</div>
                    <div className={styles.weekDay}>Monday</div>
                    <div className={styles.weekDay}>Tuesday</div>
                    <div className={styles.weekDay}>Wednesday</div>
                    <div className={styles.weekDay}>Thursday</div>
                    <div className={styles.weekDay}>Friday</div>
                    <div className={styles.weekDay}>Saturday</div>
                </div>
                {
                    week.map((day) => (
                        <div key={day} className={styles.dayCell}>
                            {day}
                        </div>
                        ))
                    }
                {
                    week.map((day) => (
                        <div key={day} className={styles.dayCell}>
                            {day}
                        </div>
                        ))
                    }
                {
                    week.map((day) => (
                        <div key={day} className={styles.dayCell}>
                            {day}
                        </div>
                        ))
                    }
                {
                    week.map((day) => (
                        <div key={day} className={styles.dayCell}>
                            {day}
                        </div>
                        ))
                    }
                {
                    week.map((day) => (
                        <div key={day} className={styles.dayCell}>
                            {day}
                        </div>
                        ))
                    }
                {
                    week.map((day) => (
                        <div key={day} className={styles.dayCell}>
                            {day}
                        </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default GridCalendar
