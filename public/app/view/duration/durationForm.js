
Ext.define('TimeTableApp.view.duration.durationForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'durationForm',
    requires: [
        'TimeTableApp.view.duration.durationFormController',
        'TimeTableApp.view.duration.durationFormModel'
    ],

    controller: 'duration-durationform',
    viewModel: {
        type: 'duration-durationform'
    },
    id: 'durationForm',
    listeners: { afterrender: 'onAfterRender' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    title: 'Create New Session Time',
                    bodyPadding: 5,
                    width: '100%',
                    layout: 'anchor',
                    xtype: 'form',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [
                        {
                            fieldLabel: 'Session ID',
                            bind: '{ssessionid}',
                            disabled: true
                        },
                        {
                            fieldLabel: 'Session ID',
                            bind: '{ssessionid}',
                            hidden: true
                        },
                        {
                            fieldLabel: 'Session Name',
                            bind: '{ssessionName}',
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
                            handler: 'onDurationSubmitClicked'
                        }
                    ]
                }
            ]
        }
    ]
});
