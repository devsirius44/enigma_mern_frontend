import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Lucide, Tippy } from "@/base-components";
import { List } from "antd";
import moment from "moment";
import { showNotification } from "../../../components/notification";

const imageAssets = import.meta.globEager(
  `/src/assets/images/*.{jpg,jpeg,png,svg}`
);

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  ...draggableStyle,
  position: isDragging ? "absolute" : "relative",
  top: "auto !important",
  left: "auto !important",
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "transparent",
  position: "relative",
});

const ScheduleListWeek = (props) => {
  const curr = new Date();
  const first = curr.getDate() - curr.getDay();

  const dataArray = [1, 2, 3, 4, 5, 6, 7];
  const daylist = ["Mon", "Tue", "Wed ", "Thu", "Fri", "Sat", "Sun"];
  const timeline = [
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
  ];

  const timediff = (start, end) => {
    const startTime = moment(start, "HH:mm:ss a");
    const endTime = moment(end, "HH:mm:ss a");
    const duration = moment.duration(endTime.diff(startTime));
    const hours = parseInt(duration.asHours());
    const minutes = parseInt(duration.asMinutes()) % 60;
    let resultstr = "";
    resultstr += "(";
    if(hours === 1) {
      resultstr += hours + 'hr'
    }
    if(hours > 1) {
      resultstr += hours + 'hrs'
    }
    if(minutes !== 0) {
      resultstr += minutes + 'mins'
    }
    resultstr += ")"
    return resultstr;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const date = parseInt(result.destination.droppableId.slice(10));

    const isoveredarray = Array(12).fill(0)

    let adddate = props.scheduleData.filter((item) => (
      item.id === result.draggableId
    ))
      
    let overdate = props.scheduleData.filter((item) => (
      item.date === (date + first).toString() && item.userid === adddate[0].userid
    ))

    overdate.map((item) => {
      const start = timeline.indexOf(item.start_time)
      const end = timeline.indexOf(item.end_time)
      for(let i=start;i<end;i++) {
        isoveredarray[i] = 1
      }
    })

    let isovered = 0
    const addstart = timeline.indexOf(adddate[0].start_time)
    const addend = timeline.indexOf(adddate[0].end_time)
    for (let i=addstart; i<addend; i++) {
        if(isoveredarray[i] === 1) {
          isovered = 1
        }
    }
    if(!isovered) {
      props.setScheduleData(
        props.scheduleData.map((item) =>
          item.id === result.draggableId
            ? { ...item, date: (date + first).toString() }
            : { ...item }
        )
      );
    }
    if(isovered) {
      showNotification("warning", "Warning", "Cannot Insert");
    }
  };

  return (
    <>
      <div className="box mt-10 overflow-x-scroll">
        <table className="table">
          <thead>
            <tr>
              <th key={"daylist_Scheduled"} className="whitespace-nowrap">
                Scheduled Shift
              </th>
              {dataArray.map((e, index) => (
                <th key={"daylist_" + index} className="whitespace-nowrap">
                  {daylist[index]} {e + first}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.userData &&
              props.userData.map((user, index) => (
                <DragDropContext
                  onDragEnd={onDragEnd}
                  key={"DragDropContext_" + index}
                >
                  <tr key={index} className="intro-x">
                    <td className="whitespace-nowrap">
                      <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in mr-3">
                          <Tippy
                            tag="img"
                            alt="Midone Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={
                              imageAssets["/src/assets/images/profile-9.jpg"]
                                .default
                            }
                          />
                        </div>
                        <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                          <div className="font-medium whitespace-nowrap">
                            {user.first_name + " " + user.last_name}
                          </div>
                          <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            {user.hourlyrate + "$/hr"}
                          </div>
                        </div>
                      </div>
                    </td>
                    {dataArray.map((dateMember) => (
                      <td className="whitespace-nowrap w-px" key={dateMember}>
                        <Droppable
                          droppableId={`droppable-${dateMember}`}
                          direction="vertical"
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              style={getListStyle(snapshot.isDraggingOver)}
                              {...provided.droppableProps}
                            >
                              {props.scheduleData
                                .filter((e) => e.userid === index)
                                .filter((e) => e.date == first + dateMember)
                                .length != 0 ? (
                                <List
                                  key={"DraggableList_" + index}
                                  itemLayout="vertical"
                                  dataSource={props.scheduleData
                                    .filter((e) => e.userid === index)
                                    .filter(
                                      (e) => e.date == first + dateMember
                                    )}
                                  renderItem={(item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                      {(provided, snapshot) => (
                                        <div
                                          ref={provided.innerRef}
                                          className="border-2 rounded-md border-dashed border-green-500 w-fit p-3"
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                          )}
                                        >
                                          <a
                                            href="#"
                                            onClick={() => {
                                              props.onShowModal({
                                                show: true,
                                                isCreate: false,
                                                data: user,
                                              });
                                            }}
                                          >
                                            <div>
                                              {item.start_time} -{" "}
                                              {item.end_time}{" "}
                                              {timediff(
                                                item.start_time,
                                                item.end_time
                                              )}
                                            </div>
                                            <div>General Manager - STOVE</div>
                                          </a>
                                        </div>
                                      )}
                                    </Draggable>
                                  )}
                                />
                              ) : (
                                <button
                                  className="btn border-2 bg-transparent border-dashed mr-1 mb-2"
                                  onClick={() => {
                                    props.onShowModal({
                                      show: true,
                                      isCreate: true,
                                    });
                                  }}
                                >
                                  <Lucide icon="Plus" className="w-5 h-5" />
                                </button>
                              )}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </td>
                    ))}
                  </tr>
                </DragDropContext>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ScheduleListWeek;
