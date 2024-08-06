import { SignUp } from "@clerk/nextjs";

export default function SignUPPage() {
  return (
    <main className="auth-page">
      <SignUp />
    </main>
  );
}
