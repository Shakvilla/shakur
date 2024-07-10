import React from "react";
import CodeSnippetSection from "./codesnippet-section";
// import CodeSnippetSection from "../CodeSnippetSection";

const RightSidebar = () => {
  const code1 = `const initialize = (): void => {
  config.cloudinaryConfig();
  const app: Express = express();
  databaseConnection();
  start(app);
  
};
initialize();
`;
  const code2 = `const instance: ReturnType<typeof axios.create> = axios.create({
  baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      gatewaytoken
    },
     withCredentials: true
});
`;
  return (
    <section className="w-full lg:w-5/12 border-l border-[#1E2D3D]">
      <div className="flex justify-start py-2 items-center border-y border-gray-700">
        <p className="text-[#607B96] pl-6">Code snippet showcase:</p>
      </div>
      <div className="relative mx-6 px-2">
        <CodeSnippetSection code={code1} language="typescript" />
      </div>
      <div className="relative mx-6 px-2">
        <CodeSnippetSection code={code2} language="typescript" />
      </div>
    </section>
  );
};

export default RightSidebar;
