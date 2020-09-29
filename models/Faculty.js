module.exports = function (sequelize, DataTypes) {
    var Faculty = sequelize.define('Faculty', {
        facultyId: {
            type: DataTypes.INTEGER,
            field: 'facultyid',
            primaryKey: true,
            autoIncrement: true
        },
        facultyName: {
            type: DataTypes.STRING(50),
            field: 'facultyname'
        },
        institutionId: {
            type: DataTypes.INTEGER,
            field: 'institutionid'
        }
    }, 
    {
        tableName: 'Faculty',
        underscored: true,
        timestamps: true
    })
    return Faculty;
}