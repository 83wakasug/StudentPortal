import React, { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import useFetchData from '../Component/useFetchData';
import Autocomplete from '@mui/material/Autocomplete';

const Register = () => {
   const subjectData = useFetchData('/Data/course.json');
   const [input, setInput] = useState("");
   const [inputError, setInputError] = useState(false);
   const [subjectList, setSubjectList] = useState([]);
   const [subject, setSubject] = useState();
   const [subjectError, setSubjectError] = useState(false);
   const [email, setEmail] = useState();
   const [emailError, setEmailError] = useState(false);

   const TextFieldStyle = {
      margin: '20px',
      width: '300px',
    };

   const onChangeInput = (event) => {
    setInput(event.target.value);
    if (event.target.value) {
      setInputError(false);
    }
  };
  const onBlurInput = (event) => {     //TextFieldからフォーカスが離れたときに実行する関数
    if (!event.target.value) {
      setInputError(true);
    }
  };

  
  const onChangeEmail = (event) => {
    setInput(event.target.value);
    if (event.target.value) {
      setEmailError(false);
    }
  };
  const onBlurEmail = (event) => {     //TextFieldからフォーカスが離れたときに実行する関数
    if (!event.target.value) {
      setEmailError(true);
    }
  };
 
  useEffect(() => {
    if (subjectList && Array.isArray(subjectData)) {
      // subjectだけを取り出す
      const subjects = subjectData.map(item => item.title);
      setSubjectList(subjects);
    }
  }, [subjectData]);


  const onChangeSubject = (event, value) => {
    setSubject(event.target.value);
    if (event.target.value) {　　　　　//入力されたらエラーを解除
      setSubjectError(false);
    }
  };

  const onBlurSubject = (event) => {
    if (!event.target.value) {　　　　　//空欄ならエラーをtrueにする
      setSubject(true);
    }
  };


  return (
    <div className="App">
      <TextField 
        label="Name"
        style={TextFieldStyle}
        onChange={onChangeInput}
        onBlur={onBlurInput}
        error={inputError}
        helperText={inputError ? "Input Name" : ""}
      /> 

       <TextField
        label="Email"
        style={TextFieldStyle}
        onChange={onChangeEmail}
        onBlur={onBlurEmail}
        error={emailError}
        helperText={emailError ? "Input Email" : ""}
        />

        <Autocomplete
          options={subjectList}　　　　　//選択肢を指定
          onChange={onChangeSubject}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Subject"
              style={TextFieldStyle}
              onBlur={onBlurSubject}
              error={subjectError}
              helperText={subjectError ? "Chose course" : ""}
            />
          )}
/>
    </div>
  )
}

export default Register