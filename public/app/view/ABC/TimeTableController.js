Ext.define('TimeTableApp.view.ABC.TimeTableController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.abc-timetable',
    onAfterRender: async function () {
        this.loadTreeData();
        this.loadTimetableGrdData();
        this.dragOperation();
        var drag_items = $('.drop-effect .drag');
        var drop_items = $('.drop-effect').find('.drop');
        //sets up the drag and drop event listeners
        function setUpEventListeners() {

            drag_items.each(function () {
                var thisDrag = $(this);
                thisDrag[0].addEventListener('dragstart', dragStart);
                thisDrag[0].addEventListener('drag', drag);
                thisDrag[0].addEventListener('dragend', dragEnd);
            });

            drop_items.each(function () {
                var thisDrop = $(this);

                thisDrop[0].addEventListener('dragenter', dragEnter);
                thisDrop[0].addEventListener('dragover', dragOver);
                thisDrop[0].addEventListener('dragleave', dragLeave);
                thisDrop[0].addEventListener('drop', drop);

            });

        }
        setUpEventListeners();

        var dragItem;

        //called as soon as the draggable starts being dragged
        //used to set up data and options
        function dragStart(event) {

            drag = event.target;
            dragItem = event.target;
            console.log("Draging");

            //set the effectAllowed for the drag item
            event.dataTransfer.effectAllowed = $(this).attr('data-effect-allowed');

            var imageSrc = $(dragItem).prop('src');
            var imageHTML = $(dragItem).prop('outerHTML');

            //check for IE (it supports only 'text' or 'URL')
            try {
                event.dataTransfer.setData('text/uri-list', imageSrc);
                event.dataTransfer.setData('text/html', imageHTML);
            } catch (e) {
                event.dataTransfer.setData('text', imageSrc);
            }

            $(drag).addClass('drag-active');

        }

        //called as the draggable enters a droppable 
        //needs to return false to make droppable area valid
        function dragEnter(event) {

            var drop = this;

            //set the drop effect for this zone
            event.dataTransfer.dropEffect = $(drop).attr('data-drop-effect');
            $(drop).addClass('drop-active');

            event.preventDefault();
            event.stopPropagation();

        }

        //called continually while the draggable is over a droppable 
        //needs to return false to make droppable area valid
        function dragOver(event) {
            var drop = this;

            //set the drop effect for this zone
            event.dataTransfer.dropEffect = $(drop).attr('data-drop-effect');
            $(drop).addClass('drop-active');

            event.preventDefault();
            event.stopPropagation();
        }

        //called when the draggable was inside a droppable but then left
        function dragLeave(event) {
            var drop = this;
            $(drop).removeClass('drop-active');
        }

        //called continually as the draggable is dragged
        function drag(event) { }

        //called when the draggable has been released (either on droppable or not)
        //may be called on invalid or valid drop
        function dragEnd(event) {

            var drag = this;
            $(drag).removeClass('drag-active');

        }

        //called when draggable is dropped on droppable 
        //final process, used to copy data or update UI on successful drop
        function drop(event) {

            drop = this;
            $(drop).removeClass('drop-active');
            $(drop).addClass('correct');

            event.dataTransfer.dropEffect = $(drop).attr('data-drop-effect');

            var dataList, dataHTML, dataText;

            //collect our data (based on what browser support we have)
            try {
                dataList = event.dataTransfer.getData('text/uri-list');
                dataHTML = event.dataTransfer.getData('text/html');
            } catch (e) {
                ;
                dataText = event.dataTransfer.getData('text');
            }

            //we have access to the HTML
            if (dataHTML) {
                $(drop).empty();
                $(drop).prepend(dataHTML);
            }
            //only have access to text (old browsers + IE)
            else {
                $(drop).empty();
                $(drop).prepend($(dragItem).clone());
            }

            event.preventDefault();
            event.stopPropagation();
        }

        //Reset the drop containers
        $('.reset-button').on('click', function () {
            $('.drop-zone').find('img').remove();
            $('.drop-zone').find('.drop').removeClass('correct');
        });

        var userAgent = window.navigator.userAgent;
        if (userAgent.indexOf('MSIE') != -1) {
            $('.ie-message').show();
        }
    },
    dragOperation: async function () {

        function allowDrop(ev) {
            ev.preventDefault();
            ev.dataTransfer.dropEffect = "copy";
        }

        function drag(ev) {

            const canvas = document.createElement("canvas");
            canvas.width = canvas.height = 50;

            const ctx = canvas.getContext("2d");
            ctx.lineWidth = 4;
            ctx.moveTo(0, 0);
            ctx.lineTo(50, 50);
            ctx.moveTo(0, 50);
            ctx.lineTo(50, 0);
            ctx.stroke();
            const dt = ev.dataTransfer;
            dt.setData("text/plain", ev.target.id);
            dt.effectAllowed = "copy";
            dt.setDragImage("Drag TEXT", 25, 25);
        }

        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text/plain");
            ev.target.appendChild(document.getElementById(data));
        }
    },

    ttsave1: async function () {
        let data = this.getViewModel().getData();
        console.log(data);

    },
    loadTimetableGrdData: async function () {
        /* let allList = this.lookupReference('timetableGrd');
        let response = await Ext.Ajax.request({ url: '/loadTimeTable', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            allList.setStore(store);
            store.load();
        } */
    },
    loadTreeData: async function () {
        let tree = this.lookupReference('timetableGrd');
        let response = await Ext.Ajax.request({ url: '/loadTimeTable', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.TreeStore', {
            });

            tree.setRootNode({
                text: 'TimeTable',
                expanded: true,
                xtype: 'wardView',
                visible: false,
                children: [
                    { day: "Monday", leaf: true },
                    { day: "Tuesday", expanded: true, },
                    { day: "Wednesday", expanded: true, },
                    { day: "Thursday", expanded: true, },
                    { day: "Friday", expanded: true, },
                    { day: "Saturday", expanded: true, },
                    { day: "Sunday", expanded: true, },
                ]
            });
            console.log(tree.getRootNode().getChildAt (0))
            /*
                        let root = tree.getRootNode();
                        let newWardList = records.keys();
                        let parent; */

            /* for (x of newWardList) {
                parent = parent1.appendChild({
                    text: records[x].wardName,
                    leaf: false,
                    xtype: 'roomsView',
                    dataIndex: records[x].wardId,
                });

                let newRoomList = records[x].Rooms.keys();
                for (roomNo of newRoomList) {
                    parent.appendChild({
                        text: records[x].Rooms[roomNo].roomName,
                        leaf: true,
                        xtype: 'bedView',
                        dataIndex: records[x].Rooms[roomNo].roomId,
                    });
                }
            } */
            //console.log(root);
        }
    },



});
