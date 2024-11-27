import { ICodeSnippetProps } from "@/interfaces/icode-snippet";
import React from "react";


  /**
   * CodeSnippet is a React component that takes a code string and a language as props,
   * and renders the code with syntax highlighting.
   *
   * The syntax highlighting is done by replacing the code with a set of HTML spans
   * that have class names corresponding to the type of syntax. The class names are
   * as follows:
   *
   * - code-string: for strings
   * - code-comment: for comments
   * - code-number: for numbers
   * - code-keyword: for keywords
   *
   * The language can be one of the following:
   *
   * - javascript
   * - typescript
   * - html
   * - css
   *
   * The component will render the code with the correct syntax highlighting based
   * on the language.
   */
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
