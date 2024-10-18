// objects:
// 속성의 모음으로 이루어진 데이터
// 속성에는 어떤 데이터 타입이라고 할당 가능
// 속서의 구분, 
// 속성의 정의 속성명(키): 속성값

var student = {
    grade: 3,
    school: "University of Wisconsin-Madison"
};

console.log(student);
console.log(typeof(student));

// call for 값
var gradeInfo = student.grade;
console.log(gradeInfo);

// call for 키
var key = Object.keys(student)[0];
console.log(key);

// add data
student.class = 3;
console.log(student);
console.log(student['class']);
console.log(student.class);

// empty
var teacher = new Object();
var teacher = {
    
};
