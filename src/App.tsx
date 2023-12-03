import CourseGoal from './components/CourseGoal'
import Header from './components/Header'
import goalsImg from '../public/assets/goals.jpg'
import { useState } from 'react'

type CourseGoal = {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState <CourseGoal[]> ([])
  
  function handleAddGoal() {
    setCourseGoals(prevGoals => { 
      const updatedGoals = [...prevGoals]
      updatedGoals.unshift({
        id: Math.random(),
        title: 'Learn React',
        description: 'Learn it from the ground up'
      })
      return updatedGoals
    }
    )
  } 

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal
        title='Learn & TS'
      >
        {courseGoals}
        </CourseGoal>
    </main>
  )
}
