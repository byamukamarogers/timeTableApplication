
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
            margin: 3,
            items: [
                //Duration form        
                {
                    title: 'Create New Session Time',
                    bodyPadding: 5,
                    width: '50%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Session ID',
                        bind: '{ssessionId}',
                        allowBlank: true,
                        readOnly: true,
                    },
                    {
                        fieldLabel: 'Length (hours)',
                        xtype: 'numberfield',
                        bind: '{durationLength}',
                        allowBlank: true
                    },
                    {
                        xtype: 'timefield',
                        fieldLabel: 'Start Time',
                        format: 'g:i A',
                        bind: { value: '{from}' },
                        minValue: '8:00 AM',
                        maxValue: '10:00 PM',
                        increment: 30,
                        anchor: '100%',
                        listeners: {
                            select: 'onStartTimeSelect'
                        }
                    },
                    {
                        xtype: 'timefield',
                        fieldLabel: 'End Time',
                        minValue: '8:30 AM',
                        maxValue: '10:00 PM',
                        increment: 30,
                        format: 'g:i A',
                        bind: { value: '{to}' },
                        anchor: '100%',
                        listeners: {
                            select: 'onEndTimeSelect'
                        }
                    },
                    ],
                    buttons: [{
                        text: 'Reset'
                    }, {
                        text: 'Submit',
                        handler: 'onDurationSubmitClicked'
                    }],
                },

            ]
        },

    ],
});
