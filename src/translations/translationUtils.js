import React from 'react';
import { Translate } from "react-localize-redux";

/**
 * Replaces all occurences of [key] with <Translate id="key" />. Enables dynamic replacement
 * of translation keys with react-redux-localize components.
 * 
 * @param text 
 */
export function toReactTranslate(text) {
    let langTagRegex = /\[([\w.]+)\]/g
    let result = [];
    let nextStart = 0;
    let tagMatch;
    
    do {
      tagMatch = langTagRegex.exec(text);
  
      if (tagMatch) {
        let id = tagMatch[1];
        let before = text.substring(nextStart, tagMatch.index);
        
        if (before) {
            result.push(before);
        }
        
        // Add React Translate component to result
        result.push(<Translate id={id} key={id} />);
        nextStart = tagMatch.index + tagMatch[0].length;
      }
    } while(tagMatch);
      
    if (nextStart) {
      let after = text.substr(nextStart);
      
      if (after) {
          result.push(after);
      }
    }
  
    return result.length ? result : text;
}

