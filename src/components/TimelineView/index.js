// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const filteredCourses = timelineItemsList.filter(
    eachCourse => eachCourse.categoryId === 'COURSE',
  )

  const filteredProjects = timelineItemsList.filter(
    eachProject => eachProject.categoryId === 'PROJECT',
  )
  return (
    <>
      <div>
        <h1>MY JOURNEY OF CCBP 4.0 </h1>
      </div>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING">
          <div>
            {filteredCourses.map(eachList => (
              <CourseTimelineCard courseList={eachList} />
            ))}
          </div>
          <div>
            {filteredProjects.map(eachList => (
              <ProjectTimelineCard projectList={eachList} />
            ))}
          </div>
        </Chrono>
      </div>
    </>
  )
}

export default TimelineView
