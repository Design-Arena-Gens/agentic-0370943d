export default function GrammarPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Grammar</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Verb Conjugation</h2>
          <p className="mt-2 text-gray-600">Guaraní verbs are conjugated based on the person and number. Here are some examples...</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Sentence Structure</h2>
          <p className="mt-2 text-gray-600">The typical sentence structure in Guaraní is Subject-Object-Verb (SOV)...</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Nasal Harmony</h2>
          <p className="mt-2 text-gray-600">A key feature of Guaraní is nasal harmony, where the nasality of a stressed vowel spreads to other vowels in the word...</p>
        </div>
      </div>
    </div>
  );
}
