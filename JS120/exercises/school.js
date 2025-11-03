function createStudent(name, year) {
  return {
    name, 
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    
    addCourse(course) {
      this.courses.push(course);
    },
    
    listCourses() {
      console.log(this.courses);
    },
    
    addNote(code, note) {
      for (let idx = 0; idx < this.courses.length; idx++) {
        let currCourse = this.courses[idx];
        if (currCourse.code === code) {
          !currCourse.note ? currCourse.note = note : currCourse.note += '; ' + note;
          break;
        } 
      }
      
    },
    
    updateNote(code, note) {
      for (let idx = 0; idx < this.courses.length; idx++) {
        let currCourse = this.courses[idx];
        if (currCourse.code) {
          currCourse.note = note;
          break;
        }
      }
    },
    
    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) console.log(`${course.name}: ${course.note}`);
      });
    }
  };
}





const school = {
  students: [],
  addStudent(name, year) {
    let validYears = ['1st', '2nd', '3rd', '4th', '5th'];
    if (validYears.includes(year)) {
      this.students.push(createStudent(name, year));
    } else {
      console.log('Invalid Year');
    }  
    
  },
  
  enrollStudent(studentName, course) {
    let courseStudent = this.students.filter(student => student.name === studentName)[0];    
    courseStudent.addCourse(course);
  },
  
  addGrade(studentName, courseName, gradeScore) {
    let gradeStudent = this.students.filter(student => student.name === studentName)[0]; 
    let courseToAdd = gradeStudent.courses.filter(course => course.name === courseName)[0];
    //console.log(courseToAdd, gradeScore);
    courseToAdd.grade = gradeScore;
  },
  
  getReportCard(studentName) {
    let reportStudent = this.students.filter(student => student.name === studentName)[0]; 
    reportStudent.courses.forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    })
  },
  
  courseReport(courseName) {
    let allCourses = [];
    this.students.forEach(student => {
      student.courses.forEach(course => {
        allCourses.push(course.name);
      })
    })
    
    if (!allCourses.includes(courseName)) {
      console.log(undefined);
      return;
    }
    
    let gradeTotal = 0;
    let numValidStudents = 0
    
        this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === courseName && course.grade) {
          gradeTotal += course.grade;
          numValidStudents++;
        } 
        
      })
    })
    
  if (gradeTotal === 0) {
    console.log(undefined);
    return;
  }
    
    
    
    console.log(`==${courseName} Grades==`);
    this.students.forEach(student => {
      let namedCourse = student.courses.filter(course => course.name === courseName)[0];      
      if (namedCourse) console.log(`${student.name}: ${namedCourse.grade}`);        
       
    })
    console.log(`---`);
    console.log(`Course Average: ${gradeTotal / numValidStudents}`);
  }
}

school.addStudent('Paul', '3rd');
school.addStudent('Mary', '1st');
school.addStudent('Kim', '2nd');
school.enrollStudent('Paul', { name: 'Math', code: 101, grade: 95, });
school.enrollStudent('Paul', { name: 'Advanced Math', code: 102, grade: 90, });
school.enrollStudent('Paul', { name: 'Physics', code: 202, });
//school.addGrade('Foo', 'Math', 78);
 school.enrollStudent('Mary', { name: 'Math', code: 101, grade: 91, });

 school.enrollStudent('Kim', { name: 'Math', code: 101, grade: 93, });
school.enrollStudent('Kim', { name: 'Advanced Math', code: 102, grade: 90, });
//school.enrollStudent('Goo', { name: 'Physics', code: 101 });
//school.getReportCard('Foo');
//school.courseReport('Advanced Math');
school.courseReport('Physics');