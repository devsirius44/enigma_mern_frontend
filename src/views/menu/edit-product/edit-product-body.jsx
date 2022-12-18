import React, { useState, useEffect } from "react";
import ProductDetails from "./product-details";
import Ingredients from "./ingredients";
import Images from "./images";
import Modifiers from "./modifiers";
import queryString from "query-string";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@/base-components";
import { getBasicData } from "../../../apis/sales";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const EditProductBody = () => {
  const itemId = queryString.parse(location.search).itemid;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [categories, setCategories] = useState();

  // load basic data for menu items
  useEffect(() => {
    setLoading(true);
    getBasicData()
      .then((res) => {
        const menuItems = res.data.menuItems;
        setCategories(res.data.menuCat);
        setData(menuItems.find((item) => item.itemid == itemId));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <></>
      )}
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
            <ProductDetails data={data} categories={categories} />
          </TabPanel>
          <TabPanel className="leading-relaxed p-5 w-full">
            <Ingredients />
          </TabPanel>
          <TabPanel className="leading-relaxed p-5 w-full">
            <Images />
          </TabPanel>
          <TabPanel className="leading-relaxed p-5 w-full">
            <Modifiers data={data} />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
};

export default EditProductBody;
