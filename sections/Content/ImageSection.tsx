import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title: string;
  /**
   * @format textarea
   */
  description: string;
  image: ImageWidget;
  placement: "left" | "right";
  background: "primary" | "secondary" | "tech" | "growth" | "house";
  cta?: {
    href?: string;
    text?: string;
  };
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}

const PLACEMENT = {
  left: "flex-col lg:flex-row-reverse",
  right: "flex-col lg:flex-row",
};

const BACKGROUND = {
  primary: "bg-primary",
  secondary: "bg-secondary",
};

export default function ImageSection({
  title,
  description,
  image,
  placement,
  background,
  disableSpacing,
  cta,
}: Props) {
  return (
    <div class={`w-full bg-${background}`}>
      <div
        class={`flex ${PLACEMENT[placement]} items-start lg:mx-auto mx-5 md:mx-10`}
      >
        <Image
          width={640}
          class="w-[40%] object-fit z-10"
          sizes="(max-width: 640px) 100vw, 30vw"
          src={image}
          alt={image}
          decoding="async"
          loading="lazy"
        />
        <div class="flex flex-col justify-center w-[60%] p-20 gap-4 z-10 sticky top-[100px]">
          <div class="opacity-10 flex justify-end"><Icon id="dots" width={150} height={90} /></div>
          <h2 class="text-white w-[85%] text-[36px] font-extralight leading-[110%]">
            {title}
          </h2>
          <p class="text-white text-sm font-extralight leading-[150%]">
            {description}
          </p>
          {cta?.href && cta?.text && (
            <a
              class="w-max border border-white py-3 px-6 flex gap-2 mt-5 text-white transition-colors duration-200 cursor-pointer"
              href={cta.href}
            >
              <span>{cta.text}</span>
              <Icon
                id="ChevronRight"
                width={24}
                height={24}
                strokeWidth={"2"}
                class="text-secondary"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
