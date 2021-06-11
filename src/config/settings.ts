export const DBConfigurations = {
  tableHeroesName: process.env.STACK_NAME_BASE + "heroes-table",
};

export const Headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Headers":
    "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
};

export const CODES = {
    SUCCESS: 200,
    CLIENT_ERROR: 400,
    SERVER_ERROR: 500
}

export const STATUS_DESCRIPTION = {
    SUCCESS:"SUCCESS",
    ERROR: "ERROR"
}