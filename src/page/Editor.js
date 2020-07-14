import React, { useReducer } from 'react';
import Input from '../component/Input';
import marked from 'marked';
import axios from 'axios';

function reducer(state, action) {
  return {
    ...state,
    text: action.value
  };
}

function Editor(props) {
  const [state, dispatch] = useReducer(reducer, {
    text: ""
  });
  const { text } = state;

  const onChange = (e) => {
    dispatch(e.target);
  }

  const onClick = async () => {
    const data = {
      name: "ppt",
      markdown: text
    };

    await axios.post("/me/notes",
      data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
  }

  const convertToHTML = (text) => {
    const rawMarkup = marked(text);
    return (
      <div className="presentation" dangerouslySetInnerHTML={{ __html: rawMarkup }}/>
    )
  }

  return (
    <div className="editor">
      <div className="preview">
        {convertToHTML(text)}
      </div>
      <div className="markdown-text-container">
        <Input value={text} onChange={onChange}/>
      </div>
      <button onClick={onClick}>저장</button>
    </div>
  );
}

export default Editor;
