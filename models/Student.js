module.exports = function (sequelize, DataTypes) {
    var Student = sequelize.define('Student', {
        studentId: {
            type: DataTypes.INTEGER,
            field: 'studentid',
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,

        },
        studentNames: {
            type: DataTypes.STRING(100),
            field: 'names'

        },
        registrationNumber: {
            type: DataTypes.STRING(50),
            field: 'registrationNumber',

        },
        Email: {
            type: DataTypes.STRING(50),
            field: 'Email'

        },
        Address: {
            type: DataTypes.STRING(50),
            field: 'Address'

        },
        Gender: {
            type: DataTypes.STRING(10),
            field: 'Gender'
        },
        yearOfStudy: {
            type: DataTypes.INTEGER,
            field: 'yearofstudy'

        },
        dateOfBirth: {
            type: DataTypes.STRING(50),
            field: 'dateOfBirth'

        }
    },
        {
            tableName: 'Students',
            timestamps: true,

        });
    return Student;

}