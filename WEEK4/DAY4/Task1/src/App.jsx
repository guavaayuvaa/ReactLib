import {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
} from './features/api/jsonPlaceholderApi';

export default function App() {
  const {
    data: posts,
    isLoading,
    refetch,
  } = useGetPostsQuery(undefined, { refetchOnFocus: true });

  const [addPost] = useAddPostMutation();
  const [deletePost] = useDeletePostMutation();

 const handleAddPost = async () => {
  console.log('Adding post...');
  const res = await addPost({
    title: 'Test Post',
    body: 'This is a test body',
    userId: 1,
  });
  console.log('Response:', res);
};


  const handleDelete = async (id) => {
    await deletePost(id);
    console.log("post deleted");
    
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      <div className="flex gap-4 mb-4">
        <button onClick={handleAddPost} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Post
        </button>
        <button onClick={refetch} className="bg-green-500 text-white px-4 py-2 rounded">
          Manual Refetch
        </button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts?.slice(0, 5).map((post) => (
          <div key={post.id} className="bg-white shadow rounded p-4 mb-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{post.title}</h3>
              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}
