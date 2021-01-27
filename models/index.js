const config = require('../config');
const sequelize = config.sequelize;
const db = {};

db.Department = sequelize.import('./Department').schema('public');
db.Faculty = sequelize.import('./Faculty').schema('public');
db.Institution = sequelize.import('./Institution').schema('public');
db.Duration = sequelize.import('./Duration').schema('public');
db.Program = sequelize.import('./Program').schema('public');
db.Room = sequelize.import('./Room').schema('public');
db.RoomType = sequelize.import('./RoomType').schema('public');
db.StaffType = sequelize.import('./StaffType').schema('public');
db.Staff = sequelize.import('./Staff').schema('public');
db.Student = sequelize.import('./Student').schema('public');
db.Ssession = sequelize.import('./Ssession').schema('public');
db.Day = sequelize.import('./Day').schema('public');
db.LectureClass = sequelize.import('./LecturClass').schema('public');
db.Allocation = sequelize.import('./Association').schema('public');
db.TimeTable = sequelize.import('./TimeTable').schema('public');
db.Course = sequelize.import('./Course').schema('public');
db.CourseType = sequelize.import('./CourseType').schema('public');

//Relations
db.Department.belongsTo(db.Faculty, { foreignKey: 'facultyId' });
db.Program.belongsTo(db.Department, { foreignKey: 'departmentId' });
db.Room.belongsTo(db.Faculty, { foreignKey: 'facultyId' });
db.Room.belongsTo(db.RoomType, { foreignKey: 'roomTypeId' });
db.Staff.belongsTo(db.Department, { foreignKey: 'departmentId' });
db.Faculty.belongsTo(db.Institution, { foreignKey: 'institutionId' });
db.Course.belongsTo(db.Program, { foreignKey: 'programId' });
db.Course.belongsTo(db.CourseType, { foreignKey: 'courseTypeId' });
db.Course.belongsTo(db.Staff, { foreignKey: 'staffId', sourceKey: 'staffId' });

/* TimeTable Relations */
db.TimeTable.hasOne(db.Day, { foreignKey: 'dayId', sourceKey: 'dayId' });
db.Day.hasMany(db.TimeTable, { foreignKey: 'dayId', sourceKey: 'dayId' });
db.TimeTable.belongsTo(db.Ssession, { foreignKey: 'ssessionId' });
db.TimeTable.belongsTo(db.Course, { foreignKey: 'courseId' });
db.TimeTable.belongsTo(db.Staff, { foreignKey: 'staffId' });
db.TimeTable.hasOne(db.Room, { foreignKey: 'roomId', sourceKey: 'roomId' });
/* TimeTable Relations */

/* sequelize.sync({ force: true })
  .then(() => {
    console.log(`Tables created!`)
  }); */

module.exports = db;