module.exports = function (sequelize, DataTypes) {
    var Course = sequelize.define('Course', {
        courseId: {
            type: DataTypes.INTEGER,
            field: 'courseid',
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        courseName: {
            type: DataTypes.STRING(50),
            field: 'coursename',
            allowNull: false,
        },
        courseCode: {
            type: DataTypes.STRING(50),
            field: 'coursecode',
            allowNull: false,
            unique: true,
        },
        creditUnits: {
            type: DataTypes.INTEGER,
            field: 'creditunits',
            allowNull: true,
        },
        studyYear: {
            type: DataTypes.INTEGER,
            field: 'studyyear',
            allowNull: false,
        },
        studySemester: {
            type: DataTypes.INTEGER,
            field: 'studysemester',
            allowNull: false,
        },
        courseTypeId: {
            type: DataTypes.INTEGER,
            field: 'coursetypeid',
            allowNull: false,

        },
        programId: {
            type: DataTypes.INTEGER,
            field: 'programid',
            allowNull: false,
        },
        //course settings
        numberOfLecturesPerWeek: {
            type: DataTypes.INTEGER,
            field: 'numberoflecturesperweek',
            allowNull: true,
        },
        durationPerLecture: {
            type: DataTypes.DECIMAL(3,2),
            field: 'durationperlecture',
            allowNull: true,
        },
        maxNumberOfLecturesPerDay: {
            type: DataTypes.INTEGER,
            field: 'maximumnumberoflecturesperday',
            allowNull: true,
        },
        staffId: {
            type: DataTypes.INTEGER,
            field: 'staffid',
            allowNull: true,
        }
    }, {
        tableName: 'Courses',
        underscored: true,
        timestamps: true,

    })
    return Course;
}