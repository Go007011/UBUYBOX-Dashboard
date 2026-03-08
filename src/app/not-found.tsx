import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-2 text-gray-500">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50"
      >
        Go back home
      </Link>
    </main>
  );
}
