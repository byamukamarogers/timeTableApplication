module.exports = function (sequelize, DataTypes) {
    var Room = sequelize.define('Room', {
        roomId: {
            type: DataTypes.INTEGER,
            field: 'roomid',
            primaryKey: true,
            autoIncrement: true

        },
        roomName: {
            type: DataTypes.STRING(50),
            field: 'roomname',

        },
        capacity: {
            type: DataTypes.INTEGER,
            field: 'capacity'

        },
        facultyId: {
            type: DataTypes.INTEGER,
            field: 'facultyid'

        },
        roomTypeId: {
            type: DataTypes.INTEGER,
            field: 'roomtypeid'

        },
        location: {
            type: DataTypes.STRING(50),
            field: 'location'

        }
    }, {
        tableName: 'Rooms',
        underscored: true,
        timestamps: true,

    });
    return Room;
}