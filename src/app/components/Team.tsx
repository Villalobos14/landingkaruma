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
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-complementary sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-complementary">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
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
                  <p className="text-sm/6 font-semibold text-secondary">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}
