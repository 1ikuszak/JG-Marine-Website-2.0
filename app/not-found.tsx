import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-[60vh] flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="font-serif text-h2-sm md:text-h2 text-foreground mb-4">
        Page Not Found
      </h1>
      <p className="text-muted-foreground text-body-sm md:text-body mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        Return to Homepage
      </Link>
    </main>
  );
}
