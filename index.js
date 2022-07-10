const winston = require("winston");

const logger = winston.createLogger({
    level: "error",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
      new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
  });

function miError() {
    throw new Error("Este es un error personalizado");
}

try{
    miError();
} catch (e){
    logger.log("error", e.toString())
}