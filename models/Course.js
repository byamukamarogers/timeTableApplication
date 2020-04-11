module.exports = function (sequelize, DataTypes) {
    var Course = sequelize.define('Course', {
        courseId: {
            type: DataTypes.INTEGER,
            field: 'courseid',
            primaryKey: true,
            allowNull: false,
            autoIncrement: true

        },
        courseName: {
            type: DataTypes.STRING(50),
            field: 'coursename',

        },
        courseCode: {
            type: DataTypes.STRING(50),
            field: 'coursecode'

        },
        creditUnits: {
            type: DataTypes.INTEGER,
            field: 'creditunits'

        },
        studyYear: {
            type: DataTypes.INTEGER,
            field: 'studyyear'

        },
        studySemester: {
            type: DataTypes.INTEGER,
            field: 'studysemester'

        },
        courseTypeId: {
            type: DataTypes.INTEGER,
            field: 'coursetypeid'

        },
        programId: {
            type: DataTypes.INTEGER,
            field: 'programid'

        }
    }, {
        tableName: 'Courses',
        underscored: true,
        timestamps: true,

    })
    return Course;
}