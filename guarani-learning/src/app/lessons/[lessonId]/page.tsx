import { notFound } from 'next/navigation';
import { PlayCircle } from 'lucide-react';

const lessons = [
  { id: 1, title: 'Greetings and Introductions', content: '...' },
  { id: 2, title: 'Basic Phrases', content: '...' },
  { id: 3, title: 'Numbers and Colors', content: '...' },
  { id: 4, title: 'Family and Relationships', content: '...' },
];

export default function LessonPage({ params }: { params: { lessonId: string } }) {
  const lesson = lessons.find((l) => l.id === parseInt(params.lessonId));

  if (!lesson) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      
      <div className="space-y-8">
        {/* Video/Image Placeholder */}
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <PlayCircle size={48} className="text-gray-500" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Vocabulary</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Mba&apos;éichapa? - How are you?</li>
            <li>Iporã - Good</li>
            <li>Ha nde? - And you?</li>
            <li>Che réra ... - My name is ...</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Grammar Notes</h2>
          <p>Explanation about verb conjugations and sentence structure will go here.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Practice Quiz</h2>
          {/* Quiz component will go here */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <p>Quiz questions will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
