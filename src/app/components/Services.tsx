import Image from "next/image";

export default function Services() {
  return (
    <>
      <div className=" relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0  transform-gpu overflow-hidden blur-3xl sm:-top-5"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[10deg] bg-linear-to-tr from-[#68EE00] via-[#8beb6b] to-[#00A700] opacity-30 sm:left-[calc(50%-50rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-base/7 font-semibold text-complementary">Soluciones inovadoras</h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-complementary sm:text-5xl">
              Impulsamos tu negocio con tecnología innovadora
            </p>
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-primary-light opacity-30 backdrop-blur-2xl lg:rounded-l-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-complementary max-lg:text-center">
                      Desarrollo Web
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-complementary max-lg:text-center">
                      Creamos sitios y aplicaciones web a medida, optimizadas para rendimiento y experiencia de usuario.
                    </p>
                  </div>
                  <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-primary bg-primary shadow-2xl">
                      <Image
                        className="size-full object-cover object-top"
                        src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                        alt=""
                        draggable="false"
                        width={600}
                        height={600}
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
              </div>
              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-primary-light opacity-30 backdrop-blur-2xl max-lg:rounded-t-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-complementary max-lg:text-center">E-commerce</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-complementary max-lg:text-center">
                      Diseñamos y desarrollamos tiendas en línea que convierten visitantes en clientes.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                    <img
                      className="w-full max-lg:max-w-xs"
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
              </div>
              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-primary-light opacity-30 backdrop-blur-2xl"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-complementary max-lg:text-center">Branding y Diseño UX/UI</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-complementary max-lg:text-center">
                      Construimos marcas sólidas y experiencias digitales atractivas para conectar con tu audiencia.
                    </p>
                  </div>
                  <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                    <img
                      className="h-[min(152px,40cqw)] object-cover"
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
              </div>
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-primary-light opacity-30 backdrop-blur-2xl max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-complementary max-lg:text-center">
                    Optimización SEO
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-complementary max-lg:text-center">
                      Aumentamos tu visibilidad en los motores de búsqueda para atraer más clientes potenciales.
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow">
                    <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-primary shadow-2xl">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                          <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                            NotificationSetting.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              </div>
            </div>
          </div>
        </div>


        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#68EE00] via-[#8beb6b] to-[#00A700] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>

      </div>
    </>


  )
}
