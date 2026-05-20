import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-nebulous-blue/90 backdrop-blur-md">
      <div className="mx-auto flex h-16  items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* الشعار وزر القائمة للجوال */}
        <div className="flex items-center gap-4 ">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-deep-space-blue hover:bg-station-white md:hidden"
            aria-label="فتح القائمة"
          >
            <Menu className="size-5" />
          </Button>

          <Link href="/" className="flex items-center gap-2">
            {/* Logo Mark */}
            <span className="relative grid size-9 place-items-center rounded-xl bg-deep-space-blue text-sm font-black text-station-white shadow-[0_10px_28px_rgba(16,17,59,0.18)]">
              A
            </span>

            {/* Logo Text */}
            <span className="text-lg font-extrabold tracking-tight text-soft-black">
              أسترا كيسز
            </span>
          </Link>
        </div>

        {/* روابط التنقل */}
        <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-dark-gray transition hover:bg-station-white hover:text-deep-space-blue"
          >
            الرئيسية
          </Link>

          <Link
            href="/products"
            className="rounded-full px-4 py-2 text-dark-gray transition hover:bg-station-white hover:text-deep-space-blue"
          >
            المنتجات
          </Link>

          <Link
            href="/collections"
            className="rounded-full px-4 py-2 text-dark-gray transition hover:bg-station-white hover:text-deep-space-blue"
          >
            المجموعات
          </Link>

          <Link
            href="/contact"
            className="rounded-full px-4 py-2 text-dark-gray transition hover:bg-station-white hover:text-deep-space-blue"
          >
            تواصل معنا
          </Link>
        </nav>

        {/* البحث والسلة */}
        <div className="flex items-center gap-3">
          <div className="relative hidden w-44 md:flex lg:w-64">
            <Search className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-gray" />

            <Input
              type="search"
              placeholder="ابحث..."
              className="h-9 rounded-md border-transparent bg-station-white pr-9 pl-3 text-sm text-soft-black shadow-sm placeholder:text-muted-gray focus-visible:ring-2 focus-visible:ring-stellar-blue/40"
            />
          </div>

          <Button
            variant="outline"
            size="icon"
            className="relative size-12 rounded-full border-transparent "
            aria-label="سلة المشتريات"
          >
            <ShoppingBag className="size-4" />

            <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-stellar-blue text-[10px] font-bold text-white shadow-[0_6px_14px_rgba(79,143,234,0.35)]">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
