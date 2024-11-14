"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/utils/constants";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { setLoginCookie } from "@/utils/auth";
import { USER } from "@/mock-data/auth";

// Define validation schema
const loginSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z
    .string()
    .min(8, "パスワードは8文字以上である必要があります")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "パスワードには少なくとも1つの大文字、小文字、数字、特殊文字が必要です"
    ),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    return new Promise<void>((resolve) => {
      if (data.email === USER.email && data.password === USER.password) {
        setTimeout(() => {
          setLoginCookie();
          toast.success("ログインに成功しました");
          router.push(ROUTE.DASHBOARD);
          resolve();
        }, 1500);
      } else {
        setTimeout(() => {
          toast.error("メールアドレスまたはパスワードが正しくありません");
          resolve();
        }, 1500);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-primary-dark-gray mb-1"
        >
          メールアドレス
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              id="email"
              disabled={isSubmitting}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
            />
          )}
        />
        {errors.email && (
          <p className="text-destructive text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-primary-dark-gray mb-1"
        >
          パスワード
        </label>
        <div className="relative">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type={showPassword ? "text" : "password"}
                id="password"
                disabled={isSubmitting}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange pr-10"
              />
            )}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-destructive text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-orange text-white py-2 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        ログイン
      </button>

      <button
        type="button"
        onClick={() => router.push(ROUTE.REGISTER)}
        className="w-full bg-white text-primary-orange border border-primary-orange py-2 rounded-md hover:bg-primary-light-gray hover:text-white transition-colors"
      >
        新規登録
      </button>
    </form>
  );
}
