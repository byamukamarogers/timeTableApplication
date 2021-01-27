
Ext.define('TimeTableApp.view.testDrag.testDrag', {
    extend: 'Ext.panel.Panel',

    requires: [
        'TimeTableApp.view.testDrag.testDragController',
        'TimeTableApp.view.testDrag.testDragModel'
    ],

    controller: 'testdrag-testdrag',
    viewModel: {
        type: 'testdrag-testdrag'
    },

    //extend: 'Ext.panel.Panel',
    xtype: 'dd-form-to-grid',
    requires: [
        /* 'Ext.plugin.dd.DragZone',
        'Ext.plugin.dd.DropZone', */
        'Ext.dd.DragZone',
        'Ext.dd.DropZone',
    ],

    listeners: { afterrender: 'onAfterRender' },
    layout: {
        type: 'box'
    },
    padding: 10,
    cls: 'form-to-grid-dd',
    title: 'Patient Hospital Assignment',
    maxWidth: 800,
    responsiveConfig: {
        'width < 565': {
            layout: {
                vertical: true
            }
        },
        'width >= 565': {
            layout: {
                vertical: false
            }
        }
    },
    items: [{
        xtype: 'panel',
        title: 'Patients',
        flex: 0.4,
        border: true,
        scrollable: 'y',

        items: [{
            xtype: 'dataview',
            bind: {
                store: '{patient}'
            },
            reference: 'patientView',
            itemTpl: ['<tpl for=".">',
                '<div id="patient-source" class="patient-source">',
                '<table><tbody>',
                '<tr><td class="patient-label">Name</td><td class="patient-name">{name}</td></tr>',
                '<tr><td class="patient-label">Address</td><td class="patient-name">{address}</td></tr>',
                //'<tr><td class="patient-label">Telephone</td><td class="patient-name">{telephone}</td></tr>',
                '</tbody></table>',
                '</div>',
                '</tpl>'
            ],
            /* listeners: {
                afterrender: function (v) {
                    console.log("here just");
                    this.dragZone = new Ext.dd.DragZone(v.getEl(), {

                        getDragData: function (e) {
                            var sourceEl = e.getTarget(v.itemSelector, 10);
                            if (sourceEl) {
                                d = sourceEl.cloneNode(true);
                                d.id = Ext.id();
                                return {
                                    ddel: d,
                                    sourceEl: sourceEl,
                                    repairXY: Ext.fly(sourceEl).getXY(),
                                    sourceStore: v.store,
                                    draggedRecord: v.getRecord(sourceEl)
                                }
                            }
                        },
                        getRepairXY: function () {
                            return this.dragData.repairXY;
                        }
                    });

                }
            } */

        }]
    },/*  {
        xtype: 'spacer',
        maxHeight: 20,
        maxWidth: 20
    }, */ 
    /* {
        xtype: 'grid',
        flex: 0.6,
        title: 'Hospitals',
        cls: 'dd-hospital-grid',
        reference: 'hospitalView',
        variableHeights: true,
        viewConfig: {
            plugins: {
                ptype: 'celldragdrop',
       
                // Remove text from source cell and replace with value of emptyText.
                applyEmptyText: true,
       
                //emptyText: Ext.String.htmlEncode('<<foo>>'),
       
                // Will only allow drops of the same type.
                enforceType: true
            }
        },
        itemConfig: {
            body: {
                tpl: [
                    '<tpl if="patients">',
                    '<tpl for="patients">',
                    '<div class="name-tag x-tooltiptool">',
                    '<span>{[values]}</span>',
                    '<span index="{[xindex - 1]}" class="remove-icon x-icon-el x-font-icon x-tool-type-close"></span>',
                    '</div>',
                    '</tpl><tpl else>',
                    '<div class="empty-txt">Drop patients here</div>',
                    '</tpl>'
                ],
                cls: 'hospital-target'
            }
        },
        columns: [{
            dataIndex: 'name',
            text: 'Name',
            flex: 1
        }, {
            dataIndex: 'address',
            text: 'Address',
            flex: 1
        }, {
            dataIndex: 'telephone',
            text: 'Telephone',
            flex: 1
        }],
        store: {
            data: [{
                code: 'AAAAA',
                name: 'Saint Thomas',
                address: 'Westminster Bridge Road, SE1 7EH',
                telephone: '020 7188 7188'
            }, {
                code: 'BBBBB',
                name: 'Queen\'s Medical Centre',
                address: 'Derby Road, NG7 2UH',
                telephone: '0115 924 9924'
            }, {
                code: 'CCCCC',
                name: 'Saint Bartholomew',
                address: 'West Smithfield, EC1A 7BE',
                telephone: '020 7377 7000'
            }, {
                code: 'DDDDD',
                name: 'Royal London',
                address: 'Whitechapel, E1 1BB',
                telephone: '020 7377 7000'
            }]
        },
        listeners: {
            element: 'element',
            delegate: ['.remove-icon'],
            tap: 'onRemoveTapped'
        }
    } */
]
});
