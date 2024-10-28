// import dotenv from "dotenv";
// import { AppError } from "../middleware/error.handler.middleware";

// dotenv.config();

// type Config = {
//   name: string;
//   port: number;
//   jwtSecret: string;
// };

// function getName(): string {
//   const name = process.env.NAME;
//   if (!name) {
//     throw new AppError(
//       "CONFIG_INITIALIZATION_ERROR",
//       500,
//       "환경변수 NAME은 필수입니다"
//     );
//   }
//   return name;
// }

// function getPort(): number {
//   const port = process.env.PORT;
//   if (!port) {
//     throw new AppError(
//       "CONFIG_INITIALIZATION_ERROR",
//       500,
//       "환경변수 PORT는 필수입니다"
//     );
//   }
//   const portNumber = parseInt(port, 10);
//   if (isNaN(portNumber)) {
//     throw new AppError(
//       "CONFIG_INITIALIZATION_ERROR",
//       500,
//       "PORT는 숫자여야 합니다"
//     );
//   }
//   return portNumber;
// }

// function getJwtSecret(): string {
//   const jwtSecret = process.env.JWT_SECRET;
//   if (!jwtSecret) {
//     throw new AppError(
//       "CONFIG_INITIALIZATION_ERROR",
//       500,
//       "환경변수 JWT_SECRET는 필수입니다"
//     );
//   }
//   return jwtSecret;
// }

// const config: Config = {
//   name: getName(),
//   port: getPort(),
//   jwtSecret: getJwtSecret(),
// };

// export default config;
