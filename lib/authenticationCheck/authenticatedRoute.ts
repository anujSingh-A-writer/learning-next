import { HOME } from "@/constants/routes";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function authenticatedRoute(
  context: NextPageContext,
  callback: any
) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: HOME,
        permanent: false,
      },
    };
  }

  return callback;
}

export default authenticatedRoute;
