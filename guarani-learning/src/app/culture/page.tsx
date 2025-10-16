import Image from 'next/image';

export default function CulturePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Cultural Insights</h1>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Image src="/placeholder.svg" alt="Tereré" width={400} height={300} className="rounded-lg" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold">The Importance of Tereré</h2>
            <p className="mt-2 text-gray-600">Tereré is a traditional Paraguayan drink and a central part of the culture. It&apos;s an infusion of yerba mate, similar to mate but prepared with cold water and ice, and often mixed with medicinal herbs.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-8">
          <div className="md:w-1/3">
            <Image src="/placeholder.svg" alt="Ñandutí" width={400} height={300} className="rounded-lg" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold">Ñandutí Lace</h2>
            <p className="mt-2 text-gray-600">Ñandutí is a traditional Paraguayan embroidered lace. The name means &quot;spider web&quot; in Guaraní. It&apos;s a beautiful and intricate art form passed down through generations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
