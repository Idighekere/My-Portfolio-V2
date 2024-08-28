import "next";
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_PROJECT_ID: string;
      NEXT_PUBLIC_PROJECT_SECRET: string;
      NEXT_PUBLIC_SENDER_EMAIL: string;
    }
  }
}
