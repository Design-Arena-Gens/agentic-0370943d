const forumPosts = [
  { id: 1, title: 'How do you use nasal harmony correctly?', author: 'User123', replies: 5 },
  { id: 2, title: 'Practice partner thread', author: 'GuaraniLearner', replies: 12 },
  { id: 3, title: 'Resources for Guaraní music', author: 'MusicLover', replies: 8 },
];

export default function ForumPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Community Forum</h1>
      <div className="space-y-4">
        {forumPosts.map((post) => (
          <div key={post.id} className="p-4 border border-gray-200 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">by {post.author}</p>
            </div>
            <div className="text-right">
              <p>{post.replies} replies</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
