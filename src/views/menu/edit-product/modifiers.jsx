import React, { useState, useRef, useCallback, useEffect } from "react";
import { Lucide } from "@/base-components";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { list } from "postcss";

const ModifierDetail = (props) => {
  const index = props.index;
  // useDrag - the list item is draggable
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  // useDrop - the list item is also a drop area
  const [spec, dropRef] = useDrop({
    accept: "item",
    drop: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = props.index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      props.onMove(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  // Join the 2 refs together into one (both draggable and can be dropped on)
  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  // Make items being dragged transparent, so it's easier to see where we drop them
  const opacity = isDragging ? 0 : 1;

  return (
    <div
      className="grid grid-cols-12 mt-1 mb-1 p-2 border-2 border-dashed rounded-lg"
      ref={dragDropRef}
    >
      <button
        className="input-group col-span-9"
        onClick={() => {
          props.onChange(props.index);
        }}
      >
        {props.name}
      </button>
      <div className="col-span-3">
        <div className="w-20 flex justify-end text-slate-500 mt-3 xl:mt-0">
          <button className="xl:ml-2">
            <Lucide icon="Move" className="w-4 h-4" />
          </button>
          <button
            className="ml-2 xl:ml-2"
            onClick={() => {
              props.onRemove(props.index);
            }}
          >
            <Lucide icon="Trash2" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ModifierOption = (props) => {
  const index = props.index;
  // useDrag - the list item is draggable
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  // useDrop - the list item is also a drop area
  const [spec, dropRef] = useDrop({
    accept: "item",
    drop: (item, monitor) => {
      console.log("dropevent");
      const dragIndex = item.index;
      const hoverIndex = props.index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      props.onMove(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  // Join the 2 refs together into one (both draggable and can be dropped on)
  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  // Make items being dragged transparent, so it's easier to see where we drop them
  const opacity = isDragging ? 0 : 1;

  return (
    <div
      className="col-span-12 mt-1  border-2 border-dashed rounded-lg"
      ref={dragDropRef}
    >
      <div className="xl:flex items-center mt-5 first:mt-0">
        <div className="input-group flex-1">
          <input
            type="text"
            className="form-control"
            value={props.name}
            onChange={(e) => {
              props.onChange(
                { name: e.target.value, price: props.price },
                props.index
              );
            }}
            placeholder="Name"
          />
        </div>
        <div className="input-group w-20">
          <input
            type="number"
            className="form-control"
            value={props.price}
            onChange={(e) => {
              props.onChange(
                { name: props.name, price: e.target.value },
                props.index
              );
            }}
            placeholder="Price"
          />
        </div>
        <div className="w-20 flex text-slate-500 mt-3 xl:mt-0">
          <button className="xl:ml-5">
            <Lucide icon="Move" className="w-4 h-4" />
          </button>
          <button
            className="ml-3 xl:ml-5"
            onClick={() => {
              props.onRemove(props.index);
            }}
          >
            <Lucide icon="Trash2" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Modifiers = (props) => {
  const [data, setData] = useState(props.data.itemOptions_json);
  const [mode, setMode] = useState("save");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modifierList, setModifierList] = useState([]);
  const [currentModifier, setCurrentModifier] = useState({
    name: "",
    selectatleast: "",
    selectatmost: "",
    required: false,
    details: [{ name: "", price: "" }],
  });

  useEffect(() => {
    setData(props.data.itemOptions_json);
  }, [props.data]);

  useEffect(() => {
    if (data === undefined) return;

    data.map((value) => {
      let modifier = {};
      modifier.name = value.name;
      modifier.required = value.required;
      modifier.selectatleast = "";
      modifier.selectatmost = "";

      let options = [];
      value.options.map((option) => {
        let _option = {};
        _option.name = option.name;
        _option.price = option.price;
        options.push(_option);
      });

      modifier.details = options;
      setModifierList([...modifierList, modifier]);
      setCurrentModifier(modifier);
    });
    setMode("edit");
  }, [data]);

  const addModifier = () => {
    setMode("save");
    setCurrentModifier({
      name: "",
      selectatleast: "",
      selectatmost: "",
      required: false,
      details: [{ name: "", price: "" }],
    });
  };
  const saveModifier = () => {
    if (mode === "save") {
      setModifierList([...modifierList, currentModifier]);
      setMode("edit");
    } else {
      setModifierList([
        ...modifierList.slice(0, currentIndex),
        currentModifier,
        ...modifierList.slice(currentIndex + 1),
      ]);
    }
  };

  const changeModifier = (index) => {
    setMode("update");
    setCurrentIndex(index);
    setCurrentModifier(modifierList[index]);
  };
  const removeModifier = (index) => {
    const updatedList = [...modifierList.filter((e, i) => i !== index)];

    setModifierList(updatedList);
    setMode("edit");
    setCurrentIndex(0);
    if (updatedList.length !== 0) setCurrentModifier(updatedList[0]);
    else {
      setCurrentModifier({
        name: "",
        selectatleast: "",
        selectatmost: "",
        required: false,
        details: [{ name: "", price: "" }],
      });
      setMode("save");
    }
  };

  const moveModifier = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = modifierList[dragIndex];
      const hoverItem = modifierList[hoverIndex];

      setModifierList((modifierList) => {
        const updatedList = [...modifierList];
        updatedList[dragIndex] = hoverItem;
        updatedList[hoverIndex] = dragItem;
        return updatedList;
      });
    },
    [modifierList]
  );

  const addOption = () => {
    setCurrentModifier({
      ...currentModifier,
      details: [...currentModifier.details, { name: "", price: "" }],
    });
  };
  const changeOption = (item, _index) => {
    let details = currentModifier.details;
    details[_index] = item;

    setCurrentModifier({
      ...currentModifier,
      details: [...details],
    });
  };

  const removeOption = (index) => {
    setCurrentModifier({
      ...currentModifier,
      details: currentModifier.details.filter((e, i) => i !== index),
    });
  };

  const moveOption = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = currentModifier.details[dragIndex];
      const hoverItem = currentModifier.details[hoverIndex];

      const _details = currentModifier.details;
      _details[dragIndex] = hoverItem;
      _details[hoverIndex] = dragItem;
      setCurrentModifier({ ...currentModifier, details: _details });
    },
    [currentModifier.details]
  );

  return (
    <div className="lg:w-full sm:w-full intro-y grid grid-cols-12 box mr-auto ml-auto">
      <div className="col-span-4 gap-4 gap-y-5 mt-5 p-5 border-r-[3px] border-dashed">
        <div className="intro-y grid grid-cols-12 gap-2">
          <div className="font-medium col-span-12 mt-3">MODIFIERS</div>
          <button className="btn btn-primary col-span-6">Import Group</button>
          <button className="btn btn-primary col-span-6">Save as Group</button>
          <div className="col-span-12">
            <DndProvider backend={HTML5Backend}>
              {modifierList.map((value, index, arr) => {
                return (
                  <ModifierDetail
                    {...{
                      name: value.name,
                      detail: value.details,
                      index: index,
                      key: "key-" + index,
                      onChange: changeModifier,
                      onRemove: removeModifier,
                      onMove: moveModifier,
                    }}
                  />
                );
              })}
            </DndProvider>
          </div>
          <button className="btn btn-primary col-span-6" onClick={addModifier}>
            Add Modifier
          </button>
        </div>
      </div>
      <div className="col-span-8 gap-4 gap-y-5 mt-5 p-5">
        <div className="intro-y grid grid-cols-12 gap-2">
          <div className="intro-y col-span-12 sm:col-span-12">
            <label htmlFor="input-wizard-1" className="form-label">
              NAME
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={currentModifier.name}
              onChange={(e) => {
                setCurrentModifier({
                  ...currentModifier,
                  name: e.target.value,
                });
              }}
            />
          </div>

          <div className="font-medium col-span-12 mt-3">CUSTOMERS CAN</div>

          <div className="intro-y col-span-4 sm:col-span-4 mt-1">
            <label htmlFor="input-wizard-1" className="form-label">
              Select at least
            </label>
            <select
              id="category"
              className="form-select"
              value={currentModifier.selectatleast}
              onChange={(e) => {
                setCurrentModifier({
                  ...currentModifier,
                  selectatleast: e.target.value,
                });
              }}
            >
              <option>Select</option>
              <option>Single</option>
              <option>Multiple</option>
            </select>
          </div>

          <div className="intro-y col-span-4 sm:col-span-4 mt-1">
            <label htmlFor="input-wizard-1" className="form-label">
              Select at most
            </label>
            <select
              id="category"
              className="form-select"
              value={currentModifier.selectatmost}
              onChange={(e) => {
                setCurrentModifier({
                  ...currentModifier,
                  selectatmost: e.target.value,
                });
              }}
            >
              <option>select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="intro-y col-span-4 sm:col-span-4 mt-1">
            <label htmlFor="input-wizard-1" className="form-label">
              Required
            </label>
            <div className="form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input mt-2"
                type="checkbox"
                checked={currentModifier.required}
                onChange={(e) => {
                  setCurrentModifier({
                    ...currentModifier,
                    required: e.target.checked,
                  });
                }}
              />
            </div>
          </div>

          <div className="font-medium col-span-12 mt-3">OPTIONS</div>
          <div className="font-medium col-span-12 mt-1  border-2 border-dashed rounded-lg p-2">
            <DndProvider backend={HTML5Backend}>
              {currentModifier.details.map((value, index, arr) => {
                return (
                  <ModifierOption
                    {...{
                      name: value.name,
                      price: value.price,
                      onChange: changeOption,
                      onRemove: removeOption,
                      onMove: moveOption,
                      index: index,
                      key: "key-" + index,
                    }}
                  />
                );
              })}
            </DndProvider>

            <div className="text-center">
              <button
                className="btn btn-outline-primary border-dashed w-1/2 p-1 mt-3"
                onClick={addOption}
              >
                <Lucide icon="Plus" className="w-4 h-4" /> Add New Option
              </button>
            </div>
          </div>

          <button
            className="btn btn-primary col-span-4 mt-3"
            onClick={saveModifier}
          >
            Save Modifier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modifiers;
