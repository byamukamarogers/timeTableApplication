module.exports = function (sequelize, DataTypes) {
    var StaffType = sequelize.define('StaffType', {
        staffTypeId: {
            type: DataTypes.INTEGER,
            field: 'stafftypeid',
            primaryKey: true,
            autoIncrement: true,

        },
        typeName: {
            type: DataTypes.STRING(50),
            field: 'typename',

        },
        dateCreated: {
            type: DataTypes.DATE,
            field: 'datecreated'

        }
    },
    {
        underscored: true,
        timestamps: true,
        tableName: 'staffTypes'
    });
    return StaffType;
}