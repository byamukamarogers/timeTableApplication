Ext.define('TimeTableApp.view.testDrag.testDragController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.testdrag-testdrag',
    onAfterRender: async function () {
        //this.registerDragZone();
        this.registerDropZone();
    },


    registerDragZone: async function () {
        var me = this,
            patientView = me.lookup('patientView');

            this.on('render', function(v) {
                console.log('am in');
                this.dragZone = new Ext.dd.DragZone(v.getEl(), {
            
            //      On receipt of a mousedown event, see if it is within a DataView node.
            //      Return a drag data object if so.
                    getDragData: function(e) {
            
            //          Use the DataView's own itemSelector (a mandatory property) to
            //          test if the mousedown is within one of the DataView's nodes.
                        var sourceEl = e.getTarget(v.itemSelector, 10);
            
            //          If the mousedown is within a DataView node, clone the node to produce
            //          a ddel element for use by the drag proxy. Also add application data
            //          to the returned data object.
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
            
            //      Provide coordinates for the proxy to slide back to on failed drag.
            //      This is the original XY coordinates of the draggable element captured
            //      in the getDragData method.
                    getRepairXY: function() {
                        return this.dragData.repairXY;
                    }
                });
            });

        /* me.dragZone = Ext.create('Ext.dd.DragZone', '.patient-source', {

            getDragData: function (e) {
                var elem = patientView;
                elem.innerHTML = "Draggable item";
                return {
                    ddel: elem
                };
            },
            getDragText: function (info) {
                var selector = 'div.x-dataview-item',
                    el = Ext.fly(info.eventTarget).up(selector);
                return el.dom.innerHTML;
            },
            getDragData: function(e) {
                return {
                    patientData: this.view.mapToRecord(e)
                };
            }
        }); */
        console.log(this.dragZone);
        /* me.dragZone = Ext.create('Ext.dd.DragZone', 'item1', {
            element: patientView.bodyElement,
            handle: '.patient-source',
            view: patientView,
            $configStrict: false,
            proxy: {
                cls: 'x-proxy-drag-el patient-proxy-el'
            },

            getDragText: function(info) {
                var selector = '.x-dataview-item',
                    el = Ext.fly(info.eventTarget).up(selector);

                return el.dom.innerHTML;
            },

            getDragData: function(e) {
                return {
                    patientData: this.view.mapToRecord(e)
                };
            }
        }); */
    },

    registerDropZone: function () {
        var me = this,
            hospitalView = me.lookup('hospitalView');

        me.dropZone = Ext.create('Ext.dd.DropZone', {
            element: hospitalView.bodyElement,
            view: hospitalView,
            $configStrict: false,
            prepareNameString: me.prepareNameString,

            onDragMove: function (info) {
                var me = this,
                    ddManager = Ext.dd.Manager,
                    targetEl = ddManager.getTargetEl(info),
                    rowBody = Ext.fly(targetEl),
                    isRowBody = rowBody.hasCls('hospital-target'),
                    hospital, patients, name;

                if (!isRowBody) {
                    rowBody = Ext.fly(targetEl).parent('.x-rowbody');

                    if (rowBody) {
                        isRowBody = rowBody.hasCls('hospital-target');
                    }
                }

                me.toggleDropMarker(info, false);

                if (!isRowBody) {
                    return;
                }

                hospital = rowBody.component.getRecord();
                patients = hospital.get('patients');
                name = info.data.dragData.patientData.get('name');

                if (patients && patients.indexOf(name) !== -1) {
                    return;
                }

                me.ddEl = rowBody;
                me.toggleDropMarker(info, true);
            },

            onDrop: function (info) {
                var me = this,
                    hospital, patients, name, component;

                if (!me.ddEl) {
                    return;
                }

                component = me.ddEl.component;
                hospital = component.getRecord();
                patients = hospital.get('patients');
                name = info.data.dragData.patientData.get('name');

                if (patients && patients.indexOf(name) !== -1) {
                    return;
                }

                if (!patients) {
                    patients = [];
                    hospital.set('patients', patients);
                }

                patients.push(name);
                component.contentElement.update(me.prepareNameString(patients));
                me.toggleDropMarker(info, false);
            },

            toggleDropMarker: function (info, state) {
                var me = this,
                    ddManager;

                if (!me.ddEl) {
                    return;
                }

                ddManager = Ext.dd.Manager;
                ddManager.toggleTargetNodeCls(me.ddEl, 'hospital-target-hover', state);
                ddManager.toggleProxyCls(info, me.validDropCls, state);

                if (!state) {
                    me.ddEl = null;
                }
            }
        });
    },

    prepareNameString: function (values) {
        var str = '',
            i = 0,
            ln = values.length;

        for (; i < ln; i++) {
            str += [
                '<div class="name-tag x-tooltiptool">',
                '<span>', values[i], '</span>',
                '<span index="', i,
                '" class="remove-icon x-icon-el x-font-icon x-tool-type-close"></span></div>'
            ].join('');
        }

        return (str || 'Drop patients here');
    },

    onRemoveTapped: function (e, target) {
        var me = this,
            patientIndex = +target.getAttribute('index'),
            rowBody = Ext.Component.from(target),
            record = rowBody.getRecord(),
            patients = record.get('patients');

        if (patientIndex === -1) {
            return;
        }

        patients = Ext.Array.removeAt(patients, patientIndex, 0);
        rowBody.contentElement.update(me.prepareNameString(patients));

        if (!patients.length) {
            record.set('patients', null);
        }
    },

    destroy: function () {
        var me = this;

        me.dragZone = me.dropZone = Ext.destroy(me.dragZone, me.dragZone);
        me.callParent();
    }

});
