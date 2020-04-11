const config = require('../config');
const sequelize = config.sequelize;
const db = {};

db.Department = sequelize.import('./Department').schema('public');
db.Faculty = sequelize.import('./Faculty').schema('public');
db.Course = sequelize.import('./Course').schema('public');
db.Institution = sequelize.import('./Institution').schema('public');
db.Duration = sequelize.import('./Duration').schema('public');
db.Program = sequelize.import('./Program').schema('public');
db.Room = sequelize.import('./Room').schema('public');
db.RoomType = sequelize.import('./RoomType').schema('public');
db.StaffType = sequelize.import('./StaffType').schema('public');
db.Staff = sequelize.import('./Staff').schema('public');
db.Student = sequelize.import('./Student').schema('public');

  //Relations
  db.Department.belongsTo(db.Faculty, { foreignKey:'facultyId' });
  db.Program.belongsTo(db.Department, { foreignKey:'departmentId' });
  db.Room.belongsTo(db.Faculty, { foreignKey:'facultyId' });
  db.Staff.belongsTo(db.Department, { foreignKey:'departmentId' });
  db.Faculty.belongsTo(db.Institution, { foreignKey:'institutionId' });
  db.Course.belongsTo(db.Program, { foreignKey:'programId' });
  
/* sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  }) */
module.exports = db;