'use client'
import { ImSpinner2 } from "react-icons/im";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useRouter, useSearchParams } from "next/navigation";
import PasswordInput from "@/components/Auth/PasswordInput";
import { toast } from "react-toastify";
import { Singin } from "@/lib/Actions/Auth.action";

type FormType = {
    email: string,
    password: string
}

const LoginForm = () => {
    const [_, setCookie] = useCookies(['accessToken', 'refreshToken']);
    const nextRout = useSearchParams().get('next');
    const router = useRouter();

    const { register, handleSubmit, reset, formState: { errors, isSubmitting: isLoading }, watch } = useForm<FormType>({
        defaultValues: {}
    });

    const handleFormSubmit: SubmitHandler<FormType> = async (data) => {
        try {
            const res = await Singin(JSON.stringify(data));

            toast.success(res?.message || 'Login Success');
            reset();
            router.replace(nextRout || "/admin/jobs");

        } catch (err: any) {
            toast.error(err.message || 'Something went wrong, try again');
        }
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="">

                <h2 className="text-xl mb-1 font-medium font-epilogue">Login as Admin!</h2>
                <h3 className="mb-4 font-epilogue text-sm">Please enter your email and password to continue.</h3>

                {/* Email */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='email' className="mb-1.5 block text-black dark:text-white font-epilogue">
                        Email
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id='email'
                        {...register("email", { required: "Email is required" })}
                        placeholder="Write Email"
                        className={`w-full rounded bg-white border py-2.5 px-4 text-black outline-none transition disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-white font-epilogue placeholder:font-epilogue ${errors?.email ? 'border-red-500' : ' border-strokeinput focus:border-black active:border-black'}`}
                    />
                    {errors?.email && <p className="text-red-500 text-sm font-epilogue col-span-2">{errors?.email?.message}</p>}
                </div>

                {/* Password */}
                <div className="w-full mx-auto mb-4">
                    <PasswordInput
                        name="password"
                        label="Password"
                        placeholder="Write password"
                        register={register}
                        isLarge={true}
                        errors={errors}
                        validationRules={{ required: "Password is required" }}
                    />
                </div>

                {/* <Link href={'/auth/forgot-password'} className='underline underline-offset-2 font-medium font-epilogue'>{t("forgot")}</Link> */}

                {/* Submit */}
                <button type='submit' disabled={isLoading} className='bg-primary hover:bg-primary/80 py-3 font-epilogue rounded-lg w-full mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white disabled:cursor-not-allowed cursor-pointer'>
                    {isLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                    <span>{isLoading ? "Loading" : "Signin"}</span>
                </button>
            </form>
        </div>
    );
};

export default LoginForm;