import React from "react";
import { useParams } from "react-router-dom";
import data2 from '../data2.json';
import Button from "./Button";

const CourseDetail = () => {
  const { courseName } = useParams();

  return (
    <div className="course-detail bg-secondary text-darkGrey font-mont p-6">
      {data2.map((course, index) => {
        if (course.courseName === decodeURIComponent(courseName)) {
          return (
            <div key={index} className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
           <div className="flex flex-col gap-4">
          <div className="relative">
          <img src={course.courseImage} alt={course.courseName} className="md:h-[60vh] h-[40vh] rounded-md object-cover "/>
          <div className="absolute top-6 left-4">
          <Button type="Price: $40"/>
          </div>
          </div>
              <h1>{course.courseName}</h1>
              <p>{course.description}</p>
           <button className="bg-accent text-darkGrey rounded-md py-3 px-8 max-w-[60%]">Sign Up </button>

           </div>

            <div>
            <h4>Category: {course.category}</h4>
              <h4>Duration: {course.duration}</h4>
              <h4>Students Enrolled: {course.studentsEnrolled}</h4>
              <h2>Syllabus:</h2>
              
              <ul>
                {course.syllabus && course.syllabus.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
              <div className="flex flex-row items-center  gap-6 my-4">
          <div>
          <h3>Instructor: {course.instructorName}</h3>
          <h3>Experience: {course.experience}</h3>
          </div>
            <img src={course.instructorImage} alt={course.instructorName}  className="h-36 w-36 rounded-full object-cover"/>
            </div>
            </div>
            </div>
          );
        }
        return null; 
      })}
    </div>
  );
};

export default CourseDetail;
