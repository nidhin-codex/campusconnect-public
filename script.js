/* CampusConnect demo frontend. Academic figures and email addresses are fictional. */
'use strict';

const students = {
  TJE25CS084: {
    id: 'TJE25CS084',
    name: 'Sidharth Premachandran',
    password: 'sidharth123',
    email: 'sidharth@example.com',
    department: 'Computer Science and Engineering',
    semester: 'S3',
    batch: '2025-2029',
    attendance: 96,
    attendanceLabel: 'High attendance',
    completedAssignments: 9,
    totalAssignments: 10,
    subjects: [
      { code: 'GAMAT301', name: 'Mathematics for Information Science-3 (MIS-3)', faculty: 'Rekha K Revi', attendance: 97 },
      { code: 'PCCST302', name: 'Theory of Computation (TOC)', faculty: 'Jiji P', attendance: 95 },
      { code: 'PCCST303', name: 'Data Structures and Algorithms (DS)', faculty: 'Wilny Wilson P', attendance: 96 },
      { code: 'PBCST304', name: 'Object Oriented Programming (OOPS)', faculty: 'Sneha Johnson', attendance: 98 },
      { code: 'GAEST305', name: 'Digital Electronics and Logic Design (DELD)', faculty: 'Densy David E', attendance: 94 },
      { code: 'UCHUT347', name: 'Engineering Ethics and Sustainable Development (EESD)', faculty: 'Jeejo K P', attendance: 96 },
      { code: 'PCCSL307', name: 'Data Structures Lab (DS LAB)', faculty: 'Wilny Wilson P', attendance: 97 },
      { code: 'PCCSL308', name: 'Digital Lab (DIG LAB)', faculty: 'Densy David E / Varnya C', attendance: 95 },
      { code: 'MNET319', name: 'Introduction to Power Systems (Remedial / Minor)', faculty: 'Sreni M S', attendance: 90 }
    ],
    results: {
      S1: [
        ['GAMAT101', 'Mathematics', 88, 'A', 'Passed'],
        ['GAPHT121', 'Physics', 85, 'A', 'Passed'],
        ['GMEST103', 'Graphics', 82, 'A', 'Passed'],
        ['GXEST104', 'IEE & IEC', 86, 'A', 'Passed'],
        ['UCEST105', 'Python', 92, 'A+', 'Passed']
      ],
      S2: [
        ['GAMAT201', 'Mathematics', 86, 'A', 'Passed'],
        ['GXCYT122', 'Chemistry', 84, 'A', 'Passed'],
        ['GXEST203', 'FOC', 89, 'A', 'Passed'],
        ['GXEST204', 'Programming in C', 94, 'A+', 'Passed'],
        ['PCXXT205', 'Program Core-1', 87, 'A', 'Passed'],
        ['UCEST206', 'EPR & IPR', 90, 'A+', 'Passed']
      ]
    }
  },

  TJE25CS091: {
    id: 'TJE25CS091',
    name: 'Vishnu Prakash M S',
    password: 'vishnu123',
    email: 'vishnu@example.com',
    department: 'Computer Science and Engineering',
    semester: 'S3',
    batch: '2025-2029',
    attendance: 68,
    attendanceLabel: 'Needs improvement',
    completedAssignments: 4,
    totalAssignments: 10,
    subjects: [
      { code: 'GAMAT301', name: 'Mathematics for Information Science-3 (MIS-3)', faculty: 'Rekha K Revi', attendance: 70 },
      { code: 'PCCST302', name: 'Theory of Computation (TOC)', faculty: 'Jiji P', attendance: 65 },
      { code: 'PCCST303', name: 'Data Structures and Algorithms (DS)', faculty: 'Wilny Wilson P', attendance: 68 },
      { code: 'PBCST304', name: 'Object Oriented Programming (OOPS)', faculty: 'Sneha Johnson', attendance: 72 },
      { code: 'GAEST305', name: 'Digital Electronics and Logic Design (DELD)', faculty: 'Densy David E', attendance: 63 },
      { code: 'UCHUT347', name: 'Engineering Ethics and Sustainable Development (EESD)', faculty: 'Jeejo K P', attendance: 70 },
      { code: 'PCCSL307', name: 'Data Structures Lab (DS LAB)', faculty: 'Wilny Wilson P', attendance: 71 },
      { code: 'PCCSL308', name: 'Digital Lab (DIG LAB)', faculty: 'Densy David E / Varnya C', attendance: 66 },
      { code: 'MNET319', name: 'Introduction to Power Systems (Remedial / Minor)', faculty: 'Sreni M S', attendance: 60 }
    ],
    results: {
      S1: [
        ['GAMAT101', 'Mathematics', 42, 'P', 'Passed'],
        ['GAPHT121', 'Physics', 35, 'P', 'Passed'],
        ['GMEST103', 'Graphics', 28, 'F', 'Supply'],
        ['GXEST104', 'IEE & IEC', 31, 'P', 'Passed'],
        ['UCEST105', 'Python', 24, 'F', 'Supply']
      ],
      S2: [
        ['GAMAT201', 'Mathematics', 32, 'P', 'Passed'],
        ['GXCYT122', 'Chemistry', 27, 'F', 'Supply'],
        ['GXEST203', 'FOC', 38, 'P', 'Passed'],
        ['GXEST204', 'Programming in C', 25, 'F', 'Supply'],
        ['PCXXT205', 'Program Core-1', 34, 'P', 'Passed'],
        ['UCEST206', 'EPR & IPR', 41, 'P', 'Passed']
      ]
    }
  },

  TJE25CS079: {
    id: 'TJE25CS079',
    name: 'Shahid Abdul Haq C M',
    password: 'shahid123',
    email: 'shahid@example.com',
    department: 'Computer Science and Engineering',
    semester: 'S3',
    batch: '2025-2029',
    attendance: 72,
    attendanceLabel: 'Low attendance',
    completedAssignments: 6,
    totalAssignments: 10,
    subjects: [
      { code: 'GAMAT301', name: 'Mathematics for Information Science-3 (MIS-3)', faculty: 'Rekha K Revi', attendance: 74 },
      { code: 'PCCST302', name: 'Theory of Computation (TOC)', faculty: 'Jiji P', attendance: 70 },
      { code: 'PCCST303', name: 'Data Structures and Algorithms (DS)', faculty: 'Wilny Wilson P', attendance: 73 },
      { code: 'PBCST304', name: 'Object Oriented Programming (OOPS)', faculty: 'Sneha Johnson', attendance: 76 },
      { code: 'GAEST305', name: 'Digital Electronics and Logic Design (DELD)', faculty: 'Densy David E', attendance: 68 },
      { code: 'UCHUT347', name: 'Engineering Ethics and Sustainable Development (EESD)', faculty: 'Jeejo K P', attendance: 75 },
      { code: 'PCCSL307', name: 'Data Structures Lab (DS LAB)', faculty: 'Wilny Wilson P', attendance: 78 },
      { code: 'PCCSL308', name: 'Digital Lab (DIG LAB)', faculty: 'Densy David E / Varnya C', attendance: 70 },
      { code: 'MNET319', name: 'Introduction to Power Systems (Remedial / Minor)', faculty: 'Sreni M S', attendance: 65 }
    ],
    results: {
      S1: [
        ['GAMAT101', 'Mathematics', 62, 'B', 'Passed'],
        ['GAPHT121', 'Physics', 58, 'B', 'Passed'],
        ['GMEST103', 'Graphics', 54, 'C', 'Passed'],
        ['GXEST104', 'IEE & IEC', 60, 'B', 'Passed'],
        ['UCEST105', 'Python', 64, 'B', 'Passed']
      ],
      S2: [
        ['GAMAT201', 'Mathematics', 56, 'C', 'Passed'],
        ['GXCYT122', 'Chemistry', 52, 'C', 'Passed'],
        ['GXEST203', 'FOC', 61, 'B', 'Passed'],
        ['GXEST204', 'Programming in C', 59, 'B', 'Passed'],
        ['PCXXT205', 'Program Core-1', 55, 'C', 'Passed'],
        ['UCEST206', 'EPR & IPR', 63, 'B', 'Passed']
      ]
    }
  }
};

const assignments = [
  { title: 'Java OOP Mini Project', subject: 'Object Oriented Programming', due: 'October 16, 2026', status: 'Pending' },
  { title: 'Data Structures Practice', subject: 'Data Structures and Algorithms', due: 'October 18, 2026', status: 'Pending' },
  { title: 'Database Concepts Worksheet', subject: 'Academic Practice', due: 'October 20, 2026', status: 'Completed' },
  { title: 'Theory Revision Questions', subject: 'Theory of Computation', due: 'October 22, 2026', status: 'Pending' }
];

const notices = [
  { day: '15', month: 'OCT', title: 'Project Expo', description: 'The student project expo is scheduled for 15 October 2026.', tag: 'Important' },
  { day: '16', month: 'OCT', title: 'Election Day', description: 'Election-related activities are scheduled for 16 October 2026.', tag: 'Announcement' },
  { day: '17', month: 'OCT', title: 'Sports Day', description: 'Sports Day is scheduled for 17 October 2026.', tag: 'Event' },
  { day: '30', month: 'OCT', title: 'Classes Close', description: 'Classes close on 30 October 2026.', tag: 'Academic' }
];

const timetable = [
  ['Monday', '09:00–09:50', 'Mathematics for Information Science-3', 'Rekha K Revi'],
  ['Monday', '09:50–10:40', 'Data Structures and Algorithms', 'Wilny Wilson P'],
  ['Monday', '10:50–11:40', 'Digital Electronics and Logic Design', 'Densy David E'],
  ['Monday', '11:40–12:30', 'Object Oriented Programming', 'Sneha Johnson'],
  ['Monday', '01:15–02:05', 'Theory of Computation', 'Jiji P'],
  ['Monday', '02:05–02:55', 'Data Structures and Algorithms', 'Wilny Wilson P'],
  ['Monday', '03:05–04:00', 'Engineering Ethics and Sustainable Development', 'Jeejo K P'],
  ['Tuesday', '09:00–09:50', 'Theory of Computation', 'Jiji P'],
  ['Tuesday', '09:50–10:40', 'Mathematics for Information Science-3', 'Rekha K Revi'],
  ['Tuesday', '10:50–11:40', 'Object Oriented Programming', 'Sneha Johnson'],
  ['Tuesday', '01:15–02:05', 'Data Structures and Algorithms', 'Wilny Wilson P'],
  ['Tuesday', '02:05–02:55', 'Engineering Ethics and Sustainable Development', 'Jeejo K P'],
  ['Tuesday', '03:05–04:00', 'Digital Electronics and Logic Design', 'Densy David E'],
  ['Wednesday', '09:00–09:50', 'Data Structures and Algorithms', 'Wilny Wilson P'],
  ['Wednesday', '10:50–11:40', 'Digital Electronics and Logic Design', 'Densy David E'],
  ['Wednesday', '11:40–12:30', 'Mathematics for Information Science-3', 'Rekha K Revi'],
  ['Wednesday', '01:15–02:55', 'Object Oriented Programming', 'Sneha Johnson'],
  ['Wednesday', '03:05–04:00', 'Library / MIS-3', 'As scheduled'],
  ['Thursday', '09:00–09:50', 'Digital Electronics and Logic Design', 'Densy David E'],
  ['Thursday', '09:50–10:40', 'Mathematics for Information Science-3', 'Rekha K Revi'],
  ['Thursday', '10:50–11:40', 'Theory of Computation', 'Jiji P'],
  ['Thursday', '01:15–04:00', 'Data Structures Lab / Digital Lab', 'Wilny Wilson P / Densy David E / Varnya C'],
  ['Friday', '09:00–09:50', 'Remedial / Minor', 'Sreni M S'],
  ['Friday', '09:50–12:30', 'Data Structures Lab / Digital Lab', 'Wilny Wilson P / Densy David E / Varnya C'],
  ['Friday', '01:15–02:05', 'Digital Electronics and Logic Design', 'Densy David E'],
  ['Friday', '02:05–04:00', 'Theory of Computation', 'Jiji P']
].map(([day, time, subject, faculty]) => ({ day, time, subject, faculty }));

let currentStudent = null;

const API_BASE_URL = 'http://localhost:8080';
let databaseResults = { S1: null, S2: null };

const loginPage = document.getElementById('loginPage');
const dashboardPage = document.getElementById('dashboardPage');
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
const pageContent = document.getElementById('pageContent');
const pageTitle = document.getElementById('pageTitle');
const headerName = document.getElementById('headerName');
const headerId = document.getElementById('headerId');
const headerAvatar = document.getElementById('headerAvatar');

function esc(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function showLogin() {
  dashboardPage.classList.add('hidden');
  loginPage.classList.remove('hidden');
  loginForm.reset();
  loginMessage.textContent = '';
  currentStudent = null;
}

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const id = document.getElementById('studentId').value.trim().toUpperCase();
  const password = document.getElementById('password').value;
  const student = students[id];

  if (!student || student.password !== password) {
    loginMessage.textContent = 'Invalid Student ID or password. Please try again.';
    return;
  }

  currentStudent = student;
  databaseResults = { S1: null, S2: null };

  loginPage.classList.add('hidden');
  dashboardPage.classList.remove('hidden');

  headerName.textContent = student.name;
  headerId.textContent = student.id;
  headerAvatar.textContent = student.name.charAt(0).toUpperCase();

  openPage('dashboard');
});

document.getElementById('logoutButton').addEventListener('click', showLogin);

document.querySelectorAll('.nav-item').forEach(button => {
  button.addEventListener('click', function () {
    openPage(this.dataset.page);
  });
});

function openPage(page) {
  if (!currentStudent) {
    showLogin();
    return;
  }

  document.querySelectorAll('.nav-item').forEach(button => {
    button.classList.toggle('active', button.dataset.page === page);
  });

  const titles = {
    dashboard: 'Dashboard',
    profile: 'My Profile',
    subjects: 'My Subjects',
    attendance: 'Attendance',
    results: 'Academic Results',
    timetable: 'Timetable',
    assignments: 'Assignments',
    notices: 'Notices'
  };

  pageTitle.textContent = titles[page] || 'Dashboard';

  const renderers = {
    dashboard: renderDashboard,
    profile: renderProfile,
    subjects: renderSubjects,
    attendance: renderAttendance,
    results: renderResults,
    timetable: renderTimetable,
    assignments: renderAssignments,
    notices: renderNotices
  };

  pageContent.innerHTML = (renderers[page] || renderDashboard)();

  if (page === 'dashboard') {
    drawPerformanceChart();
  }

  if (page === 'results') {
    loadDatabaseResults();
  }
}

function renderDashboard() {
  const allResults = [
    ...currentStudent.results.S1,
    ...currentStudent.results.S2
  ];

  const average = Math.round(
    allResults.reduce((sum, row) => sum + row[2], 0) / allResults.length
  );

  const supplyCount = allResults.filter(row => row[4] !== 'Passed').length;

  return `
    <div class="welcome-banner">
      <h3>Welcome back, ${esc(currentStudent.name.split(' ')[0])}! 👋</h3>
      <p>Your academic overview for S3. Keep track of attendance, subjects, and tasks.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Attendance</div>
        <div class="stat-value">${currentStudent.attendance}%</div>
        <div class="stat-note">${esc(currentStudent.attendanceLabel)}</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">S1/S2 Marks Average</div>
        <div class="stat-value">${average}%</div>
        <div class="stat-note">Calculated from demonstration marks</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Current S3 Subjects</div>
        <div class="stat-value">${currentStudent.subjects.length}</div>
        <div class="stat-note">Subjects and labs</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Supply Subjects</div>
        <div class="stat-value">${supplyCount}</div>
        <div class="stat-note">Across S1 and S2</div>
      </div>
    </div>

    <div class="content-grid">
      <section class="panel">
        <div class="panel-header">
          <h3>Academic Performance</h3>
        </div>
        <canvas id="performanceChart" style="width:100%;height:230px"></canvas>
        <p class="stat-note">Sample marks for S1 and S2 only. No S3 exam results are displayed.</p>
      </section>

      <section class="panel">
        <div class="panel-header">
          <h3>S3 Subject Attendance</h3>
          <span>By subject</span>
        </div>

        ${currentStudent.subjects.map(subject => `
          <div class="progress-item">
            <div class="progress-info">
              <strong>${esc(subject.name)}</strong>
              <span>${subject.attendance}%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill ${
                subject.attendance >= 90 ? 'green' :
                subject.attendance < 75 ? 'orange' : ''
              }" style="width:${subject.attendance}%"></div>
            </div>
          </div>
        `).join('')}
      </section>
    </div>

    <div class="content-grid">
      <section class="panel">
        <div class="panel-header">
          <h3>Upcoming Assignments</h3>
          <button class="action-button" data-go="assignments">View All</button>
        </div>

        ${assignments.slice(0, 3).map(item => `
          <div class="task-item">
            <div class="item-icon">▤</div>
            <div class="item-details">
              <strong>${esc(item.title)}</strong>
              <p>${esc(item.subject)}</p>
              <p>Due ${esc(item.due)}</p>
            </div>
            <span class="badge ${item.status === 'Completed' ? 'green' : 'orange'}">
              ${esc(item.status)}
            </span>
          </div>
        `).join('')}
      </section>

      <section class="panel">
        <div class="panel-header">
          <h3>Latest Notices</h3>
          <button class="action-button" data-go="notices">View All</button>
        </div>
        ${notices.slice(0, 3).map(renderNoticeItem).join('')}
      </section>
    </div>

    <p class="stat-note">
      Demonstration only: attendance, marks, grades, and email addresses are fictional.
      They are not official college records.
    </p>
  `;
}

function drawPerformanceChart() {
  const canvas = document.getElementById('performanceChart');
  if (!canvas) return;

  const context = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const padding = { top: 15, right: 15, bottom: 45, left: 35 };

  context.clearRect(0, 0, width, height);

  const semesters = [
    { label: 'S1', rows: currentStudent.results.S1 },
    { label: 'S2', rows: currentStudent.results.S2 }
  ];

  const averages = semesters.map(semester =>
    semester.rows.reduce((sum, row) => sum + row[2], 0) / semester.rows.length
  );

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  context.font = '12px Segoe UI';
  context.textAlign = 'right';

  for (let value = 0; value <= 100; value += 25) {
    const y = padding.top + chartHeight * (1 - value / 100);

    context.strokeStyle = '#edf0f7';
    context.beginPath();
    context.moveTo(padding.left, y);
    context.lineTo(width - padding.right, y);
    context.stroke();

    context.fillStyle = '#8490a8';
    context.fillText(String(value), padding.left - 8, y + 4);
  }

  const gap = chartWidth / averages.length;
  const barWidth = Math.min(70, gap * 0.45);

  averages.forEach((mark, index) => {
    const barHeight = chartHeight * mark / 100;
    const x = padding.left + index * gap + (gap - barWidth) / 2;
    const y = padding.top + chartHeight - barHeight;

    context.fillStyle = '#477df5';
    context.beginPath();

    if (typeof context.roundRect === 'function') {
      context.roundRect(x, y, barWidth, barHeight, 5);
    } else {
      context.rect(x, y, barWidth, barHeight);
    }

    context.fill();
    context.fillStyle = '#536079';
    context.textAlign = 'center';
    context.fillText(`${Math.round(mark)}%`, x + barWidth / 2, y - 7);
    context.fillText(semesters[index].label, x + barWidth / 2, height - 20);
  });
}

function renderProfile() {
  const student = currentStudent;

  return `
    <div class="profile-layout">
      <section class="panel">
        <div class="profile-hero">
          <div class="profile-avatar">${esc(student.name.charAt(0))}</div>
          <div>
            <h3>${esc(student.name)}</h3>
            <p>${esc(student.id)}</p>
            <p>${esc(student.department)}</p>
          </div>
        </div>

        <div class="panel-header">
          <h3>Personal & Academic Details</h3>
        </div>

        <div class="details-grid">
          ${detail('Student ID', student.id)}
          ${detail('Current Semester', student.semester)}
          ${detail('Email', student.email)}
          ${detail('Batch', student.batch)}
          ${detail('Department', student.department)}
          ${detail('Attendance', student.attendance + '%')}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <h3>Academic Summary</h3>
        </div>

        <div class="stat-card">
          <div class="stat-label">Current Semester</div>
          <div class="stat-value">S3</div>
          <div class="stat-note">Results are displayed for S1 and S2 only.</div>
        </div>

        <div class="progress-item" style="margin-top:25px">
          <div class="progress-info">
            <strong>Attendance</strong>
            <span>${student.attendance}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill ${
              student.attendance < 75 ? 'orange' : 'green'
            }" style="width:${student.attendance}%"></div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function detail(label, value) {
  return `
    <div>
      <div class="detail-label">${esc(label)}</div>
      <div class="detail-value">${esc(value)}</div>
    </div>
  `;
}

function renderSubjects() {
  return `
    <section class="panel">
      <div class="panel-header">
        <h3>Current S3 Subjects</h3>
        <span>${currentStudent.subjects.length} subjects / labs</span>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Subject Code</th>
              <th>Subject Name</th>
              <th>Faculty</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            ${currentStudent.subjects.map(subject => `
              <tr>
                <td>${esc(subject.code)}</td>
                <td><strong>${esc(subject.name)}</strong></td>
                <td>${esc(subject.faculty)}</td>
                <td>${subject.attendance}%</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <p class="stat-note" style="margin-top:18px">
        Subject and faculty details are based on the supplied S3 CSE B timetable.
        Attendance values are fictional demonstration data.
      </p>
    </section>
  `;
}

function renderAttendance() {
  return `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Overall Attendance</div>
        <div class="stat-value">${currentStudent.attendance}%</div>
        <div class="stat-note">${esc(currentStudent.attendanceLabel)}</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">S3 Subjects / Labs</div>
        <div class="stat-value">${currentStudent.subjects.length}</div>
        <div class="stat-note">Current semester</div>
      </div>
    </div>

    <section class="panel">
      <div class="panel-header">
        <h3>Subject-wise Attendance</h3>
      </div>

      ${currentStudent.subjects.map(subject => `
        <div class="progress-item">
          <div class="progress-info">
            <strong>${esc(subject.name)}</strong>
            <span>${subject.attendance}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill ${
              subject.attendance >= 90 ? 'green' :
              subject.attendance < 75 ? 'orange' : ''
            }" style="width:${subject.attendance}%"></div>
          </div>
        </div>
      `).join('')}

      <p class="stat-note">
        Attendance figures are fictional demonstration values, not official records.
      </p>
    </section>
  `;
}

/* RESULTS PAGE */

function renderResults() {
  return `
    <div class="welcome-banner">
      <h3>Examination Results</h3>
      <p>
        Only S1 and S2 results are displayed. S3 is your current semester,
        so no S3 examination results appear here.
      </p>
      <p id="resultsConnectionStatus" class="stat-note">
        Connecting to the CampusConnect database...
      </p>
    </div>

    ${['S1', 'S2'].map(semester =>
      resultSemesterPanel(
        semester,
        databaseResults[semester] || currentStudent.results[semester],
        !databaseResults[semester]
      )
    ).join('')}
  `;
}

function resultSemesterPanel(semester, rows, isDemo) {
  const normalized = rows.map(row => {
    if (Array.isArray(row)) {
      return {
        code: row[0],
        name: row[1],
        marks: row[2],
        grade: row[3],
        status: row[4]
      };
    }

    return {
      code: row.subject_code || row.subjectCode || row.code || '',
      name: row.subject_name || row.subjectName || row.name || '',
      marks: row.marks,
      grade: row.grade || '-',
      status: row.result_status || row.resultStatus || row.status || 'Unknown'
    };
  });

  const passed = normalized.filter(
    row => String(row.status).toLowerCase() === 'passed'
  ).length;

  return `
    <section class="panel" style="margin-bottom:22px">
      <div class="panel-header">
        <h3>${semester} Results</h3>
        <span>${passed} passed · ${normalized.length - passed} supply</span>
      </div>

      <div style="display:flex;justify-content:flex-end;margin:0 0 14px">
        <button
          class="action-button"
          data-print-semester="${semester}"
          ${normalized.length ? '' : 'disabled'}>
          🖨 Print ${semester} Results
        </button>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Subject</th>
              <th>Marks / 100</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${normalized.map(row => `
              <tr>
                <td>${esc(row.code)}</td>
                <td><strong>${esc(row.name)}</strong></td>
                <td>${esc(row.marks)}/100</td>
                <td><span class="badge blue">${esc(row.grade)}</span></td>
                <td>
                  <span class="badge ${
                    String(row.status).toLowerCase() === 'passed' ? 'green' : 'orange'
                  }">${esc(row.status)}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      ${isDemo
        ? '<p class="stat-note">Showing local demonstration data until the database API responds.</p>'
        : ''}
    </section>
  `;
}

async function loadDatabaseResults() {
  const statusMessage = document.getElementById('resultsConnectionStatus');

  if (statusMessage) {
    statusMessage.textContent = 'Loading S1 and S2 results from MySQL...';
  }

  try {
    const semesters = await Promise.all(
      ['S1', 'S2'].map(async semester => {
        const url =
          `${API_BASE_URL}/api/results?studentId=${encodeURIComponent(currentStudent.id)}` +
          `&semester=${encodeURIComponent(semester)}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`API returned HTTP ${response.status}`);
        }

        const data = await response.json();

        const rows = Array.isArray(data)
          ? data
          : (data.results || data.data || data.records);

        if (!Array.isArray(rows)) {
          throw new Error('Unexpected result format from API');
        }

        return [semester, rows];
      })
    );

    semesters.forEach(([semester, rows]) => {
      databaseResults[semester] = rows;
    });

    if (!document.querySelector('.nav-item.active[data-page="results"]')) {
      return;
    }

    pageContent.innerHTML = renderResults();

    const note = document.getElementById('resultsConnectionStatus');

    if (note) {
      note.textContent =
        'Connected to MySQL. These results were loaded from the database.';
    }
  } catch (error) {
    console.error('Could not load results from CampusConnect API:', error);

    if (!document.querySelector('.nav-item.active[data-page="results"]')) {
      return;
    }

    pageContent.innerHTML = renderResults();

    const note = document.getElementById('resultsConnectionStatus');

    if (note) {
      note.textContent =
        'Database connection unavailable. Showing demo results. Make sure CampusConnectServer.java is running.';
    }
  }
}

/* PRINT ONE SEMESTER ONLY */

function printSemesterResults(semester) {
  const source = databaseResults[semester] || currentStudent.results[semester];

  if (!source || source.length === 0) {
    alert(`No ${semester} results are available to print.`);
    return;
  }

  const rows = source.map(row => {
    if (Array.isArray(row)) {
      return {
        code: row[0],
        name: row[1],
        marks: row[2],
        grade: row[3],
        status: row[4]
      };
    }

    return {
      code: row.subject_code || row.subjectCode || row.code || '',
      name: row.subject_name || row.subjectName || row.name || '',
      marks: row.marks,
      grade: row.grade || '-',
      status: row.result_status || row.resultStatus || row.status || 'Unknown'
    };
  });

  const printWindow = window.open('', '_blank', 'width=900,height=700');

  if (!printWindow) {
    alert('Please allow pop-ups for this page to print the results.');
    return;
  }

  const tableRows = rows.map(row => `
    <tr>
      <td>${esc(row.code)}</td>
      <td>${esc(row.name)}</td>
      <td>${esc(row.marks)} / 100</td>
      <td>${esc(row.grade)}</td>
      <td>${esc(row.status)}</td>
    </tr>
  `).join('');

  const passed = rows.filter(
    row => String(row.status).toLowerCase() === 'passed'
  ).length;

  const supplies = rows.length - passed;

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${semester} Results - ${esc(currentStudent.name)}</title>

      <style>
        body {
          font-family: Arial, sans-serif;
          color: #172033;
          margin: 35px;
        }

        header {
          text-align: center;
          border-bottom: 2px solid #315fbd;
          padding-bottom: 16px;
          margin-bottom: 24px;
        }

        h1 {
          margin: 0 0 6px;
          font-size: 24px;
          color: #244a91;
        }

        h2 {
          margin: 24px 0 12px;
        }

        p {
          margin: 6px 0;
        }

        .student {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin: 20px 0;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 14px;
        }

        th, td {
          border: 1px solid #cbd3e1;
          padding: 10px;
          text-align: left;
          font-size: 12px;
        }

        th {
          background: #edf3ff;
          color: #244a91;
        }

        footer {
          margin-top: 35px;
          font-size: 11px;
          color: #596579;
          text-align: center;
        }

        @media print {
          body {
            margin: 15mm;
          }
        }
      </style>
    </head>

    <body>
      <header>
        <h1>CampusConnect</h1>
        <p>Student Academic Portal</p>
        <p>Thejus Engineering College, Vellarakad</p>
      </header>

      <h2>${semester} Examination Results</h2>

      <div class="student">
        <p><strong>Student Name:</strong> ${esc(currentStudent.name)}</p>
        <p><strong>Student ID:</strong> ${esc(currentStudent.id)}</p>
        <p><strong>Department:</strong> ${esc(currentStudent.department)}</p>
        <p><strong>Batch:</strong> ${esc(currentStudent.batch)}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>

      <p style="margin-top:18px">
        <strong>Subjects:</strong> ${rows.length}
        &nbsp;&nbsp;
        <strong>Passed:</strong> ${passed}
        &nbsp;&nbsp;
        <strong>Supply:</strong> ${supplies}
      </p>

      <footer>
        CampusConnect academic demonstration. Verify against official college records.
      </footer>

      <script>
        window.onload = function () {
          window.focus();
          window.print();
        };

        window.onafterprint = function () {
          window.close();
        };
      <\/script>
    </body>
    </html>
  `);

  printWindow.document.close();
}

function renderTimetable() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return `
    <section class="panel">
      <div class="panel-header">
        <h3>S3 CSE B Timetable</h3>
        <span>Academic year 2026–2027</span>
      </div>

      ${days.map(day => `
        <div style="margin-bottom:22px">
          <h4 style="margin:14px 0;color:#244a91">${day}</h4>

          ${timetable.filter(item => item.day === day).map(item => `
            <div class="schedule-item">
              <div class="schedule-time">${esc(item.time)}</div>
              <div class="item-icon">•</div>
              <div class="item-details">
                <strong>${esc(item.subject)}</strong>
                <p>${esc(item.faculty)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `).join('')}

      <p class="stat-note">
        Transcribed from the supplied timetable image. Verify any period or lab detail against the original notice.
      </p>
    </section>
  `;
}

function renderAssignments() {
  return `
    <section class="panel">
      <div class="panel-header">
        <h3>Assignments & Tasks</h3>
        <span>${assignments.length} sample tasks</span>
      </div>

      ${assignments.map((assignment, index) => `
        <div class="task-item">
          <div class="item-icon">✓</div>

          <div class="item-details">
            <strong>${esc(assignment.title)}</strong>
            <p>${esc(assignment.subject)}</p>
            <p>Due ${esc(assignment.due)}</p>
          </div>

          <span class="badge ${
            assignment.status === 'Completed' ? 'green' : 'orange'
          }">${esc(assignment.status)}</span>

          ${assignment.status !== 'Completed'
            ? `<button class="action-button" data-complete="${index}">Complete</button>`
            : ''}
        </div>
      `).join('')}

      <p class="stat-note">Sample assignments for demonstration only.</p>
    </section>
  `;
}

function renderNoticeItem(notice) {
  return `
    <div class="notice-item">
      <div class="notice-date">
        ${esc(notice.day)}
        <span>${esc(notice.month)}</span>
      </div>

      <div class="item-details">
        <strong>${esc(notice.title)}</strong>
        <p>${esc(notice.description)}</p>
      </div>

      <span class="badge blue">${esc(notice.tag)}</span>
    </div>
  `;
}

function renderNotices() {
  return `
    <section class="panel">
      <div class="panel-header">
        <h3>Announcements & Notices</h3>
        <span>${notices.length} notices</span>
      </div>

      ${notices.map(renderNoticeItem).join('')}

      <p class="stat-note">
        Event titles and dates are displayed as supplied.
      </p>
    </section>
  `;
}

/* BUTTON HANDLERS */

pageContent.addEventListener('click', function (event) {
  const printButton = event.target.closest('[data-print-semester]');

  if (printButton) {
    printSemesterResults(printButton.dataset.printSemester);
    return;
  }

  const navigationButton = event.target.closest('[data-go]');

  if (navigationButton) {
    openPage(navigationButton.dataset.go);
    return;
  }

  const completeButton = event.target.closest('[data-complete]');

  if (completeButton) {
    const index = Number(completeButton.dataset.complete);

    if (assignments[index]) {
      assignments[index].status = 'Completed';

      if (currentStudent.completedAssignments < currentStudent.totalAssignments) {
        currentStudent.completedAssignments++;
      }

      openPage('assignments');
    }
  }
});

showLogin();