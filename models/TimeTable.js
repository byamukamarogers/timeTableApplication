module.exports = function (sequelize, DataTypes) {
    var TimeTable = sequelize.define('TimeTable', {
        timeTableId: {
            type: DataTypes.INTEGER,
            field: 'timetableid',
            primaryKey: true,
            autoIncrement: true
        },
        classId: {
            type: DataTypes.INTEGER,
            field: 'classid',
            allowNull: false,
        },
        dayId: {
            type: DataTypes.INTEGER,
            field: 'dayid',
            allowNull: false,
        },
        ssessionId: {
            type: DataTypes.INTEGER,
            field: 'sessionid',
            allowNull: false,
        },
        courseId: {
            type: DataTypes.INTEGER,
            field: 'courseunitid',
            allowNull: false,
        },
        staffId: {
            type: DataTypes.INTEGER,
            field: 'lecturerid',
            allowNull: true,
        },
        roomId: {
            type: DataTypes.INTEGER,
            field: 'roomid',
            allowNull: false,
        },
    }, {
        tableName: 'timetable',
        underscored: true,
        timestamps: true,

    })
    return TimeTable;
}