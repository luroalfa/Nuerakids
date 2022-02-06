//Libs
import React from "react";
import { connect } from "react-redux";
//Components
import { WrapperView, Wrapper, CourseCard } from "../../Components";
//Utils
import * as actions from "./actions";

function getRibbon(text) {
  return (
    <div className="wrap">
      <span className="ribbon6">{text}</span>
    </div>
  );
}

function Courses({ courses }) {
  return (
    <WrapperView animation>
      <Wrapper width="100%">
        {courses.map((course, idx) => {
          const { ribbon_text } = course;

          return typeof ribbon_text === "string" && ribbon_text.length > 0 ? (
            <div className="ribbon" key={idx}>
              {getRibbon(ribbon_text)}
              <CourseCard course={course} />
            </div>
          ) : (
            <CourseCard key={idx} course={course} />
          );
        })}
      </Wrapper>
    </WrapperView>
  );
}

export default connect(
  (state) => ({
    courses: state.courses.courses,
  }),
  actions
)(Courses);
