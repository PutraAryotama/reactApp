import React from 'react';
import {BrowserRouter, Route, NavLink, Redirect} from 'react-router-dom';

import CourseContainer from './courses/CourseContainer';

import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = ({match}) => (
  <BrowserRouter>
    <div className="main-content courses">
      <div className="course-header group">
        <h2>Courses</h2>
        <ul className="course-nav">
          <li><NavLink exact to={`${match.url}/html`}>HTML</NavLink></li>
          <li><NavLink exact to={`${match.url}/css`}>CSS</NavLink></li>
          <li><NavLink exact to={`${match.url}/javascript`}>JavaScript</NavLink></li>
        </ul>
      </div>

        {/* Write routes here... */}

      <Route exact path={match.path} render={()=><Redirect to={`${match.path}/html`}/>} />
      <Route path={`${match.path}/html`} render={() => <CourseContainer data={HTMLCourses} />}/>
      <Route path={`${match.url}/css`} render={() => <CourseContainer data={CSSCourses} />}/>
      <Route path={`${match.path}/javascript`} render={() => <CourseContainer data={JSCourses} />}/>
    </div>
  </BrowserRouter>
);

export default Courses;
