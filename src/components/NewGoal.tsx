import { type FormEvent } from 'react'
import { useRef } from 'react'

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void
}

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goal = useRef() as React.MutableRefObject<HTMLInputElement>
  const summary = useRef() as React.MutableRefObject<HTMLInputElement>

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const enteredGoal = goal.current.value
    const enteredSummary = summary.current.value

    if (!enteredGoal || !enteredSummary) {
      return
    }

    event.currentTarget.reset()

    onAddGoal(enteredGoal, enteredSummary)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input type='text' id='goal' ref={goal} />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input type='text' id='summary' ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}

export default NewGoal