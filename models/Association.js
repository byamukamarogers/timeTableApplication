module.exports = function (sequelize, DataTypes) {
    var Allocation = sequelize.define('Allocation', {
        allocationId: {
            type: DataTypes.INTEGER,
            field: 'courseid',
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        roomId: {
            type: DataTypes.INTEGER,
            field: 'roomid',
            allowNull: false,
        },
        courseId: {
            type: DataTypes.INTEGER,
            field: 'courseId',
            allowNull: false,
        },
        staffId: {
            type: DataTypes.INTEGER,
            field: 'staffid',
            allowNull: true,
        }
    }, {
        tableName: 'Allocations',
        underscored: true,
        timestamps: true,

    })
    return Allocation;
}