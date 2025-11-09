import TechTools from "@/components/Sections/TechTools/TechTools.tsx";
import TensorflowSVG from "@/assets/icons/tensorflow.svg";
import NextSVG from "@/assets/icons/nextjs.svg";
import UnitySVG from "@/assets/icons/unity.svg";
import GitHubSVG from "@/assets/icons/github.svg";
import VSCodeSVG from "@/assets/icons/vscode.svg";
import ReactSVG from "@/assets/icons/react.svg";
import CSharpSVG from "@/assets/icons/csharp.svg";
import HuggingFaceSVG from "@/assets/icons/huggingface.svg";

const iconsArray = [
  { title: "TensorFlow", svg: TensorflowSVG, category: "ai" },
  { title: "Hugging Face", svg: HuggingFaceSVG, category: "ai" },
  { title: "Next.js", svg: NextSVG, category: "dev" },
  { title: "React", svg: ReactSVG, category: "dev" },
  { title: "Unity3D", svg: UnitySVG, category: "game" },
  { title: "C#", svg: CSharpSVG, category: "game" },
  { title: "GitHub", svg: GitHubSVG, category: "support" },
  { title: "VS Code", svg: VSCodeSVG, category: "support" },
];

export default function HomePage() {
  return (
    <>
      {/* other sections of your portfolio */}

      <TechTools iconsArray={iconsArray} />

      {/* maybe a footer or next section */}
    </>
  );
}
