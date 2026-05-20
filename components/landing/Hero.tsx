import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, MoveUpLeft } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-4 py-6 md:py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* البطاقة اليمنى: المحتوى النصي */}
        <Card className="relative flex flex-col overflow-hidden border border-white bg-station-white">
          <CardContent className="relative z-10 flex flex-1 flex-col justify-between gap-12 px-7 py-9 md:px-10 md:py-12 lg:px-12">
            <div>
              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-[#374151] shadow-[inset_0_0_0_1px_rgba(221,231,245,0.9)]">
                <span className="flex size-5 items-center justify-center rounded-full bg-station-white ">
                  <span className="size-2.5 rounded-full bg-stellar-blue" />
                </span>

                <span>المنتجات متوفرة الآن</span>
              </div>

              <h1 className="text-2xl font-bold text-soft-black md:text-5xl lg:text-4xl">
                مصدرك الأول لأغطية هواتف
                <br />
                <span className="text-deep-space-blue">مستوحاة من المجرات</span>
              </h1>

              <p className="mt-5 text-base leading-8 text-dark-gray md:text-lg">
                ارتقِ بأسلوبك مع أغطية حماية مصممة لأفضل الهواتف الذكية، , تجمع
                بين الحماية اليومية واللمسة الفضائية الهادئة.
              </p>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="group h-12 rounded-xl bg-stellar-blue px-7 text-base font-semibold text-white "
                >
                  تصفح الأغطية
                  <MoveUpLeft className="w-4 h-4" />
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border/70 pt-6">
                <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-2.5 text-sm font-medium text-muted-gray shadow-[inset_0_0_0_1px_rgba(229,231,235,0.9)]">
                  <CheckCircle2 className="size-4 text-stellar-blue" />
                  <span>ضمان 6 أشهر</span>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-2.5 text-sm font-medium text-muted-gray shadow-[inset_0_0_0_1px_rgba(229,231,235,0.9)]">
                  <CheckCircle2 className="size-4 text-stellar-blue" />
                  <span>+8,450 عميل راضٍ</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* البطاقة اليسرى: المعرض البصري */}
        <Card className="relative flex min-h-[560px] flex-1 flex-col overflow-hidden rounded-[2rem] border border-deep-space-blue bg-deep-space-blue shadow-[0_28px_90px_rgba(16,17,59,0.28)]">
          <CardContent className="relative flex flex-1 items-center justify-center p-8">
            {/* خلفية ناعمة */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_20%,rgba(79,143,234,0.35),transparent_32%),radial-gradient(circle_at_70%_85%,rgba(212,175,55,0.12),transparent_26%)]" />

            {/* تأثير المدار */}
            <div className="absolute aspect-square h-[78%] rounded-full border border-dashed border-white/20 opacity-50" />
            <div className="absolute aspect-square h-[56%] rounded-full border border-white/10 opacity-40" />

            {/* أزرار تنقل */}
            <button
              type="button"
              aria-label="السابق"
              className="absolute right-6 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
            >
              <ArrowLeft className="size-5 rotate-180" />
            </button>

            <button
              type="button"
              aria-label="التالي"
              className="absolute left-6 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
            >
              <ArrowLeft className="size-5" />
            </button>

            {/* مكان عرض المنتج بدون تحديد عرض مباشر */}
            <div className="relative z-10 flex aspect-[9/16] h-[68%] min-h-72 items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-md">
              <span className="text-sm text-white/70">صورة الغطاء هنا</span>
            </div>

            {/* بطاقة حالة التوفر */}
            <div className="absolute bottom-8 right-8 z-20 flex flex-col items-start rounded-xl border border-border/50 bg-station-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-transform hover:-translate-y-1">
              <span className="text-xs font-bold text-soft-black">
                iPhone 16 Pro Max
              </span>

              <div className="mt-1 flex items-center gap-1.5 text-[10px] font-medium text-muted-gray">
                <span className="size-1.5 rounded-full bg-stellar-blue" />
                <span>متوفر في المخزن</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
