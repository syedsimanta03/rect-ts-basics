import { CourseGoal as CGL} from '../App'
import CourseGoal from './CourseGoal'

type CourseGoalListProps = {
  courseGoals: CGL[];
  onDeleteGoal: (id: number) => void
}

const CourseGoalsList = ({
  courseGoals,
  onDeleteGoal,
}: CourseGoalListProps) => {
  return (
    <ul>
      {courseGoals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  )
}

export default CourseGoalsList
