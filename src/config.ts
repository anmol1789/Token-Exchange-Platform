import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
coinDenom: "aconst",
name : "Token Exchange Platform ",
chainId: "constantine-3",
createdDate: "2025-07-15T11:16:12.009Z",
modifiedDate: "2025-07-15T11:16:12.009Z",
    id: "andromeda",
    collections: [
    
        {
            exchange:
                 "archway1a26sm7ddmvfvufws3lqk8y3d0vkw88wuywmqdx88hjckqx5wl0mqya30st",
            cw20: "archway1cw9myd9amvnr4n0jtkhyezyr2vuqjjxl3fcrnks0m8aumcm3nh9qtcuft0",
            name: "Exchange Example",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
