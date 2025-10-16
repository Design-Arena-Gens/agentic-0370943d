import Link from 'next/link';

const lessons = [
  { id: 1, title: 'Greetings and Introductions', description: 'Learn how to greet people and introduce yourself in Guaraní.' },
  { id: 2, title: 'Basic Phrases', description: 'Master essential phrases for everyday conversations.' },
  { id: 3, title: 'Numbers and Colors', description: 'Learn to count and identify colors.' },
  { id: 4, title: 'Family and Relationships', description: 'Talk about your family and friends.' },
];

export default function LessonsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Lessons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/lessons/${lesson.id}`}>
            <div className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold">{lesson.title}</h2>
              <p className="mt-2 text-gray-600">{lesson.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
