import { ICodeSnippetProps } from "@/interfaces/icode-snippet";
import React from "react";


const CodeSnippet: React.FC<ICodeSnippetProps> = ({ code, language }) => {
  const getHighlightedCode = (
    code: string,
      language: 'javascript' | 'typescript' | 'html' | 'css',

  ): { __html: string } => {
    const keywords: { [key: string]: RegExp } = {
      javascript:
        /\b(var|let|const|if|else|for|while|function|return|class|extends|import|export|default|new|try|catch|finally|throw)\b/g,
      typescript:
        /\b(var|let|const|if|else|for|while|function|return|class|extends|import|export|default|new|try|catch|finally|throw|interface|type)\b/g,
      html: /(&lt;\/?[\w\s="/.':;#-\/\?]+&gt;)/g,
      css: /([\w-]+\s*:\s*[^;]+;)/g,
    };

    const commonPatterns: { [key: string]: RegExp } = {
      string: /(".*?"|'.*?'|`.*?`)/g,
      comment: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
      number: /\b\d+(\.\d+)?\b/g,
    };

    let highlightedCode = code
      .replace(commonPatterns.string, '<span class="code-string">$&</span>')
      .replace(commonPatterns.comment, '<span class="code-comment">$&</span>')
      .replace(commonPatterns.number, '<span class="code-number">$&</span>');

    if (keywords[language]) {
      highlightedCode = highlightedCode.replace(
        keywords[language],
        '<span class="code-keyword">$&</span>'
      );
    }

    return { __html: highlightedCode };
  };

  return (
    <pre className="code-container">
      <code dangerouslySetInnerHTML={getHighlightedCode(code, language)} />
    </pre>
  );
};

export default CodeSnippet;
