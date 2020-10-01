module.exports = function (sequelize, DataTypes) {
    var LectureClass = sequelize.define('LectureClass', {
        classId: {
            type: DataTypes.INTEGER,
            field: 'classid',
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        className: {
            type: DataTypes.STRING(50),
            field: 'classname',
            allowNull: false,
        },
        isProgram: {
            type: DataTypes.BOOLEAN,
            field: 'isprogram',
            allowNull: true,
            defaultValue: false,
        },
        programId: {
            type: DataTypes.INTEGER,
            field: 'programid',
            allowNull: true,
        },
        isCourse: {
            type: DataTypes.BOOLEAN,
            field: 'iscourse',
            allowNull: true,
            defaultValue: false,
        },
        courseId: {
            //this should handle an array of courses
            type: DataTypes.INTEGER,
            field: 'courseid',
            allowNull: true,
        },
        semester: {
            type: DataTypes.INTEGER,
            field: 'semester',
            defaultValue: null,
            allowNull: true,
        },
        totalStudents: {
            type: DataTypes.INTEGER,
            field: 'totalstudents',
            allowNull: true,
        },
        departmentId: {
            type: DataTypes.INTEGER,
            field: 'departmentid',
            allowNull: false,
        },
        createdBy: {
            type: DataTypes.INTEGER,
            field: 'createdby',
            allowNull: false,
            defaultValue: 1
        }
    }, {
        tableName: 'lectureclass',
        underscored: true,
        timestamps: true,
    })
    return LectureClass;
}