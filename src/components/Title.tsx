export default function Title({ text }: { text: string }) {
  return (
    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
      {text}
    </h2>
  );
}
