module.exports = function (sequelize, DataTypes) {
    var Day = sequelize.define('Day', {
        dayId: {
            type: DataTypes.INTEGER,
            field: 'dayid',
            primaryKey: true,
            autoIncrement: true

        },
        weekDay: {
            type: DataTypes.STRING(50),
            field: 'weekday',

        },
    }, {
        tableName: 'Days',
        underscored: true,
        timestamps: true,

    });
    return Day;
}