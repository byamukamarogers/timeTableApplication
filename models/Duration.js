module.exports = function (sequelize, DataTypes) {
    var Duration = sequelize.define('Duration', {
        durationId: {
            type: DataTypes.INTEGER,
            field: 'durationid',
            primaryKey: true,
            autoIncrement: true
        },
        durationName: {
            type: DataTypes.STRING(50),
            field: 'durationname',

        },
        startTime: {
            type: DataTypes.TIME,
            field: 'starttime'

        },
        endTime: {
            type: DataTypes.TIME,
            field: 'endtime'

        },
        durationLength: {
            type: DataTypes.INTEGER,
            field: 'durationlength'

        },
    }, {
        tableName: 'Durations',
        underscored: true,
        timestamps: true,

    })
    return Duration;
}