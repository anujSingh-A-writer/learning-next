import requireAuthentication from "@/lib/authenticationCheck/requireAuthentication";
import { NextPageContext } from "next";

export async function getServerSideProps(context: NextPageContext) {
  return requireAuthentication(context, {
    props: {},
  });
}

export default function Home() {
  return null;
}
