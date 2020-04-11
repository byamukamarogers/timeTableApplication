module.exports = function (sequelize, DataTypes) {
    var RoomType = sequelize.define('RoomType', {
        roomTypeId: {
            type: DataTypes.INTEGER,
            field: 'roomtypeid',
            primaryKey: true,
            autoIncrement: true

        },
        roomTypeName: {
            type: DataTypes.STRING(50),
            field: 'roomtypename',

        },
        roomTypeDescription: {
            type: DataTypes.STRING(150),
            field: 'roomtypedescription',

        },
    }, {
        tableName: 'RoomTypes',
        underscored: true,
        timestamps: true,

    });
    return RoomType;
}