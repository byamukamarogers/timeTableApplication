"use strict";
module.exports = function (sequelize, DataTypes) {
    let Staff = sequelize.define('Staff', {
        staffId: {
            type: DataTypes.INTEGER,
            field: 'staffid',
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            field: 'name',
            allowNull: false
        },
        initial: {
            type: DataTypes.STRING(5),
            field: 'initial',
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(7),
            field: 'gender',
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            field: 'address'
        },
        email: {
            type: DataTypes.STRING(100),
            field: 'email'
        },
        mobilePhone: {
            type: DataTypes.STRING(15),
            field: 'phone1'
        },
        telePhone: {
            type: DataTypes.STRING(15),
            field: 'phone2'
        },
        departmentId: {
            type: DataTypes.INTEGER,
            field: 'departmentid',
            allowNull: false
        }
    },
        {
            underscored: true,
            timestamps: true,
            tableName: 'staff'
        });
        Staff.associate = function(models) {
            Staff.belongsTo(models.Department, {foreignKey: 'departmentid', as: 'department'})
        };
    return Staff;
}