
Ext.define('TimeTableApp.view.institution.institutionForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'institutionForm',

    requires: [
        'TimeTableApp.view.institution.institutionFormController',
        'TimeTableApp.view.institution.institutionFormModel'
    ],

    controller: 'institution-institutionform',
    viewModel: {
        type: 'institution-institutionform'
    },
    listeners: { afterrender: 'onAfterRender' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: 5,
            items: [
                {
                    title: 'ADD UNIVERSITY OR INSTITUTION',
                    bodyPadding: 5,
                    xtype: 'form',
                    width: '50%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [
                        {
                            fieldLabel: 'Institution Id',
                            name: 'institutionid',
                            bind: '{institutionid}',
                            readOnly: true,
                            hidden:true
                        },
                        {
                            fieldLabel: 'Institution Id',
                            name: 'institutionid',
                            bind: '{institutionid}',
                            disabled: true
                        },
                        {
                            fieldLabel: 'Institution Name',
                            name: 'institutionname',
                            bind: '{institutionname}',
                            allowBlank: false
                        },
                        {
                            fieldLabel: 'Address',
                            name: 'address',
                            bind: '{address}',
                            allowBlank: false
                        },
                        {
                            fieldLabel: 'Phone Contact',
                            name: 'phonecontact',
                            bind: '{phonecontact}',
                            allowBlank: false
                        },
                        {
                            fieldLabel: 'Email',
                            name: 'email',
                            bind: '{email}',
                            allowBlank: false
                        }
                    ],
                    buttons: [
                        {
                            text: 'Reset'
                        },
                        {
                            text: 'Submit',
                            formBind: true,
                            handler: 'onInstitutionSubmitClicked'
                        }
                    ]
                }
            ]
        }
    ]
});
