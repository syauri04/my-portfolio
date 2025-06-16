import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Footer() {
  return (
    <FadeInWhenVisible className="mt-20 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-400 mb-4">Interested in working together? Send a message to please:</p>
      <a href="mailto:kamu@email.com" className="text-blue-400 underline text-lg">
        syauri04@gmail.com
      </a>
    </FadeInWhenVisible>
  );
}
