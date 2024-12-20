import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Index() {
    return (
        <div className="
        flex 
        flex-col
        min-h-full 
        justify-center 
        py-[16rem] 
        sm:px-6
        lg:px-8
        bg-gray-100">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image src="/Image/pngwing.com.png" alt="logo" width="58" height="58" className="mx-auto w-auto" />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Sign in your account
                </h2>
            </div>
            <AuthForm />
        </div>
    );
}
