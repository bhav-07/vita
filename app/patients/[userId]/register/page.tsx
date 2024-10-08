import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patients.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="max-w-[860px] flex-1 flex flex-col py-10 sub-container">
          {/* Replace logo */}
          <Image
            src="/assets/icons/logo-icon.svg"
            alt="logo"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <p className="copyright py-12">© 2024 Vita</p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="onboarding image"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
