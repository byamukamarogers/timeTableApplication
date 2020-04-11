module.exports = function (sequelize, DataTypes) {
    var Institution = sequelize.define('Institution', {
        institutionId: {
            type: DataTypes.INTEGER,
            field: 'institutionid',
            primaryKey: true,
            autoIncrement: true,
            

        },
        InstitutionName: {
            type: DataTypes.STRING(50),
            field: 'institutionname',

        },
        address: {
            type: DataTypes.STRING(100),
            field: 'address'

        },
        phoneContact: {
            type: DataTypes.STRING(100),
            field: 'phonecontact'

        },
        email: {
            type: DataTypes.STRING(100),
            field: 'email'

        },
    }, {
        tableName: 'Institutions',
        underscored: true,
        timestamps: true,

    })
return Institution;
}