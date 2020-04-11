module.exports = function (sequelize, DataTypes) {
    var Department = sequelize.define('Department', {
        departmentId: {
            type: DataTypes.INTEGER,
            field: 'departmentid',
            primaryKey: true,
            autoIncrement: true

        },
        departmentName: {
            type: DataTypes.STRING(50),
            field: 'departmentname',

        },
        departmentCode: {
            type: DataTypes.STRING(8),
            field: 'departmentcode'

        },
        facultyId: {
            type: DataTypes.INTEGER,
            field: 'facultyid'

        },
    }, {
        tableName: 'Departments',
        underscored: true,
        timestamps: false,

    });
    
    return Department;
}