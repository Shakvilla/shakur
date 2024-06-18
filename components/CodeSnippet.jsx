import React from 'react';
import PropTypes from 'prop-types';
// import './CodeHighlighter.css'; // Import the CSS file for styling

const CodeSnippet = ({ code, language }) => {
    const getHighlightedCode = (code, language) => {
        const keywords = {
            javascript: /\b(var|let|const|if|else|for|while|function|return|class|extends|import|export|default|new|try|catch|finally|throw)\b/g,
            typescript: /\b(var|let|const|if|else|for|while|function|return|class|extends|import|export|default|new|try|catch|finally|throw|interface|type)\b/g,
            html: /(&lt;\/?[\w\s="/.':;#-\/\?]+&gt;)/g,
            css: /([\w-]+\s*:\s*[^;]+;)/g,
        };

        const commonPatterns = {
            string: /(".*?"|'.*?'|`.*?`)/g,
            comment: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
            number: /\b\d+(\.\d+)?\b/g,
           
        };

        let highlightedCode = code
            .replace(commonPatterns.string, '<span className="code-string">$&</span>')
            .replace(commonPatterns.comment, '<span className="code-comment">$&</span>')
            .replace(commonPatterns.number, '<span className="code-number">$&</span>');

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

// CodeSnippet.propTypes = {
//     code: PropTypes.string.isRequired,
//     language: PropTypes.oneOf(['javascript', 'typescript', 'html', 'css']).isRequired,
// };

export default CodeSnippet;
