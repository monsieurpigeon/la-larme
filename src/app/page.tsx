import { redirect } from "next/navigation";

export default function Home() {
  redirect("https://info.lalarme.com");

  return <div>La Larme</div>;
}
