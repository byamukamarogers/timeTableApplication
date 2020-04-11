var express = require('express');
var router = express.Router();
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rooms', async function (req, res, next) {
  let duration = await models.Room.findAll({ include: [models.Faculty] });
  res.send(duration);
});
router.post('/addRoom', async function (req, res, next) {
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
    if (rawdata.roomId) {
      result = await models.Room.create(data);
    } else if(rawdata.roomName) {
      let duration = '';
      console.log(rawdata.roomName);
      try {
        if (rawdata.roomNameSearch === '') {
          duration = await models.Room.findAll({ where: { 'roomName': rawdata.roomName }, include: [models.Faculty] });

        } else {

        }
      } catch (err) {
        res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
        console.log(err);
      }
    } else{

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
  console.log(rawdata);
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.roomTypeId) {
      result = await models.RoomType.create(data);
    } else {
      console.log("An error occured");
    }
    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});


router.get('/durations', async function (req, res, next) {
  let duration = await models.Duration.findAll();
  res.send(duration);
});
router.post('/addDuration', async function (req, res, next) {
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
    if (rawdata.durationId) {
      result = await models.Duration.create(data);
    } else {
      console.log("An error occured");
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
  console.log(rawdata);
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.courseId) {
      result = await models.Course.create(data);
    } else {
      console.log("An error occured");
    }
    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

router.get('/programs', async function (req, res, next) {
  let program = await models.Program.findAll({ include: [models.Department] });
  res.send(program);
});
router.post('/addProgram', async function (req, res, next) {
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
    if (rawdata.programId) {
      result = await models.Program.create(data);
    } else {
      console.log("An error occured");
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
  console.log(rawdata);
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    if (rawdata.staffId) {
      result = await models.Staff.create(data);
    } else {
      console.log("An error occured");
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
      result = await models.Department.create(data);
    } else {
      console.log("An error occured");
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
      result = await models.Faculty.create(data);
    } else {
      console.log("An error occured");
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
