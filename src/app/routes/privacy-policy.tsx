import Markdown from "react-markdown";
import { Link } from "react-router";

import rehypeRaw from "rehype-raw";
import privacyPolicyContent from "../../../PRIVACY_POLICY.md?raw";

export function meta() {
  return [
    { title: "Privacy Policy - Word Search" },
    { name: "description", content: "Privacy Policy for Word Search game" },
  ];
}

export default function PrivacyPolicyRoute() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <nav className="pb-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Back to Home
        </Link>
      </nav>
      <article className="prose prose-gray max-w-none">
        <Markdown rehypePlugins={[rehypeRaw]}>{privacyPolicyContent}</Markdown>
      </article>
    </div>
  );
}
