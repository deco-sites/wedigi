import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";

export interface Props {
  title?: string;
  description?: string;
  services?: Array<{
    label: string;
    labelEmphasis: string;
    description: string;
    unit: "tech" | "growth" | "house";
  }>;
  layout?: {
    variation?: "Simple" | "With border" | "Color reverse";
    headerAlignment?: "center" | "left";
  };
}

export default function Services(
  props: Props,
) {
  const {
    title = "Como podemos ajudar seu negócio?",
    description = "",
    services = [{
      label: "Implantação de",
      labelEmphasis: "e-commerce",
      description: "Com mais de 1000 projetos, temos a experiência necessária para transformar seu sonho em realidade.",
      unit: "tech"
    }, {
      label: "Performance para seu",
      labelEmphasis: "e-commerce",
      description: "A compra de mídia com a estratégia correta e valorização do seu dinheiro. Entendemos seu mercado e trazemos o público assertivo com todas as quebras de objeção para você performar com excelência!",
      unit: "growth"
    }, {
      label: "Integrações",
      labelEmphasis: "customizadas",
      description: "Da integração com aplicativos à sistema de campanha de incentivo, nosso time multidisciplinar está preparado para atender todas as suas necessidades no digital.",
      unit: "house"
    }],
    layout,
  } = props;

  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-8 lg:gap-10 lg:py-10 lg:px-0">
      <Header
        title={title}
        description={description}
        alignment={layout?.headerAlignment || "center"}
      />
      <div class="w-full flex justify-center">
        <div class="flex flex-col gap-4 lg:gap-8 w-full lg:grid grid-flow-col auto-cols-fr">
        <Slider class="carousel carousel-start gap-4 lg:gap-8 row-start-2 row-end-5">
        {
          services.map((service, index) => (
          <Slider.Item
            index={index}
            class="flex flex-col gap-4 carousel-item first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
          >
          <div
              class={`bg-white border border-${service.unit} p-5 text-${service.unit}`}
            >
              <div class="flex-auto flex flex-col gap-1 lg:gap-2">
                <h2
                  class={`text-base lg:text-xl leading-7`}
                >
                  {service.label} <strong class={`text-${service.unit}`}>{ service.labelEmphasis}</strong>
                </h2>
                <p
                  class={`text-sm leading-5 text-tertiary w-[400px] h-[130px]`}
                >
                  {service.description}
                </p>
                {
                  service &&
                  <Icon
                    id={service.unit}
                    width={250}
                    height={35}
                  />
                }
              </div>
            </div>
              </Slider.Item>
            ))
          }
          </Slider>
        </div>
      </div>
    </div>
  );
}
