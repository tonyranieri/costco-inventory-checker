import fetch from "isomorphic-fetch";
import colors from "colors";
import { items } from "./costco-config.js";
import { config } from "dotenv";
config();

async function checkStore(itemNumber) {
  const res = await fetch(
    `https://api.costco.com/ebusiness/inventory/v1/inventorylevels/availability/${itemNumber}?destinationState=${process.env.STATE}&destinationPostalCode=${process.env.POSTAL_CODE}&destinationCountryCode=${process.env.COUNTRY_CODE}&quantity=1&orderItemId=0&tvonly=n&shippingCode=LTR`,
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "client-identifier": "481b1aec-aa3b-454b-b81b-48187e28f205",
        "costco.env": "ECOM",
        pragma: "no-cache",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
      },
      referrer: "https://www.costco.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
    }
  );

  const data = await res.json();
  return data;
}

export async function checkCostco() {
  for (const item of items) {
    const { itemNumber, description } = item;

    console.log(colors.yellow(`Checking inventory for "${description}"...`));

    const data = await checkStore(itemNumber);

    if (data.availableForSale) {
      console.log(colors.green(`${description} is available!`));
    } else {
      console.log(colors.red(`${description} is not available!`));
    }
  }
}
