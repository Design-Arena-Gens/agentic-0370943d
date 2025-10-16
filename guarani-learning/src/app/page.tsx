import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Learn Guaraní, the Soul of Paraguay
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Embark on a journey to learn the beautiful Guaraní language with our interactive lessons, vocabulary builders, and cultural insights.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/lessons"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Start Learning
          </Link>
          <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="p-6 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold">Interactive Lessons</h3>
          <p className="mt-2 text-gray-600">Engaging lessons with audio and visuals to help you learn effectively.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold">Vocabulary Builder</h3>
          <p className="mt-2 text-gray-600">Master new words with our flashcards and quizzes.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold">Cultural Insights</h3>
          <p className="mt-2 text-gray-600">Discover the rich culture and history behind the Guaraní language.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold text-center">What Our Learners Say</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-gray-100 rounded-lg">
            <p className="italic">&quot;This platform made learning Guaraní so much fun and accessible. The lessons are well-structured and the cultural notes are a great addition.&quot;</p>
            <p className="mt-4 font-semibold">- Maria G.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <p className="italic">&quot;I&apos;ve tried other resources, but this is by far the best. The interactive exercises really helped solidify my understanding.&quot;</p>
            <p className="mt-4 font-semibold">- John D.</p>
          </div>
        </div>
      </section>
    </div>
  );
}