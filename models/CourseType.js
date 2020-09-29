module.exports = function (sequelize, DataTypes) {
    var CourseType = sequelize.define('CourseType', {
        courseTypeId: {
            type: DataTypes.INTEGER,
            field: 'coursetypeid',
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        courseTypeName: {
            type: DataTypes.STRING(50),
            field: 'coursetypename',
            allowNull: false,
        },
        courseTypeCode: {
            type: DataTypes.STRING(50),
            field: 'coursetypecode',
            allowNull: false,
            unique: true,
        },
        courseTypeDescription: {
            type: DataTypes.STRING(150),
            field: 'coursetypedescription',
            allowNull: true,
        },
        createdBy: {
            type: DataTypes.INTEGER,
            field: 'staffid',
            allowNull: false,
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            field: 'staffid',
            allowNull: true,
        }
    }, {
        tableName: 'CourseTypes',
        underscored: true,
        timestamps: true,

    })
    return CourseType;
}