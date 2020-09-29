
Ext.define('TimeTableApp.view.institution.institutionForm',{
    extend: 'Ext.panel.Panel',
    xtype:'institutionForm',

    requires: [
        'TimeTableApp.view.institution.institutionFormController',
        'TimeTableApp.view.institution.institutionFormModel'
    ],

    controller: 'institution-institutionform',
    viewModel: {
        type: 'institution-institutionform'
    },
    listeners: {afterrender:'onAfterRender'},
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: 5,
            items: [     
                {
                    title: 'ADD UNIVERSITY OR INSTITUTION',
                    bodyPadding: 5,
                    width: '50%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Institution Id',
                        name: 'institutionid',
                        bind: '{institutionId}',
                        allowBlank: false,
                    }, {
                        fieldLabel: 'Institution Name',
                        name: 'institutionname',
                        bind: '{InstitutionName}',
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
                        bind: '{phoneContact}',
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Email',
                        name: 'email',
                        bind: '{email}',
                        allowBlank: false
                    }

                    ],
                    buttons: [{
                        text: 'Reset'
                    }, {
                        text: 'Submit',
                        handler: 'onInstitutionSubmitClicked'
                    }],
                },
                
            ],
        }
    ]
});
