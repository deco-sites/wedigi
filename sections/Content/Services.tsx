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
    tags: Array<string>;
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
    services = [
      {
        label: "Implantação de",
        labelEmphasis: "e-commerce",
        description: "Com mais de 1000 projetos, temos a experiência necessária para transformar seu sonho em realidade. Temos templates, MVP, mas gostamos mesmo é da complexidade.",
        tags: ["VTEX", "SHOPIFY", "DECO", "WAP STORE", "WAKE"],
        unit: "tech"
      },
      {
        label: "Evolução / On-going do seu",
        labelEmphasis: "e-commerce",
        description: "A fase mais importante do seu projeto, com metologia exclusiva, somos ativos em ajudar você encontrar as melhores escolhas para aumentar suas vendas.",
        tags: ["DEV", "SEO", "CRO", "ATENDIMENTO"],
        unit: "tech"
      },  
      {
        label: "Performance para seu",
        labelEmphasis: "e-commerce",
        description: "A compra de mídia com a estratégia correta e valorização do seu dinheiro. Entendemos seu mercado e trazemos o público assertivo com todas as quebras de objeção para você performar com excelência!",
        tags: ["ADWORDS", "META", "PINTEREST"],
        unit: "growth"
      }, 
      {
        label: "Integrações",
        labelEmphasis: "customizadas",
        description: "Da integração com aplicativos à sistema de campanha de incentivo, nosso time multidisciplinar está preparado para atender todas as suas necessidades no digital.",
        tags: ["SISTEMAS", "INTEGRAÇÕES", "MIDDLEWARES"],
        unit: "house"
      }],
    layout,
  } = props;

  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-2 mb-10 lg:py-10 lg:px-0">
      <Header
        title={title}
        description={description}
        colorReverse={false}
        alignment={layout?.headerAlignment || "center"}
      />
      <div class="w-full flex justify-center">
        <div class="flex flex-col gap-4 lg:gap-8 w-full lg:grid grid-flow-col auto-cols-fr">
          <Slider class="carousel carousel-start gap-4 lg:gap-8 row-start-2 row-end-5">
            {
              services.map((service, index) => {
                const bgColor = service.unit == "tech" ? "bg-tech" : service.unit == "growth" ? "bg-growth" : service.unit == "house" ? "bg-house" : "bg-primary"
                const borderColor = service.unit == "tech" ? "border-tech" : service.unit == "growth" ? "border-growth" : service.unit == "house" ? "border-house" : "border-primary"
                const color = service.unit == "tech" ? "text-tech" : service.unit == "growth" ? "text-growth" : service.unit == "house" ? "text-house" : "text-primary"
                return (
                  <Slider.Item
                    index={index}
                    class="flex flex-col gap-4 carousel-item first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
                  >
                    <div
                      class={`bg-white border ${borderColor} p-5 text-${service.unit}`}
                    >
                      <div class="flex-auto flex flex-col gap-1 lg:gap-2">
                        <h2
                          class={`text-primary lg:text-xl leading-7`}
                        >
                          {service.label}<br /><strong class={`text-${service.unit}`}>{service.labelEmphasis}</strong>
                        </h2>
                        <p
                          class={`flex items-center text-sm leading-5 text-secondary w-[400px] h-[100px]`}
                        >
                          {service.description}
                        </p>
                        {
                          service.tags.length > 0 &&
                            <div class="flex justify-start gap-2 mb-3">
                              {
                                service.tags.map((tag, index) => (
                                  <div class={`inline-block text-xs rounded-md py-1 px-3 text-white bg-${service.unit}`} key={index}>
                                    { tag }
                                  </div>
                                ))
                              }
                          </div>
                        }
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
                )
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}
