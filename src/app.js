import cron from "node-cron";
import colors from "colors";
import { checkCostco } from "./costco.js";
import { addTimeStamps } from "./console.js";

addTimeStamps();

console.log(colors.green(`Welcome to Costco Inventory Checker`));

async function go() {
  await checkCostco();
}

cron.schedule("*/30 * * * *", go);
