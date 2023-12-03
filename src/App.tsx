
import Header from './components/Header'
import goalsImg from '../public/assets/goals.jpg'
import { useState } from 'react'
import CourseGoalsList from './components/CourseGoalsList'
import NewGoal from './components/NewGoal'

export type CourseGoal = {
  id: number
  title: string
  description: string
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([])

  function handleAddGoal(goal: string, summary: string) {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals]
      updatedGoals.unshift({
        id: Math.random(),
        title: goal,
        description: summary
      })
      return updatedGoals
    })
  }

  function handleDeleteGoal(id: number) {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== id)
      return updatedGoals
    })
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalsList
        courseGoals={courseGoals}
        onDeleteGoal={handleDeleteGoal}
      />
    </main>
  )
}
