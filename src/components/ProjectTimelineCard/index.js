// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectList} = props

  const {projectTitle, description, imageUrl, duration, projectUrl} =
    projectList
  return (
    <div>
      <img src={imageUrl} alt="" />
      <div>
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>visit</a>
    </div>
  )
}

export default ProjectTimelineCard
