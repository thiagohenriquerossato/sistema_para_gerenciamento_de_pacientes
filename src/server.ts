import * as dotenv from "dotenv";

import { app } from "./app";

dotenv.config();

app.listen(process.env.PORT || 3333, () =>
    console.log(`Server is running at ${process.env.PORT} port`)
);
