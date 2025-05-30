import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import useFetchData from '../Component/useFetchData';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { UserContext } from "../Component/UserContext.jsx";

//https://trust-coms.com/trust-note/756/

const Register = () => {
    const subjectData = useFetchData('/Data/course.json');
    const [input, setInput] = useState("");
    const [inputError, setInputError] = useState(false);
    const [subjectList, setSubjectList] = useState([]);
    const [subject, setSubject] = useState(null);
    const [subjectError, setSubjectError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const { setUserData } = useContext(UserContext);
  



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
      setEmail(event.target.value);
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
      if (subjectData  && Array.isArray(subjectData)) {
        // subjectだけを取り出す
        const subjects = subjectData.map(item => item.title);
        setSubjectList(subjects);
      }
    }, [subjectData]);


    const onChangeSubject = (event, value) => {
      setSubject(value);
      if (value) {
        setSubjectError(false);
      }
    };

    const onBlurSubject = (event) => {
      if (!event.target.value) {
        setSubjectError(true);
      }
    };
  
    const onSubmit = (event) => {

      event.preventDefault(); 

      let hasError = false;

  if (!input.trim()) {
    setInputError(true);
    hasError = true;
  }

  if (!email.trim()) {
    setEmailError(true);
    hasError = true;
  }

  if (!subject) {  // nullもしくは空のチェック
    setSubjectError(true);
    hasError = true;
  }

  if (hasError) {
    return;  // エラーあるなら送信処理しない
  }
      const values = {
        name: input,
        email: email,
        subject: subject
      };
      setUserData(values);
      console.log("Submit clicked!");
      console.log(values);

              // フォームの入力状態をリセット
    setInput("");
    setEmail("");
    setSubject(null);

    // エラーステートもリセット（必要なら）
    setInputError(false);
    setEmailError(false);
    setSubjectError(false);
    };



  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div>
        <TextField 
          label="Name"
          style={TextFieldStyle}
          value={input}  
          onChange={onChangeInput}
          onBlur={onBlurInput}
          error={inputError}
          helperText={inputError ? "Input Name" : ""}
        /> 
        </div>
        <TextField
          label="Email"
          style={TextFieldStyle}
          value={email}  
          onChange={onChangeEmail}
          onBlur={onBlurEmail}
          error={emailError}
          helperText={emailError ? "Input Email" : ""}
          />

          <Autocomplete
            options={subjectList}
            value={subject}
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
          <Button variant="contained" color="primary" type="submit">
            Submit
        </Button>
      </form>
    </div>
  )
}

export default Register