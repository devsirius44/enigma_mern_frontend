import axios from "./index";

export function getSalesData(timezone, venueId, today, startDate, endDate) {
  return axios.get(
    `/v4/reports/daterange_sales_report?timezone=` +
      timezone +
      `&today_string=` +
      today +
      `&venueid=` +
      venueId +
      `&startdate_string=` +
      startDate +
      `&enddate_string=` +
      endDate,
    {}
  );
}

export function getBasicData() {
  return axios.get(
    `/v4/menu/getMenu?venueid=1&timezone=America/Los_Angeles`,
    {}
  );
}

export function updateMenuItemStatus(body) {
  return axios.post(`/v4/menu/activaterec`, body);
}

export function getEmployeeData() {
  return axios.get(`/v4/users/getEmployeeData?venueid=1`, {});
}
