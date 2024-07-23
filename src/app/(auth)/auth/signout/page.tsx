import SignOutCard from "@/components/custom/auth/SignOutCard";

export default function SignOut() {
  const callbackUrl = process.env.NEXTAUTH_URL;

  if (!callbackUrl) {
    throw new Error(
      "NEXTAUTH_URL environment variable is not set. Please set it in your .env.local file"
    );
  }
  return <SignOutCard callbackUrl={callbackUrl} />;
}
