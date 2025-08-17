import { Package, CreditCard, ThumbsUp, ArrowRightLeft } from "lucide-react";

export default function Info() {
  return (
    <section className="bg-[#949186] py-2 md:py-4">
      <div className="flex flex-row overflow-x-auto px-6 gap-6 md:justify-center md:gap-12">
        {/* organiza os textos na horizontal */}
        {/* carrosel de informações */}

        <div className="flex items-center min-w-[200px] gap-4">
          <Package size={36} className="text-primary" />
          <div className="flex flex-col">
            <h2 className="text-primary text-[1rem] font-semibold md:text-[1.1rem]">
              Frete Grátis
            </h2>
            <p className="text-primary -mt-1 text-[0.8rem] md:text-[0.9rem]">
              A partir de R$ 250,00
            </p>
          </div>
        </div>

        <div className="flex items-center min-w-[200px] gap-4">
          <ArrowRightLeft size={36} className="text-primary" />
          <div className="flex flex-col">
            <h2 className="text-primary text-[1rem] font-semibold md:text-[1.1rem]">
              Garantia
            </h2>
            <p className="text-primary -mt-1 text-[0.8rem] md:text-[0.9rem]">
              12 meses para todas as armações
            </p>
          </div>
        </div>

        <div className="flex items-center min-w-[200px] gap-4">
          <CreditCard size={36} className="text-primary" />
          <div className="flex flex-col">
            <h2 className="text-primary text-[1rem] font-semibold md:text-[1.1rem]">
              Parcelamento
            </h2>
            <p className="text-primary -mt-1 text-[0.8rem] md:text-[0.9rem]">
              Parcele em até 10x sem juros
            </p>
          </div>
        </div>

        <div className="flex items-center min-w-[200px] gap-4">
          <ThumbsUp size={36} className="text-primary" />
          <div className="flex flex-col">
            <h2 className="text-primary text-[1rem] font-semibold md:text-[1.1rem]">
              Qualidade
            </h2>
            <p className="text-primary -mt-1 text-[0.8rem] md:text-[0.9rem]">
              Trabalhamos com as melhores marcas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
