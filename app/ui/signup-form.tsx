'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import {
  AtSymbolIcon,
  KeyIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { signup, SignupState } from '@/app/lib/actions';

export default function SignupForm() {
  const initialState: SignupState = {
    message: null,
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    signup,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">
          Create your account.
        </h1>

        <div className="w-full">
          {/* Name */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="name"
            >
              Name
            </label>

            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />

              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            {state.errors?.name && (
              <p className="mt-2 text-sm text-red-500">
                {state.errors.name[0]}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mt-4">
            <label
              className="mb-3 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>

            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />

              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            {state.errors?.email && (
              <p className="mt-2 text-sm text-red-500">
                {state.errors.email[0]}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mt-4">
            <label
              className="mb-3 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>

            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Create a password"
                required
                minLength={6}
              />

              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            {state.errors?.password && (
              <p className="mt-2 text-sm text-red-500">
                {state.errors.password[0]}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <label
              className="mb-3 block text-xs font-medium text-gray-900"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>

            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                minLength={6}
              />

              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            {state.errors?.confirmPassword && (
              <p className="mt-2 text-sm text-red-500">
                {state.errors.confirmPassword[0]}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          className="mt-4 w-full"
          aria-disabled={isPending}
        >
          {isPending ? 'Creating Account...' : 'Create Account'}

          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>

        {/* General Error Message */}
        {state.message && (
          <p
            className="mt-2 text-sm text-red-500"
            aria-live="polite"
          >
            {state.message}
          </p>
        )}

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-blue-500 hover:text-blue-600"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}

