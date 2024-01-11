// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseList} = props
  const {courseTitle, description, duration, taglist} = courseList
  return (
    <div>
      <div>
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul>
        <li>
          {taglist.map(eachItem => (
            <p>{eachItem.name}</p>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default CourseTimelineCard
