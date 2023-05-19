const gradation = {
  20: "satisfactory",
  55: "good",
  85: "very-good",
  100: "excellent"
};
const users = [
  {
    name: "Jack Smith",
    age: 23,
    img: "JackSmith",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        score: 20
      },
      {
        title: "Java Enterprise",
        score: 100
      }
    ]
  },
  {
    name: "Amal Smith",
    age: 20,
    img: "AmalSmith",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        score: 20
      }
    ]
  },
  {
    name: "Charlie Smith",
    age: 18,
    img: "CharlieSmith",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        score: 75
      },
      {
        title: "Java Enterprise",
        mark: 23
      }
    ]
  },
  {
    name: "Emily Smith",
    age: 30,
    img: "EmilySmith",
    role: "admin",
    courses: [
      {
        title: "Front-end Pro",
        mark: 10,
        lector: "Leo Smith"
      },
      {
        title: "Java Enterprise",
        mark: 50,
        lector: "David Smith"
      },
      {
        title: "QA",
        score: 75,
        lector: "Emilie Smith"
      }
    ]
  },
  {
    name: "Leo Smith",
    age: 253,
    img: "LeoSmith",
    role: "lector",
    courses: [
      {
        title: "Front-end Pro",
        score: 78,
        studentsScore: 79
      },
      {
        title: "Java Enterprise",
        score: 85,
        studentsScore: 85
      }
    ]
  }
];
class User {
  constructor(user) {
    this.name = user.name;
    this.age = user.age;
    this.img = user.img;
    this.role = user.role;
    this.courses = user.courses || [];
  }

  render() {
    const userBlock = document.createElement('div');
    userBlock.classList.add('user');

    const userInfo = document.createElement('div');
    userInfo.classList.add('user__info');

    const userData = document.createElement('div');
    userData.classList.add('user__info--data');

    const img = document.createElement('img');
    img.src = `images/users/${this.img}.png`;
    img.alt = this.name;
    img.height = '50';

    const naming = document.createElement('div');
    naming.classList.add('user__naming');

    const name = document.createElement('p');
    name.innerHTML = `Name: <b>${this.name}</b>`;

    const age = document.createElement('p');
    age.innerHTML = `Age: <b>${this.age}</b>`;

    naming.appendChild(name);
    naming.appendChild(age);

    userData.appendChild(img);
    userData.appendChild(naming);

    const roleInfo = document.createElement('div');
    roleInfo.classList.add('user__info--role', this.role);

    const roleImg = document.createElement('img');
    roleImg.src = `images/roles/${this.role}.png`;
    roleImg.alt = this.role;
    roleImg.height = '25';

    const roleText = document.createElement('p');
    roleText.textContent = this.role;

    roleInfo.appendChild(roleImg);
    roleInfo.appendChild(roleText);

    userInfo.appendChild(userData);
    userInfo.appendChild(roleInfo);

    userBlock.appendChild(userInfo);

    if (this.courses.length > 0) {
      const courses = document.createElement('div');
      courses.classList.add('user__courses');

      for (const course of this.courses) {
        const courseInfo = document.createElement('div');
        courseInfo.classList.add('user__courses--course', this.role);

        const courseTitle = document.createElement('p');
        courseTitle.innerHTML = `Title: <b>${course.title}</b> Score: <span class="${gradation[String(course.score)]}">${course.score !== undefined ? gradation[String(course.score)] : ''}</span>`;

        courseInfo.appendChild(courseTitle);

        if (this.role === 'admin') {
          const adminScore = document.createElement('p');
          adminScore.innerHTML = `Admin's score: <span class="${gradation[String(course.mark)]}">${course.mark !== undefined ? gradation[String(course.mark)] : ''}</span>`;
          courseInfo.appendChild(adminScore);

          const lector = document.createElement('p');
          lector.innerHTML = `Lector: <b>${course.lector}</b>`;
          courseInfo.appendChild(lector);
        } else if (this.role === 'lector') {
          const lectorScore = document.createElement('p');
          lectorScore.innerHTML = `Lector's score: <span class="${gradation[String(course.score)]}">${course.score !== undefined ? gradation[String(course.score)] : ''}</span>`;
          courseInfo.appendChild(lectorScore);

          const studentsScore = document.createElement('p');
          studentsScore.innerHTML = `Average student's score: <span class="${gradation[String(course.studentsScore)]}">${course.studentsScore !== undefined ? gradation[String(course.studentsScore)] : ''}</span>`;
          courseInfo.appendChild(studentsScore);
        } else {
          const userScore = document.createElement('p');
          userScore.innerHTML = `Score: <span class="${gradation[String(course.score)]}">${course.score !== undefined ? gradation[String(course.score)] : ''}</span>`;
          courseInfo.appendChild(userScore);
        }

        courses.appendChild(courseInfo);
      }

      userBlock.appendChild(courses);
    }

    return userBlock;
  }
}



const usersContainer = document.querySelector('.users');

function renderUsers() {
  for (const user of users) {
    const renderedUser = new User(user).render();
    usersContainer.appendChild(renderedUser);
  }
}

renderUsers();
