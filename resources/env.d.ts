import internal from "stream";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            ENV: "STAGING" | "PRODUCTION";
            BASEURL: string;
            BROWSER: string;
            TESTID: string;
        }
    }
}

export { };
