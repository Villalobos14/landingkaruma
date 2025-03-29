import Image from "next/image"

const people = [
  {
    name: 'Alejandro Villalobos',
    role: 'UX | UI Designer',
    imageUrl:
      'joshi.jpg',
  },

  {
    name: 'Vinicio Portela',
    role: 'UX | UI Designer',
    imageUrl:
      'viniciusjr.webp',
  },
  {
    name: 'Pablo Altuzar',
    role: 'Frontend Developer',
    imageUrl:
      'ninopolla.jpg',
  },
  {
    name: 'Carlos Pinacho',
    role: 'Frontend Developer',
    imageUrl:
      'pinocho.jpg',
  },
  {
    name: 'Roxana Flores',
    role: 'Backend Developer',
    imageUrl:
      'roxana.jpg',
  },
  {
    name: 'Javier Cundapí',
    role: 'Backend Developer',
    imageUrl:
      'javier.jpg',
  },
  // More people...
]

export default function Team() {
  return (
    <div className="bg-primary relative isolate">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[10deg] bg-linear-to-tr from-[#68EE00] via-[#8beb6b] to-[#00A700] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="py-24 sm:py-32 mx-auto ">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-complementary sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg/8 text-complementary">
              We&apos;re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person, i) => (
              <li key={i}>
                <div className="flex items-center gap-x-6">
                  <Image
                    alt=""
                    src={`/images/${person.imageUrl}`}
                    className="size-16 rounded-full object-cover"
                    width={64}
                    height={64}
                    draggable="false"
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-complementary">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-complementary">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      

    </div>
  )
}
