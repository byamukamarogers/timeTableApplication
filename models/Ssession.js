module.exports = function (sequelize, DataTypes) {
    var Ssession = sequelize.define('Ssession', {
        ssessionId: {
            type: DataTypes.INTEGER,
            field: 'ssessionid',
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        from: {
            type: DataTypes.TIME,
            field: 'from',
            allowNull: false,
        },
        to: {
            type: DataTypes.TIME,
            field: 'to',
            allowNull: false,
        },
    }, {
        tableName: 'Ssessions',
        underscored: true,
        timestamps: true,

    })
    return Ssession;
}