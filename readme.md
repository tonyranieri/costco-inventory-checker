# Costco Inventory Checker

Check costco.com for inventory availabilty by item number.

## Usage

1. Set items to track in `costco-config.js`
1. Set your location info in your `.env` file, following the `.env.sample` format
1. From the `src` directory `npm install`
1. `npm start`

## Scheduling

Scheduling is handled by `node-cron`

This is a quick reference to cron syntax and also shows the options supported by node-cron.

**Allowed fields**

```
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
```

**Allowed values**

| field        | values                            |
| ------------ | --------------------------------- |
| second       | 0-59                              |
| minute       | 0-59                              |
| hour         | 0-23                              |
| day of month | 1-31                              |
| month        | 1-12 (or names)                   |
| day of week  | 0-7 (or names, 0 or 7 are sunday) |
