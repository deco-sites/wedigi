import MultiStepForm from "$store/islands/MultiStepForm.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  variant: "Normal" | "Reverse";
}

interface Field {
  name: string;
  type: "text" | "select" | "radio";
  placeHolder: string;
  options?: string[];
}

export interface Props {
  text: string;
  textEmphasys?: string;
  cta: CTA[];
  fields: Field[][];
}

export default function StepForm({ text, textEmphasys, cta, fields }: Props) {
  return (
    <div class="py-16 md:py-28 bg-gradient-to-r from-[#74ebd5] to-[#ACB6E5]">
      <section class="xl:container mx-auto flex flex-col items-center justify-center gap-8 mb-16 lg:mb-0 z-10">
        <h2 class="mx-6 lg:mx-0 text-center text-[36px] leading-[125%] font-medium w-[400px] z-10">
          {text} { textEmphasys && <strong class="text-accent font-semibold">{ textEmphasys }</strong> }
        </h2>
        <div class="flex flex-col md:flex-row gap-4 z-20">
          <MultiStepForm
            fields={fields}
          />
        </div>
      </section>
    </div>
  );
}
