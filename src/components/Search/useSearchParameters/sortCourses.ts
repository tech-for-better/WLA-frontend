function nodeToDateInt(node) {
  try {
    return new Date(node.node.start_date).getTime();
  } catch {
    return 0;
  }
}

export default function sortCourses(courses: CourseCatalogue, parameter: string) {
  if (parameter === `Start Date`) {
    return courses.sort((courseA: CourseEntry, courseB: CourseEntry) => {
      const timeA: number = nodeToDateInt(courseA);
      const timeB: number = nodeToDateInt(courseB);
      return timeA - timeB;
    });
  }
  if (parameter === `Price`) {
    return courses.sort((courseA: CourseEntry, courseB: CourseEntry) => {
      return courseA.node.total_price - courseB.node.total_price;
    });
  }
  return courses;
}
