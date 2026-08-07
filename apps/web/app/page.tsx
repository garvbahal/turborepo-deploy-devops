import { prisma } from "@repo/db/client";

export default async function Home() {
  const user = await prisma.user.findFirst();
  return (
    <div>
      First name mera ye haii:
      {user?.username}
      <br />
      Password:
      {user?.password}
      old skool mitra dii vibe baliye nii old skool
    </div>
  );
}
