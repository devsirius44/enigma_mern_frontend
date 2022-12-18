import React, { useState, useEffect } from "react";
import ProductDetails from "./product-details";
import Ingredients from "./ingredients";
import Images from "./images";
import Modifiers from "./modifiers";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@/base-components";
import { getBasicData } from "../../../apis/sales";

const AddProductBody = (props) => {
  const [categories, setCategories] = useState();
  // load basic data for menu items
  useEffect(() => {
    getBasicData()
      .then((res) => {
        setCategories(res.data.menuCat);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <TabGroup className="mt-5">
        <TabList className="nav-tabs">
          <Tab className="w-full py-2 text-start" tag="button">
            Item Details
          </Tab>
          <Tab className="w-full py-2 text-start" tag="button">
            Ingredients
          </Tab>
          <Tab className="w-full py-2 text-start" tag="button">
            Images
          </Tab>
          <Tab className="w-full py-2 text-start" tag="button">
            Modifiers
          </Tab>
        </TabList>
        <TabPanels className="border-l border-r border-b">
          <TabPanel className="leading-relaxed p-5 w-full">
            <ProductDetails categories={categories} />
          </TabPanel>
          <TabPanel className="leading-relaxed p-5 w-full">
            <Ingredients />
          </TabPanel>
          <TabPanel className="leading-relaxed p-5 w-full">
            <Images />
          </TabPanel>
          <TabPanel className="leading-relaxed p-5 w-full">
            <Modifiers />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
};

export default AddProductBody;
