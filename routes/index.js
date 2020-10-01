var express = require('express');
var router = express.Router();
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* TimeTable Endpoint */
router.get('/loadTimeTable', async function (req, res, next) {
  let timetable = await models.TimeTable.findAll({ include: [models.Course, models.Ssession, models.Staff, models.Day, models.Room] });
  res.send(timetable);
});

/* TimeTable Endpoint */


router.get('/loadAssociation', async function (req, res, next) {
  let association = await models.Allocation.findAll();
  res.send(association);
});
router.post('/addAssociation', async function (req, res, next) {
  let rawdata = req.body;
  console.log(rawdata);
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.classId) {
      result = await models.Allocation.create(data);
    }

    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});
router.get('/loadLectureClasses', async function (req, res, next) {
  let lectureclass = await models.LectureClass.findAll();
  res.send(lectureclass);
});
router.post('/addLectureClass', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.classId) {
      result = await models.LectureClass.update(data,{where: { classId: data.classId}});
    }else{
      result = await models.LectureClass.create(data);
    }

    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});
router.get('/rooms', async function (req, res, next) {
  let duration = await models.Room.findAll({ include: [models.Faculty, models.RoomType] });
  res.send(duration);
});
router.post('/addDay', async function (req, res, next) {
  let rawdata = req.body;
  console.log(rawdata);
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.dayId) {
      result = await models.Day.create(data);
    }

    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});
router.get('/allWeekDays', async function (req, res, next) {
  let day = await models.Day.findAll();
  res.send(day);
});

router.post('/addSsession', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  console.log(rawdata);
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.ssessionId) {
      result = await models.Ssession.update(data, { where: { ssessionId: rawdata.ssessionId } });
    } else {
      result = await models.Ssession.create(data);
    }
    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});
router.get('/allSsession', async function (req, res, next) {
  let sess = await models.Ssession.findAll();
  res.send(sess);
});
router.post('/addRoom', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.roomId) {
      result = await models.Room.update(data,{ where: { roomId: data.roomId}});
    }else {
      result = await models.Room.create(data);
    }

    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});
router.get('/roomtypes', async function (req, res, next) {
  let roomtype = await models.RoomType.findAll();
  res.send(roomtype);
});
router.post('/addRoomType', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.roomTypeId) {
      result = await models.RoomType.update(data,{  where: { roomTypeId: data.roomTypeId }});
    } else {
      result = await models.RoomType.create(data);
    }
    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

router.get('/loadCourseTypes', async function (req, res, next) {
  let courseType = await models.CourseType.findAll();
  res.send(courseType);
});
router.post('/coursetype', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.courseTypeId) {
      result = await models.CourseType.update(data, { where: { courseTypeId: data.courseTypeId } });
    } else {
      result = await models.CourseType.create(data);
    }
    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

router.get('/courseunits', async function (req, res, next) {
  let course = await models.Course.findAll({ include: [models.Program] });
  res.send(course);
});
router.post('/addCourseUnit', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.courseId) {
      result = await models.Course.update(data, { where: { courseId: data.courseId } });
    } else {
      result = await models.Course.create(data);
    }
    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

router.get('/programs/:programSearch', async function (req, res, next) {
  let searchItem = req.params.programSearch;
  let program = await models.Program.findAll({ where: { programName: { [Op.like]: `%${searchItem}%` } }, include: [models.Department] });
  res.send(program);
});

router.get('/programs', async function (req, res, next) {

  let program = await models.Program.findAll({ include: [models.Department] });
  res.send(program);
});

router.post('/addProgram', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.programId) {
      result = await models.Program.update(data, { where: { programId: data.programId } });
    } else {
      result = await models.Program.create(data);
    }
    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

router.get('/staff', async function (req, res, next) {
  let staff = await models.Staff.findAll({ include: [models.Department] });
  res.send(staff);
});
router.post('/addStaff', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.staffId) {
      result = await models.Staff.update(data, { where: { staffId: data.staffId } });
    } else {
      result = await models.Staff.create(data);
    }
    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

router.get('/departments', async function (req, res, next) {
  let faculty = await models.Department.findAll({ include: [models.Faculty] });
  res.send(faculty);
});

router.post('/addDepartment', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.departmentId) {
      result = await models.Department.update(data, { where: { departmentId: data.departmentId } });
    } else {
      result = await models.Department.create(data);
    }
    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

router.get('/faculties', async function (req, res, next) {
  let faculty = await models.Faculty.findAll({ include: [models.Institution] });
  res.send(faculty);
});
router.post('/addFaculty', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }

    if (rawdata.facultyId) {
      result = await models.Faculty.update(data, { where: { facultyId: data.facultyId } });
    } else {
      result = await models.Faculty.create(data);
    }
    res.send({ status: 'OK', data: result });



  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

router.get('/institution', async function (req, res, next) {
  let university = await models.Institution.findAll();
  res.send(university);
});

router.post('/addInstitution', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }

    if (rawdata.InstitutionName) {
      result = await models.Institution.create(data);
    } else {
      console.log("An error occured");
    }
    res.send({ status: 'OK', data: result });



  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});


router.get('/faculty', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
